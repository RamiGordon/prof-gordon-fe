'use client';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <p className={styles.logo}>
            <span className={styles.logoAccent}>Prof</span> Gordon
          </p>
          <p className={styles.tagline}>
            Movimiento inteligente.<br />Cuerpos más saludables.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Footer navigation">
          <a href="#sobre">Sobre Prof. Gordon</a>
          <a href="#planes">Planes</a>
          <a href="#formacion">Formación</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className={styles.social}>
          <a
            href="https://www.instagram.com/bydand_movimiento/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Prof. Christofer Gordon"
            className={styles.socialLink}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            @bydand_movimiento
          </a>
          <a href="mailto:bydandcapacitaciones@gmail.com" className={styles.socialLink}>
            bydandcapacitaciones@gmail.com
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Prof. Christofer Gordon · Buenos Aires, Argentina</p>
        <div className={styles.legal}>
          <a href="/terminos">Términos y Condiciones</a>
          <a href="/privacidad">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
