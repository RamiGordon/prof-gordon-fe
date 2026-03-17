'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /* Bug fix: onSubmit en <form> en lugar de onClick en <button> */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', lastName: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>
        {/* Info de contacto */}
        <div className={styles.info}>
          <p className={styles.eyebrow}>Contacto</p>
          <h2 className={styles.heading}>
            Empezá tu<br />
            <em>proceso hoy</em>
          </h2>
          <p className={styles.sub}>
            Contanos sobre tu situación y agendamos una primera consulta para
            evaluar cómo podemos trabajar juntos.
          </p>

          <div className={styles.details}>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Ubicación</span>
              <span className={styles.detailValue}>Buenos Aires, Argentina</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Email</span>
              <a href="mailto:bydandcapacitaciones@gmail.com" className={styles.detailValue}>
                bydandcapacitaciones@gmail.com
              </a>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Instagram</span>
              <a
                href="https://www.instagram.com/bydand_movimiento/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.detailValue}
              >
                @bydand_movimiento
              </a>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className={styles.formWrap}>
          {status === 'sent' ? (
            <div className={styles.success} aria-live="polite">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
                <circle cx="20" cy="20" r="20" fill="var(--green-sage-dim)" />
                <path d="M12 20L17.5 25.5L28 15" stroke="var(--green-sage)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className={styles.successTitle}>¡Mensaje enviado!</p>
              <p className={styles.successSub}>Te contactamos a la brevedad.</p>
              <button className={styles.resetBtn} onClick={() => setStatus('idle')}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            /* Bug fix: <form> con onSubmit, no <div> con onClick */
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>Nombre</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={styles.input}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ej: María"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="lastName" className={styles.label}>Apellido</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className={styles.input}
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Ej: García"
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  className={`${styles.input} ${styles.textarea}`}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Contanos sobre tu situación, objetivos y cualquier consulta que tengas..."
                  rows={5}
                  required
                />
              </div>
              {status === 'error' && (
                <p className={styles.errorMsg} role="alert">
                  Hubo un error al enviar. Por favor intentá de nuevo.
                </p>
              )}
              <button
                type="submit"
                className={styles.submit}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje ↗'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
