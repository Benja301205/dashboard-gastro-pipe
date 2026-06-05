import { RESTAURANTES } from '../data'
import { DashShell, RestaurantView } from '../shared'

const r = RESTAURANTES.find((x) => x.slug === 'las-patriotas')!

export const metadata = {
  title: 'Las Patriotas Vilardo · 52 reseñas · 4.6★',
  description: 'Análisis de reseñas de Google de Las Patriotas Vilardo.',
}

export default function LasPatriotasPage() {
  return (
    <DashShell active="/las-patriotas">
      <RestaurantView r={r} />
    </DashShell>
  )
}
