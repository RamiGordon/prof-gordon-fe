import styles from './Plans.module.css';

const plans = [
  {
    id: 'presencial',
    tag: 'Presencial',
    title: 'Una vez por semana',
    description:
      'Sesión semanal presencial con evaluación inicial, programa de movimiento personalizado y seguimiento de métricas objetivas y subjetivas.',
    features: [
      'Evaluación de punto de partida',
      'Programa diseñado para tu cuerpo',
      'Seguimiento de métricas cuantificables',
      'Foco en salud cardiometabólica',
      'Mejora del sueño y estado de ánimo',
    ],
    highlight: false,
  },
  {
    id: 'distancia',
    tag: 'Online',
    title: 'A distancia',
    description:
      'Acompañamiento remoto con programación progresiva, evaluaciones periódicas y comunicación directa para maximizar el impacto en tu calidad de vida.',
    features: [
      'Programación 100% personalizada',
      'Evaluaciones periódicas remotas',
      'Comunicación directa y continua',
      'Acceso desde cualquier lugar',
      'Progresión evidenciada con datos',
    ],
    highlight: true,
  },
];

export default function Plans() {
  return (
    <section id="planes" className={styles.plans}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Nuestros planes</p>
          <h2 className={styles.heading}>
            Un programa<br />
            <em>hecho para vos</em>
          </h2>
          <p className={styles.sub}>
            No existe un método universal. Cada cuerpo es diferente, y cada
            programa se construye desde cero para cada persona.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`${styles.card} ${plan.highlight ? styles.highlighted : ''}`}
            >
              {plan.highlight && (
                <div className={styles.badge}>Recomendado</div>
              )}
              <div className={styles.cardTop}>
                <span className={styles.tag}>{plan.tag}</span>
                <h3 className={styles.planTitle}>{plan.title}</h3>
                <p className={styles.planDesc}>{plan.description}</p>
              </div>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    {/* stroke="currentColor" — hereda color sage desde CSS */}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contacto" className={styles.cardCta}>
                Reservar cita ↗
              </a>
            </article>
          ))}
        </div>

        <div className={styles.methodBox}>
          <div className={styles.methodText}>
            <p className={styles.methodLabel}>Nuestra metodología</p>
            <p className={styles.methodBody}>
              No solo pensamos en el movimiento — pensamos en el cuerpo que se mueve.
              Evaluaciones iniciales, seguimiento riguroso y programas progresivos
              que garantizan impacto real y medible en tu calidad de vida.
            </p>
          </div>
          <div className={styles.methodPillars}>
            {['Evaluación inicial', 'Programación progresiva', 'Métricas objetivas', 'Impacto comprobable'].map((p) => (
              <div key={p} className={styles.pillar}>
                <span className={styles.pillarNum} aria-hidden />
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
