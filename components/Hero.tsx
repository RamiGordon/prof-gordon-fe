import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Contenido de texto — primero en DOM para mobile */}
      <div className={styles.inner}>
        <div className={styles.tag}>
          Salud cardiometabólica · Movimiento funcional
        </div>

        <h1 className={styles.title}>
          Pensamos en<br />
          <em>el cuerpo</em><br />
          <span className={styles.accent}>que se mueve.</span>
        </h1>

        <p className={styles.subtitle}>
          Intervenciones concretas mediante programas de movimiento diseñados
          para la necesidad específica de cada persona. Ciencia aplicada al
          cuerpo real.
        </p>

        <div className={styles.actions}>
          <a href="#contacto" className={styles.btnPrimary}>
            Reservar una cita ↗
          </a>
          <a href="#sobre" className={styles.btnSecondary}>
            Conocé al Prof. Gordon →
          </a>
        </div>

      </div>

      {/* Columna de imagen — segundo en DOM, aparece a la derecha en desktop */}
      <div className={styles.imageCol}>
        <div className={styles.imageFrame}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero.avif"
            alt="Prof. Gordon"
            className={styles.heroImage}
          />
          <div className={styles.imageBadge}>
            <span>Prof. en Ed. Física</span>
            <span className={styles.badgeSub}>UNLP · Buenos Aires</span>
          </div>
        </div>
      </div>
    </section>
  );
}
