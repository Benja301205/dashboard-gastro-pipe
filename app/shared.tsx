import type { ReactNode } from 'react'
import Link from 'next/link'
import styles from './dash.module.css'
import { LOGO, SUCURSALES, type Branch, type Health } from './data'

const NAV_LINKS = [
  { href: '/comparativa', label: 'Comparativa' },
  ...SUCURSALES.map((s) => ({ href: `/${s.slug}`, label: s.short })),
]

export function statusDot(estado: Health) {
  if (estado === 'verde') return '🟢'
  if (estado === 'amarillo') return '🟡'
  return '🔴'
}

export function DashNav({ active }: { active: string }) {
  return (
    <nav className={styles.editionNav} aria-label="Selector de sucursales">
      <Link href="/" className={styles.editionNavBrand}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO} alt="Contame" />
        <span>Contame</span>
      </Link>
      <div className={styles.editionNavGroup}>
        {NAV_LINKS.map((l) => {
          const isActive = l.href === active
          return (
            <Link
              key={l.href}
              href={l.href}
              className={isActive ? styles.editionNavActive : undefined}
              aria-current={isActive ? 'page' : undefined}
            >
              {l.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export function DashFooter() {
  return (
    <footer className={styles.pageFooter}>
      <div className={styles.footerLeft}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.footerLogo} src={LOGO} alt="Contame" />
        <span>Contame · Ranking de salud operativa · Dean &amp; Dennys</span>
      </div>
      <span className={styles.footerCredit}>Reporte de reseñas Google</span>
    </footer>
  )
}

export function DashShell({ active, children }: { active: string; children: ReactNode }) {
  return (
    <main className="results-page">
      <DashNav active={active} />
      {children}
      <DashFooter />
    </main>
  )
}

function PulsoTable({ branch }: { branch: Branch }) {
  const rows = [
    { label: '14 días', value: branch.pulso.d14, hot: true },
    { label: '60 días', value: branch.pulso.d60 },
    { label: 'Histórico', value: branch.pulso.hist },
  ]

  return (
    <div className={styles.pulsoTable}>
      <div className={styles.pulsoHeader}>
        <span>Ventana</span>
        <span>Rating / reviews / % 1-2★ / respuesta</span>
      </div>
      {rows.map((r) => (
        <div key={r.label} className={styles.pulsoRow}>
          <span>{r.label}</span>
          <b className={r.hot ? styles.now : undefined}>{r.value}</b>
        </div>
      ))}
    </div>
  )
}

export function BranchView({ branch }: { branch: Branch }) {
  return (
    <>
      <div className={styles.rHeader}>
        <div>
          <span className={styles.rLogoBox}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.rLogoImg} src={LOGO} alt="Contame" />
          </span>
          <p className="eyebrow">Dashboard por sucursal</p>
          <h1 className={styles.rName}>{branch.nombre}</h1>
          <div className={styles.rMeta}>
            <span>
              Rank <b>#{branch.rank}</b>
            </span>
            <span>·</span>
            <span>
              <b>{branch.reviews}</b> reviews
            </span>
            <span>·</span>
            <span>
              <b>{branch.ratingHist}</b> histórico
            </span>
            <span className={`${styles.tendBadge} ${styles[branch.estado]}`}>
              {statusDot(branch.estado)} {branch.tendencia}
            </span>
          </div>
        </div>
        <div className={styles.rRatingCard}>
          <p className="k">Rating · 60 días</p>
          <p className={styles.rRatingBig}>{branch.rating60d}</p>
          <p className="k">
            {branch.pct12_60d} 1-2★ · {branch.respuestaDueno} respuesta dueño
          </p>
        </div>
      </div>

      <section>
        <div className="section-head">
          <h2>
            Pulso <em>operativo</em>
          </h2>
          <span className="num">14d · 60d · histórico</span>
        </div>
        <p className={styles.staffLine} style={{ marginBottom: 24 }}>
          {branch.tendencia}. {branch.tendenciaDetalle}
        </p>
        <PulsoTable branch={branch} />
      </section>

      <section>
        <div className="section-head">
          <h2>
            Problemas <em>priorizados</em>
          </h2>
          <span className="num">14d · 60d · hist · severidad</span>
        </div>
        <div className={styles.problemList}>
          {branch.problemas.map((pr) => {
            const sev = pr.sev.toLowerCase()
            return (
              <div key={pr.problema} className={`${styles.problemCard} ${styles[sev]}`}>
                <div className={styles.problemHead}>
                  <p className={styles.problemTitle}>{pr.problema}</p>
                  <span className={`${styles.sevBadge} ${styles[sev]}`}>
                    {pr.sev} · {pr.estado}
                  </span>
                </div>
                <div className={styles.problemCounts}>
                  <div>
                    <span className={`${styles.c} ${styles.hot}`}>{pr.d14}</span>
                    <span className={styles.l}>14 días</span>
                  </div>
                  <div>
                    <span className={styles.c}>{pr.d60}</span>
                    <span className={styles.l}>60 días</span>
                  </div>
                  <div>
                    <span className={styles.c}>{pr.hist}</span>
                    <span className={styles.l}>histórico</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>
            Citas y <em>señales</em>
          </h2>
          <span className="num">texto de reviews</span>
        </div>
        <div className={styles.alertGrid}>
          <div className={styles.alertCell}>
            <span className={styles.tag}>Citas</span>
            <p>{branch.citas.map((c) => `“${c}”`).join(' · ')}</p>
          </div>
          <div className={styles.alertCell}>
            <span className={styles.tag}>Elogios</span>
            <p>{branch.elogios}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>
            Acción de <em>la semana</em>
          </h2>
          <span className="num">palanca #1</span>
        </div>
        <div className={styles.accionCard}>
          <span className={styles.mark}>→</span>
          <div>
            <h3 className={styles.accionTitle}>Prioridad operativa</h3>
            <p>{branch.accion}</p>
          </div>
        </div>
      </section>
    </>
  )
}
