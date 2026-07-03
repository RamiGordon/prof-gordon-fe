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

      {/* Columna imagen */}
      <div className={styles.imageCol}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/heroBg.png"
          alt="Síndrome Metabólico"
          className={styles.heroImage}
        />
      </div>

    </section>
  );
}
