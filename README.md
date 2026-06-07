# Contame · Ranking de salud operativa

Dashboard de reseñas Google para sucursales Dean & Dennys.

## Vistas

- `/` — ranking de salud operativa con las 10 sucursales.
- `/comparativa` — patrones operativos comunes, fortalezas y top 5 prioridades.
- `/{sucursal}` — dashboard por sucursal con pulso, problemas, citas, elogios y acción semanal.

Toda la data vive en [`app/data.ts`](app/data.ts). El logo de Contame está en
[`public/contame-logo.jpeg`](public/contame-logo.jpeg).

## Correr local

```bash
npm install
npm run dev
```

Stack: Next.js 15 (App Router) · React 19 · CSS Modules.
