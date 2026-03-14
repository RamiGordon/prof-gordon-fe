import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Prof. Gordon | Bydand Movimiento',
  description:
    'Programas de movimiento personalizados centrados en la salud cardiometabólica y funcionalidad anatómica. Prof. Christofer Gordon — Educación Física, UNLP.',
  keywords: ['educación física', 'salud cardiometabólica', 'entrenamiento personalizado', 'Prof. Gordon', 'Bydand'],
  openGraph: {
    title: 'Prof. Gordon | Bydand Movimiento',
    description: 'Programas de movimiento personalizados centrados en la salud cardiometabólica.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
