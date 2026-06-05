import { COMPARATIVA } from '../data'
import { DashShell } from '../shared'
import styles from '../dash.module.css'

export const metadata = {
  title: 'Comparativa del grupo · 3 restaurantes',
  description: 'Lectura transversal de los tres restaurantes: patrones comunes y palancas del grupo.',
}

function chipClass(value: string) {
  const isNo = value.trim().toLowerCase().startsWith('no')
  return `${styles.patronChip} ${isNo ? styles.no : ''}`
}

export default function ComparativaPage() {
  return (
    <DashShell active="/comparativa">
      <div className={styles.chapterHead}>
        <p className="eyebrow">Lectura transversal del grupo</p>
        <h2>
          Comparativa del <em>grupo</em>
        </h2>
        <p>
          Lo que aparece en 2 o más restaurantes deja de ser un tema de un local y pasa a
          ser un tema del grupo. Acá están los patrones comunes, qué hace bien cada marca
          y las palancas para el dueño.
        </p>
      </div>

      <section>
        <div className="section-head">
          <h2>
            Patrones <em>comunes</em>
          </h2>
          <span className="num">aparecen en 2+ locales</span>
        </div>
        <div className={styles.patronList}>
          {COMPARATIVA.patrones.map((p) => (
            <div key={p.patron} className={styles.patronCard}>
              <p className={styles.patronTitle}>{p.patron}</p>
              <div className={styles.patronChips}>
                <span className={chipClass(p.lardito)}>
                  Lardito <b>{p.lardito}</b>
                </span>
                <span className={chipClass(p.parrilla)}>
                  Parrilla M. <b>{p.parrilla}</b>
                </span>
                <span className={chipClass(p.patriotas)}>
                  Las Patriotas <b>{p.patriotas}</b>
                </span>
              </div>
              <p className={styles.patronLectura}>{p.lectura}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>
            Qué hace bien <em>cada uno</em>
          </h2>
          <span className="num">fortalezas copiables entre marcas</span>
        </div>
        <div className={styles.insightGrid}>
          {COMPARATIVA.haceBien.map((item) => (
            <div key={item.marca} className={styles.insightCard}>
              <p className={styles.insightTitle}>{item.marca}</p>
              <p>{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>
            Puntos para <em>el dueño</em>
          </h2>
          <span className="num">palancas a nivel grupo</span>
        </div>
        <div className={styles.persistenceList}>
          {COMPARATIVA.puntos.map((punto, i) => (
            <div key={punto.titulo} className={styles.persistenceRow}>
              <p>
                {String(i + 1).padStart(2, '0')} · {punto.titulo}
              </p>
              <span>{punto.texto}</span>
            </div>
          ))}
        </div>
      </section>
    </DashShell>
  )
}
