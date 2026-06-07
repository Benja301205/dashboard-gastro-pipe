import type { CSSProperties } from 'react'
import Link from 'next/link'
import { RESTAURANTES } from './data'
import styles from './landing.module.css'

export const metadata = {
  title: 'Reseñas · Lardito · Parrilla Maravilla · Las Patriotas · Lardo & Rosemary',
  description:
    'Las reseñas de Google de los cuatro restaurantes, leídas en serio: pulso de rating, problemas recurrentes y la acción de la semana de cada local.',
}

const STEPS = [
  {
    n: '01',
    t: 'Reseñas',
    d: 'Todas las reseñas de Google de cada local, abiertas y cerradas.',
  },
  {
    n: '02',
    t: 'Lectura',
    d: 'Patrones recurrentes, severidad y evolución en el tiempo: 14d / 60d / histórico.',
  },
  {
    n: '03',
    t: 'Acciones',
    d: 'Qué mejorar primero en cada local y a nivel grupo.',
  },
]

const TEAM = [
  {
    name: 'Benja Bertone',
    role: 'Análisis de reseñas y reputación online.',
    linkedin: 'https://www.linkedin.com/in/benja-bertone/',
  },
  {
    name: 'Sebastián Fraire',
    role: 'Socio.',
    linkedin: 'https://www.linkedin.com/in/sebastian-fraire/',
  },
  {
    name: 'Francisco Pascual',
    role: 'Socio.',
    linkedin: 'https://www.linkedin.com/in/francisco-pascual-17a652369/',
  },
]

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
        {/* HERO */}
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Análisis de reseñas · Google</p>
          <h1 className={styles.title}>
            4 restaurantes,
            <br />
            una sola <em>lectura</em>.
          </h1>
          <p className={styles.lead}>
            Las reseñas de Google de Lardito, Parrilla Maravilla, Las Patriotas y Lardo &amp; Rosemary,
            leídas en serio: pulso de rating, problemas recurrentes, elogios y la acción de la semana
            de cada local — más la comparativa del grupo.
          </p>

          <div className={styles.restoGrid}>
            {RESTAURANTES.map((r) => (
              <Link key={r.slug} href={`/${r.slug}`} className={styles.restoCard}>
                <span className={styles.restoLogoBox}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className={styles.restoLogoImg} src={r.logo} alt={r.nombre} />
                </span>
                <p className={styles.restoName}>{r.nombre}</p>
                <p className={styles.restoMeta}>
                  <b>{r.reviews}</b> reseñas · <b>{r.rating}★</b>
                </p>
                <span className={styles.restoArrow}>Ver análisis →</span>
              </Link>
            ))}
          </div>

          <div className={styles.heroCta}>
            <Link href="/comparativa" className={styles.cta}>
              Ver comparativa del grupo <span className={styles.ctaArrow}>→</span>
            </Link>
          </div>
        </header>

        {/* CÓMO FUNCIONA */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>
              Cómo <em>funciona</em>
            </h2>
            <span className={styles.num}>Tres pasos</span>
          </div>
          <div className={styles.steps}>
            {STEPS.map((s, i) => (
              <div key={s.n} className={styles.step}>
                <span className={styles.stepNum}>{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                {i < STEPS.length - 1 && <span className={styles.stepArrow}>→</span>}
              </div>
            ))}
          </div>
        </section>

        {/* QUIÉNES LO HACEN */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>
              Quiénes lo <em>hacen</em>
            </h2>
            <span className={styles.num}>Equipo</span>
          </div>
          <div className={styles.team}>
            {TEAM.map((m) => (
              <div key={m.name} className={styles.teamMember}>
                <p className={styles.teamName}>{m.name}</p>
                <p className={styles.teamRole}>{m.role}</p>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.teamLink}
                >
                  LinkedIn ↗
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
