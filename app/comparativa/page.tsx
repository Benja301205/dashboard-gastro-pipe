import { COMPARATIVA } from '../data'
import { DashShell } from '../shared'
import styles from '../dash.module.css'

export const metadata = {
  title: 'Comparativo transversal · Contame',
  description: 'Patrones operativos comunes, fortalezas por sucursal y prioridades para la marca.',
}

export default function ComparativaPage() {
  return (
    <DashShell active="/comparativa">
      <div className={styles.chapterHead}>
        <p className="eyebrow">Comparativo transversal de Dean &amp; Dennys</p>
        <h2>
          Patrones <em>operativos</em>
        </h2>
        <p>
          Lo que se repite entre sucursales deja de ser un problema aislado y pasa a ser una
          decisión de marca: cocina, salón, delivery, promos, respuesta pública e higiene.
        </p>
      </div>

      <section>
        <div className="section-head">
          <h2>
            Patrones <em>comunes</em>
          </h2>
          <span className="num">prioridad ejecutiva</span>
        </div>
        <div className={styles.patronList}>
          {COMPARATIVA.patrones.map((p) => (
            <div key={p.patron} className={styles.patronCard}>
              <p className={styles.patronTitle}>{p.patron}</p>
              <div className={styles.patronChips}>
                <span className={styles.patronChip}>
                  Sucursales <b>{p.sucursales}</b>
                </span>
                <span className={styles.patronChip}>
                  Prioridad <b>{p.prioridad}</b>
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
            Qué hace bien <em>cada sucursal</em>
          </h2>
          <span className="num">fortalezas copiables</span>
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
            Top 5 <em>prioridades</em>
          </h2>
          <span className="num">palancas para la marca</span>
        </div>
        <div className={styles.persistenceList}>
          {COMPARATIVA.prioridades.map((prioridad, i) => (
            <div key={prioridad} className={styles.persistenceRow}>
              <p>{String(i + 1).padStart(2, '0')}</p>
              <span>{prioridad}</span>
            </div>
          ))}
        </div>
      </section>
    </DashShell>
  )
}
