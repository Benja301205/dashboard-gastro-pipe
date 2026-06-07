import { notFound } from 'next/navigation'
import { SUCURSALES } from '../data'
import { BranchView, DashShell } from '../shared'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SUCURSALES.map((branch) => ({ slug: branch.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const branch = SUCURSALES.find((x) => x.slug === slug)

  if (!branch) {
    return {
      title: 'Sucursal no encontrada · Contame',
    }
  }

  return {
    title: `${branch.nombre} · ${branch.reviews} reviews · ${branch.ratingHist}`,
    description: `Dashboard de salud operativa de ${branch.nombre}.`,
  }
}

export default async function BranchPage({ params }: Props) {
  const { slug } = await params
  const branch = SUCURSALES.find((x) => x.slug === slug)

  if (!branch) notFound()

  return (
    <DashShell active={`/${branch.slug}`}>
      <BranchView branch={branch} />
    </DashShell>
  )
}
