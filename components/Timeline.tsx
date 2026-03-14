import styles from './Timeline.module.css';

const milestones = [
  {
    year: '2012',
    title: 'Profesor en Educación Física',
    org: 'UNLP — FaHCE',
    desc: 'Egresado de la Facultad de Humanidades y Ciencias de la Educación de la Universidad Nacional de La Plata.',
  },
  {
    year: '2013',
    title: 'Docente Universitario',
    org: 'FaHCE — UNLP',
    desc: 'Ingreso como docente ordinario por concurso de antecedentes y oposición. Se desempeña hasta la actualidad.',
  },
  {
    year: '2019',
    title: 'Instructor en RCP y DEA',
    org: 'HUI — FCM — UNLP',
    desc: 'Instructorado en reanimación cardiopulmonar, desobstrucción de vía aérea y uso de DEA en adultos.',
  },
  {
    year: '2022',
    title: 'Posgrado en Cardiología del Ejercicio',
    org: 'Sociedad Argentina de Cardiología',
    desc: 'Estudio de posgrado enfocado en la cardiología aplicada al ejercicio y la actividad física.',
  },
  {
    year: '2023',
    title: 'Docente Universitario',
    org: 'HUI — FCM — UNLP',
    desc: 'Incorporación como docente en el Hospital Universitario Integrado de la FCM-UNLP.',
  },
  {
    year: '2024',
    title: 'Posgrado en Diabetes y Ejercicio',
    org: 'Sociedad Argentina de Diabetes',
    desc: 'Especialización en el manejo y prescripción de ejercicio físico en personas con diabetes.',
  },
  {
    year: '2025',
    title: 'Posgrado en Obesidad y Comorbilidades',
    org: 'Dpto. Posgrado FCM — UNLP',
    desc: 'Formación en obesidad y comorbilidades asociadas, con enfoque en intervención a través del movimiento.',
  },
  {
    year: '2025',
    title: 'Simulación Clínica Avanzada',
    org: 'Dpto. Posgrado FCM — UNLP',
    desc: 'Curso de Formadores en Enseñanza Basada en Simulación Clínica Avanzada.',
  },
];

export default function Timeline() {
  return (
    <section id="formacion" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Trayectoria</p>
          <h2 className={styles.heading}>
            Formación<br />
            <em>continua</em>
          </h2>
          <p className={styles.sub}>
            Más de una década construyendo expertise en la intersección entre
            el movimiento humano y la salud cardiometabólica.
          </p>
        </div>

        <div className={styles.timeline}>
          {milestones.map((m, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.yearCol}>
                <span className={styles.year}>{m.year}</span>
              </div>
              <div className={styles.connector}>
                <div className={styles.dot} />
                {i < milestones.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.content}>
                <span className={styles.org}>{m.org}</span>
                <h3 className={styles.title}>{m.title}</h3>
                <p className={styles.desc}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
