import { RESTAURANTES } from '../data'
import { DashShell, RestaurantView } from '../shared'

const r = RESTAURANTES.find((x) => x.slug === 'parrilla-maravilla')!

export const metadata = {
  title: 'Parrilla Maravilla · 151 reseñas · 4.6★',
  description: 'Análisis de reseñas de Google de Parrilla Maravilla.',
}

export default function ParrillaMaravillaPage() {
  return (
    <DashShell active="/parrilla-maravilla">
      <RestaurantView r={r} />
    </DashShell>
  )
}
