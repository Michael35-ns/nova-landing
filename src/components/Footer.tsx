import { site, whatsappUrl } from '../siteConfig';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-top">
        <div className="footer-brand">
          <img src="/assets/novosti-logo-transparent.png" alt="NOVOSTI — empresa de construcción y remodelación en Costa Rica" />
          <p data-en="Construction, remodeling, civil works, infrastructure maintenance and telecommunications in Costa Rica — with technical direction and end-to-end project management.">Construcción, remodelación, obra civil, mantenimiento de infraestructura y telecomunicaciones en Costa Rica — con dirección técnica y gestión integral de cada proyecto.</p>
          <div className="footer-social" aria-label="Redes sociales">
            <a href={site.social.linkedin} aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.6-1.9 3.9 0 4.6 2.5 4.6 5.8V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z" /></svg></a>
            <a href={site.social.instagram} aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></a>
            <a href={site.social.facebook} aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l.5-3H13V9.2c0-.9.3-1.5 1.6-1.5H17V5.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V11H7v3h3v8z" /></svg></a>
          </div>
        </div>

        <div className="footer-col">
          <h4 data-en="Services">Servicios</h4>
          <a href="#services" data-en="Construction & remodeling">Construcción y remodelación</a>
          <a href="#services" data-en="Infrastructure maintenance">Mantenimiento de infraestructura</a>
          <a href="#services" data-en="Telecommunications infrastructure">Infraestructura de telecomunicaciones</a>
          <a href="#contact" data-en="Public tenders">Licitaciones públicas</a>
        </div>

        <div className="footer-col">
          <h4 data-en="Company">Empresa</h4>
          <a href="#about" data-en="About us">Nosotros</a>
          <a href="#projects" data-en="Projects">Proyectos</a>
          <a href="#process" data-en="Process">Proceso</a>
          <a href="#coverage" data-en="Coverage">Cobertura</a>
        </div>

        <div className="footer-col">
          <h4 data-en="Contact">Contacto</h4>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
          <a href={whatsappUrl('Hola, quiero información sobre sus servicios.')} target="_blank" rel="noopener">WhatsApp</a>
          <a href="#contact" data-en="Request a quote">Solicitar cotización</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span data-en="© 2026 NOVOSTI Construction Company. All rights reserved.">© 2026 {site.legalName}. Todos los derechos reservados.</span>
        <span>
          <a href="/privacidad/" data-en="Privacy">Privacidad</a>
          {' '}·{' '}
          <a href="/terminos/" data-en="Terms">Términos</a>
        </span>
      </div>
    </footer>
  );
}
