# Dashboard Gastro · Reseñas de Google

Análisis de reseñas de Google de tres restaurantes del grupo, con la misma estética
(dark premium + naranja) del dashboard de Trama ITBA.

## Restaurantes

- **Lardito** · 152 reseñas · 4.6★
- **Parrilla Maravilla** · 151 reseñas · 4.6★
- **Las Patriotas Vilardo** · 52 reseñas · 4.6★

## Estructura

- `/` — landing que presenta el grupo (3 restaurantes) y explica el análisis.
- `/lardito`, `/parrilla-maravilla`, `/las-patriotas` — análisis por local (pulso,
  problemas, elogios, alertas, staff, acción de la semana).
- `/comparativa` — lectura transversal del grupo (patrones comunes, fortalezas y
  palancas para el dueño).

Toda la data vive en [`app/data.ts`](app/data.ts).

## Logos

Los logos de cada restaurante van en `public/` (PNG). Una vez ahí, se reemplaza el
placeholder (`restoLogoPlaceholder`) en [`app/page.tsx`](app/page.tsx) por la imagen
real. Hoy cada card muestra la inicial del nombre como placeholder.

## Correr local

```bash
npm install
npm run dev
```

Stack: Next.js 15 (App Router) · React 19 · CSS Modules.
