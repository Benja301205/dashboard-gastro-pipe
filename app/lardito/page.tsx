import { RESTAURANTES } from '../data'
import { DashShell, RestaurantView } from '../shared'

const r = RESTAURANTES.find((x) => x.slug === 'lardito')!

export const metadata = {
  title: 'Lardito · 152 reseñas · 4.6★',
  description: 'Análisis de reseñas de Google de Lardito.',
}

export default function LarditoPage() {
  return (
    <DashShell active="/lardito">
      <RestaurantView r={r} />
    </DashShell>
  )
}
