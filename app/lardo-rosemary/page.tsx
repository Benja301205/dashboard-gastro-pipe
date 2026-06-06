import { RESTAURANTES } from '../data'
import { DashShell, RestaurantView } from '../shared'

const r = RESTAURANTES.find((x) => x.slug === 'lardo-rosemary')!

export const metadata = {
  title: 'Lardo & Rosemary · 64 reseñas · 4.6★',
  description: 'Análisis de reseñas de Google de Lardo & Rosemary.',
}

export default function LardoRosemaryPage() {
  return (
    <DashShell active="/lardo-rosemary">
      <RestaurantView r={r} />
    </DashShell>
  )
}
