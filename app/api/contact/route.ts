import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, lastName, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Faltan campos requeridos.' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      // El "from" debe ser un dominio verificado en Resend.
      // Mientras no tengas dominio propio, usá: onboarding@resend.dev (solo para pruebas)
      from: 'Bydand Contacto <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL ?? 'bydandcapacitaciones@gmail.com'],
      replyTo: email,
      subject: `Nueva consulta de ${name}${lastName ? ' ' + lastName : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #1D3A24; margin-bottom: 8px;">Nueva consulta desde bydand.com</h2>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin-bottom: 24px;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-size: 13px; color: #666; text-transform: uppercase; letter-spacing: 0.08em; width: 120px;">Nombre</td>
              <td style="padding: 8px 0; font-size: 15px; color: #111;">${name} ${lastName ?? ''}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 13px; color: #666; text-transform: uppercase; letter-spacing: 0.08em;">Email</td>
              <td style="padding: 8px 0; font-size: 15px; color: #111;">
                <a href="mailto:${email}" style="color: #7abf00;">${email}</a>
              </td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #fff; border-radius: 6px; border-left: 3px solid #6DB36B;">
            <p style="font-size: 13px; color: #666; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px;">Mensaje</p>
            <p style="font-size: 15px; color: #111; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 32px; font-size: 12px; color: #999;">
            Respondé directamente a este mail para contactar a ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Error al enviar el email.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
}
