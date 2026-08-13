
export default function Topbar() {
  return (
    <div className="topbar" aria-label="Datos de contacto">
      <div className="topbar-inner">
        <ul className="topbar-info">
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.5-1.1a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z"/></svg>
            <span>+506 2222 0000</span>
          </li>
          <li className="div" aria-hidden="true"></li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M4 4h16v16H4z"/><path d="M4 6l8 6 8-6"/></svg>
            <span>proyectos@novosti.com</span>
          </li>
          <li className="div" aria-hidden="true"></li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
            <span data-en="Mon–Fri 8:00–18:00 · Sat 9:00–13:00">Lun–Vie 8:00–18:00 · Sáb 9:00–13:00</span>
          </li>
        </ul>
        <ul className="topbar-social" aria-label="Redes sociales">
          <li><a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l.5-3H13V9.2c0-.9.3-1.5 1.6-1.5H17V5.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V11H7v3h3v8z"/></svg></a></li>
          <li><a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.6-1.9 3.9 0 4.6 2.5 4.6 5.8V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z"/></svg></a></li>
          <li><a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a></li>
          <li><a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5a3 3 0 00-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 001 7.5C.6 9.4.6 12 .6 12s0 2.6.4 4.5A3 3 0 003.1 18.6C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 002.1-2.1c.4-1.9.4-4.5.4-4.5s0-2.6-.4-4.5zM10 15.5v-7l6 3.5z"/></svg></a></li>
        </ul>
      </div>
    </div>
  );
}
