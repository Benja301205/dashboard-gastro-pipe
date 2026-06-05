import type { ReactNode } from 'react'
import Link from 'next/link'
import styles from './dash.module.css'
import type { Restaurant } from './data'

const NAV_LINKS = [
  { href: '/comparativa', label: 'Comparativa' },
  { href: '/lardito', label: 'Lardito' },
  { href: '/parrilla-maravilla', label: 'Parrilla M.' },
  { href: '/las-patriotas', label: 'Las Patriotas' },
]

export function DashNav({ active }: { active: string }) {
  return (
    <nav className={styles.editionNav} aria-label="Selector de locales">
      <span className={styles.editionNavBrand}>Reseñas Google · 3 locales</span>
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
        <span>Lardito · Parrilla Maravilla · Las Patriotas · reseñas de Google</span>
      </div>
      <span className={styles.footerCredit}>
        Análisis por{' '}
        <a
          href="https://www.linkedin.com/in/benja-bertone/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Benja Bertone
        </a>
      </span>
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

/* ── Sub-componentes de restaurante ───────────────────── */

function PulsoTable({ p }: { p: Restaurant['pulso'] }) {
  const rows = [
    { label: 'Rating promedio', vals: p.ratingProm },
    { label: 'Reseñas', vals: p.reviews },
    { label: '% 1-2★', vals: p.pct12 },
    { label: '% respuestas del dueño', vals: p.pctResp },
  ]
  return (
    <div className={styles.pulsoTable}>
      <div className={styles.pulsoHeader}>
        <span>Métrica</span>
        <span className={styles.now}>14 días</span>
        <span>60 días</span>
        <span>Histórico</span>
      </div>
      {rows.map((r) => (
        <div key={r.label} className={styles.pulsoRow}>
          <span>{r.label}</span>
          <b className={styles.now}>{r.vals[0]}</b>
          <b>{r.vals[1]}</b>
          <b>{r.vals[2]}</b>
        </div>
      ))}
    </div>
  )
}

export function RestaurantView({ r }: { r: Restaurant }) {
  const maxElogio = Math.max(...r.elogios.map((e) => e.hist))
  const alertCells = [
    { tag: 'Nuevo este mes', text: r.alertas.nuevo, warn: false },
    { tag: 'Escalando', text: r.alertas.escalando, warn: false },
    { tag: 'Resuelto / cediendo', text: r.alertas.resuelto, warn: false },
    { tag: 'Eterno', text: r.alertas.eterno, warn: true },
  ]

  return (
    <>
      <div className={styles.rHeader}>
        <div>
          <p className="eyebrow">Reseñas de Google · Análisis</p>
          <h1 className={styles.rName}>{r.nombre}</h1>
          <div className={styles.rMeta}>
            <span>
              <b>{r.reviews}</b> reseñas
            </span>
            <span>·</span>
            <span>
              <b>{r.rating}★</b> histórico
            </span>
            <span className={styles.tendBadge}>📈 {r.tendencia}</span>
          </div>
        </div>
        <div className={styles.rRatingCard}>
          <p className="k">Rating · últimas 2 semanas</p>
          <p className={styles.rRatingBig}>{r.pulso.ratingProm[0]}</p>
          <p className="k">
            {r.pulso.reviews[0]} reseñas · {r.pulso.pct12[0]} negativas
          </p>
        </div>
      </div>

      <section>
        <div className="section-head">
          <h2>
            Pulso <em>comparativo</em>
          </h2>
          <span className="num">14d · 60d · histórico</span>
        </div>
        <p className={styles.staffLine} style={{ marginBottom: 24 }}>
          {r.tendenciaTexto}
        </p>
        <PulsoTable p={r.pulso} />
      </section>

      <section>
        <div className="section-head">
          <h2>
            Problemas <em>recurrentes</em>
          </h2>
          <span className="num">14d · 60d · histórico · severidad</span>
        </div>
        <div className={styles.problemList}>
          {r.problemas.map((pr) => {
            const sev = pr.sev.toLowerCase()
            return (
              <div key={pr.problema} className={`${styles.problemCard} ${styles[sev]}`}>
                <div className={styles.problemHead}>
                  <p className={styles.problemTitle}>{pr.problema}</p>
                  <span className={`${styles.sevBadge} ${styles[sev]}`}>{pr.sev}</span>
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
                {pr.quote && (
                  <p className={styles.problemQuote}>
                    &ldquo;{pr.quote.texto}&rdquo;
                    <small>{pr.quote.meta}</small>
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>
            Elogios <em>recurrentes</em>
          </h2>
          <span className="num">menciones históricas</span>
        </div>
        <div className={styles.comidaList}>
          {r.elogios.map((e) => (
            <div key={e.elogio} className={styles.comidaRow}>
              <span className={styles.comidaLabel}>{e.elogio}</span>
              <div className={styles.comidaTrack}>
                <div
                  className={styles.comidaBar}
                  style={{ width: `${(e.hist / maxElogio) * 100}%` }}
                />
              </div>
              <span className={styles.comidaCount}>{e.hist}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>
            Alertas de <em>evolución</em>
          </h2>
          <span className="num">qué cambió este mes</span>
        </div>
        <div className={styles.alertGrid}>
          {alertCells.map((a) => (
            <div key={a.tag} className={`${styles.alertCell} ${a.warn ? styles.warn : ''}`}>
              <span className={styles.tag}>{a.tag}</span>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>
            Staff <em>nombrado</em>
          </h2>
          <span className="num">menciones por nombre</span>
        </div>
        <p className={styles.staffLine}>{r.staff}</p>
      </section>

      <section>
        <div className="section-head">
          <h2>
            Acción de <em>la semana</em>
          </h2>
          <span className="num">la palanca #1</span>
        </div>
        <div className={styles.accionCard}>
          <span className={styles.mark}>→</span>
          <div>
            <h3 className={styles.accionTitle}>{r.accion.titulo}</h3>
            <p>{r.accion.texto}</p>
          </div>
        </div>
      </section>
    </>
  )
}
