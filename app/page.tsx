import type { CSSProperties } from 'react'
import Link from 'next/link'
import { RESUMEN, SUCURSALES } from './data'
import { statusDot } from './shared'
import styles from './landing.module.css'

export const metadata = {
  title: 'Dean & Dennys · Contame',
  description:
    'Dashboard mensual de sucursales Dean & Dennys: pulso, problemas, comparativa y prioridades.',
}

export default function Home() {
  return (
    <div
      className={styles.landing}
      style={
        {
          '--hot': '#F04E23',
          '--hot-2': '#F07545',
          '--hot-deep': '#C43315',
          '--ember': '#FFA870',
        } as CSSProperties
      }
    >
      <main className={styles.wrap}>
        <header className={styles.hero}>
          <div className={styles.heroTop}>
            <span className={styles.heroLogo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/dean-dennys-logo.jpg" alt="Dean & Dennys" />
            </span>
            <div>
              <p className={styles.eyebrow}>Contame · tablero mensual</p>
              <h1 className={styles.title}>
                Dean &amp; Dennys
                <br />
                <em>por sucursal</em>
              </h1>
            </div>
          </div>

          <div className={styles.summaryGrid}>
            <div>
              <span>Mejor sucursal hoy</span>
              <p>{RESUMEN.mejor}</p>
            </div>
            <div>
              <span>Mayor deterioro</span>
              <p>{RESUMEN.deterioro}</p>
            </div>
            <div>
              <span>Riesgo reputacional</span>
              <p>{RESUMEN.riesgo}</p>
            </div>
          </div>

          <div className={styles.branchGrid}>
            {SUCURSALES.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className={styles.branchCard}>
                <div className={styles.branchHead}>
                  <span className={styles.branchRank}>#{s.rank}</span>
                  <span className={`${styles.branchStatus} ${styles[s.estado]}`}>
                    {statusDot(s.estado)}
                  </span>
                </div>
                <h2>{s.short}</h2>
                <div className={styles.branchStats}>
                  <span>
                    <b>{s.rating60d}</b>
                    60d
                  </span>
                  <span>
                    <b>{s.reviews}</b>
                    reviews
                  </span>
                  <span>
                    <b>{s.pct12_60d}</b>
                    1-2★
                  </span>
                </div>
                <p>{s.accion}</p>
                <span className={styles.branchArrow}>Ver sucursal →</span>
              </Link>
            ))}
          </div>

          <div className={styles.heroCta}>
            <Link href="/comparativa" className={styles.cta}>
              Ver comparativa del grupo <span className={styles.ctaArrow}>→</span>
            </Link>
          </div>
        </header>
      </main>
    </div>
  )
}
