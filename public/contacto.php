<?php
/**
 * Endpoint del formulario de contacto para hosting cPanel / Apache con PHP.
 * Se despliega en la raíz (public_html/contacto.php) y queda accesible en
 * https://www.novosti.com/contacto.php
 *
 * El frontend (src/lib/submitLead.ts) le envía un JSON y espera de vuelta
 * { "success": true } con estado 200, o { "success": false, "message": "..." }
 * con un estado 4xx/5xx.
 *
 * Ajusta $TO y $FROM abajo. $FROM debe ser una dirección del propio dominio
 * para no fallar los filtros SPF/DKIM del servidor de correo.
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// --- Configuración -------------------------------------------------
$TO      = 'proyectos@novosti.com';
$FROM    = 'noreply@novosti.com';
$SUBJECT = 'Nueva solicitud de cotización — NOVOSTI';
// ----------------------------------------------------------------

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    echo json_encode(['success' => false, 'message' => 'Método no permitido.']);
    exit;
}

// Acepta cuerpo JSON o formulario tradicional.
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

$get = static function (string $key) use ($data): string {
    return isset($data[$key]) ? trim((string) $data[$key]) : '';
};

// Anti inyección de cabeceras en campos que van a headers de correo.
$noCrlf = static function (string $s): string {
    return str_replace(["\r", "\n", "%0a", "%0d", "%0A", "%0D"], ' ', $s);
};

// Honeypot: si viene relleno es un bot. Respondemos OK sin enviar nada.
if ($get('botcheck') !== '') {
    echo json_encode(['success' => true]);
    exit;
}

$name  = $get('name');
$email = $get('email');

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Nombre y correo válidos son obligatorios.']);
    exit;
}

$company = $get('company');
$phone   = $get('phone');
$service = $get('service');
$details = $get('details');

$body  = "Nombre: {$name}\n";
$body .= "Correo: {$email}\n";
$body .= 'Empresa / Entidad: ' . ($company !== '' ? $company : '—') . "\n";
$body .= 'Teléfono: ' . ($phone !== '' ? $phone : '—') . "\n";
$body .= 'Servicio de interés: ' . ($service !== '' ? $service : '—') . "\n\n";
$body .= "Detalles:\n" . ($details !== '' ? $details : '—') . "\n";

$headers  = 'From: NOVOSTI web <' . $noCrlf($FROM) . ">\r\n";
$headers .= 'Reply-To: ' . $noCrlf($email) . "\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();

$encodedSubject = '=?UTF-8?B?' . base64_encode($SUBJECT) . '?=';

$sent = @mail($TO, $encodedSubject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(502);
    echo json_encode([
        'success' => false,
        'message' => 'No se pudo enviar el correo. Escríbenos por WhatsApp mientras lo revisamos.',
    ]);
}
