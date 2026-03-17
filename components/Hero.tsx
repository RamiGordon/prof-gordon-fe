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
          El cuerpo<br />
          <em>que se mueve</em><br />
          <span className={styles.accent}>mejor.</span>
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

        <div className={styles.stats}>
          {[
            { n: '2012', label: 'Egresado UNLP' },
            { n: '10+', label: 'Años de experiencia' },
            { n: '4', label: 'Posgrados especializados' },
          ].map((s) => (
            <div key={s.n} className={styles.stat}>
              <span className={styles.statNum}>{s.n}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Columna de imagen — segundo en DOM, aparece a la derecha en desktop */}
      <div className={styles.imageCol}>
        <div className={styles.imageFrame}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://static.wixstatic.com/media/d8c902_0c302920e99646b9895eb9a0bd3aead7~mv2.png/v1/fill/w_748,h_748,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/d8c902_0c302920e99646b9895eb9a0bd3aead7~mv2.png"
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
