import styles from './About.module.css';

export default function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://static.wixstatic.com/media/d8c902_22e82ae853794421a5700bb70c5ffcca~mv2.png/v1/fill/w_335,h_416,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d8c902_22e82ae853794421a5700bb70c5ffcca~mv2.png"
              alt="Christofer Gordon"
              className={styles.portrait}
            />
          </div>
          <div className={styles.certBox}>
            {[
              'UNLP · Profesor en Educación Física',
              'Cardiología del Ejercicio · SAC',
              'Diabetes y Ejercicio · SAD',
              'Obesidad y Comorbilidades Asociadas · FCM-UNLP',
              'Simulación Clínica Avanzada · FCM-UNLP',
            ].map((c) => (
              <span key={c} className={styles.cert}>
                {/* Checkmark accesible — stroke="currentColor" hereda color sage del CSS */}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path
                    d="M1.5 5L3.5 7L8.5 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.heading}>
            Hola, soy<br />
            <em>Christofer Gordon</em>
          </h2>

          <p className={styles.body}>
            Egresado de la <strong>Universidad Nacional de La Plata</strong> como
            Profesor en Educación Física. Docente universitario con mas de 10 años
            de experiencia, instructor de RCP, DEA y desobstrucción de vía aérea
            en el Hospital Universitario Integrado de la Facultad de Ciencias Médicas.
          </p>
          <p className={styles.body}>
            Con posgrados en <strong>cardiología del ejercicio</strong>, diabetes,
            obesidad y simulación clínica avanzada, trabajo en rehabilitación
            cardiovascular, e integrando el comité de docencia e investigación
            de un Hospital especializado en rehabilitación.
          </p>
          <p className={styles.body}>
            He presentado trabajos en congresos nacionales e internacionales y en revistas
            académicas y de divulgación. He coordinado paneles, dado talleres dentro y fuera
            de Argentina, y organizado jornadas vinculadas a la salud y la educación.
          </p>

          <blockquote className={styles.quote}>
            &ldquo;Ser parte de un proceso de transformación que implique una franca
            mejoría en la persona con la que trabajo me motiva a seguir aprendiendo.&rdquo;
          </blockquote>

          <div className={styles.pillRow}>
            {[
              'Salud cardiometabólica',
              'Funcionalidad anatómica',
              'Rehabilitación cardiovascular',
              'Simulación clínica',
            ].map((p) => (
              <span key={p} className={styles.pill}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
