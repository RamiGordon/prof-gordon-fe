export default function PrivacidadPage() {
  return (
    <main style={{
      padding: '8rem 2rem 6rem',
      maxWidth: '700px',
      margin: '0 auto',
      fontFamily: 'var(--font-body)',
    }}>
      <a
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.88rem',
          color: 'var(--green-dark)',
          marginBottom: '2.5rem',
          textDecoration: 'underline',
          textUnderlineOffset: '3px',
        }}
      >
        ← Volver al inicio
      </a>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 4vw, 2.8rem)',
        fontWeight: 700,
        color: 'var(--text-primary)',
        marginBottom: '1.5rem',
        lineHeight: 1.2,
      }}>
        Política de Privacidad
      </h1>
      {/* PLACEHOLDER — Contenido a definir con el cliente */}
      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
        Este documento será completado próximamente junto con el equipo de Bydand Movimiento.
      </p>
    </main>
  );
}
