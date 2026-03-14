# Bydand — Prof. Gordon

Sitio web personal para **Bydand Movimiento**, construido con Next.js 15, TypeScript y CSS Modules.

---

## Stack

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** CSS Modules (sin frameworks de UI)
- **Emails:** [Resend](https://resend.com) (formulario de contacto)
- **Deploy recomendado:** Vercel

---

## Primeros pasos

### 1. Clonar e instalar

```bash
git clone https://github.com/tu-usuario/bydand.git
cd bydand
npm install
```

### 2. Variables de entorno

```bash
cp .env.local.example .env.local
```

Editá `.env.local` con tus valores:

| Variable | Descripción |
|---|---|
| `RESEND_API_KEY` | API key de [resend.com](https://resend.com) (gratis hasta 3000 emails/mes) |
| `CONTACT_EMAIL` | Email donde llegan las consultas del formulario |

### 3. Correr en desarrollo

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

---

## Configurar emails (Resend)

1. Creá una cuenta en [resend.com](https://resend.com) — es gratis
2. En el dashboard, andá a **API Keys** y generá una nueva
3. Pegala en `.env.local` como `RESEND_API_KEY`
4. **Para producción:** verificá tu dominio en Resend (Domains → Add Domain) y cambiá el `from` en `app/api/contact/route.ts`:
   ```
   from: 'Bydand Contacto <contacto@tudominio.com>'
   ```
   Mientras tanto, `onboarding@resend.dev` funciona para testing.

---

## Deploy en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

O conectá el repo directo desde [vercel.com](https://vercel.com). No olvidés agregar las variables de entorno en **Settings → Environment Variables**.

---

## Estructura del proyecto

```
bydand/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # API endpoint para emails
│   ├── globals.css            # Design system / variables CSS
│   ├── layout.tsx             # Root layout + metadata SEO
│   └── page.tsx               # Página principal
├── components/
│   ├── Navbar.tsx/.css        # Navegación fija
│   ├── Hero.tsx/.css          # Sección principal
│   ├── About.tsx/.css         # Sobre Gordon
│   ├── Plans.tsx/.css         # Planes disponibles
│   ├── Timeline.tsx/.css      # Historial de formación
│   ├── Contact.tsx/.css       # Formulario de contacto
│   └── Footer.tsx/.css        # Pie de página
├── .env.local.example         # Template de variables de entorno
├── next.config.mjs
└── tsconfig.json
```

---

## Personalización rápida

- **Colores:** editá las variables CSS en `app/globals.css` (`:root`)
- **Contenido:** cada sección vive en su propio componente en `/components`
- **Imágenes:** reemplazá las URLs de `static.wixstatic.com` por tus propias imágenes en `/public`
- **Planes:** editá el array `plans` en `components/Plans.tsx`
- **Formación:** editá el array `milestones` en `components/Timeline.tsx`

---

## Próximos pasos sugeridos

- [ ] Agregar dominio propio (ej: `bydand.com.ar`)
- [ ] Verificar dominio en Resend para emails propios
- [ ] Reemplazar imágenes de Wix por assets propios en `/public`
- [ ] Agregar página de términos y privacidad
- [ ] Integrar Google Analytics o Vercel Analytics
