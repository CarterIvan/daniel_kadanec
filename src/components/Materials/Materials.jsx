import { materials } from '../../data/content'
import MaterialCard from './MaterialCard'
import styles from './Materials.module.css'

function Materials() {
  // Reserved for a future lightbox/modal that shows the full material image
  // when a card is selected. Kept as a no-op handler for now.
  const handleSelectMaterial = () => {}

  return (
    <section id="materials" className={`section ${styles.materials}`}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <span className="eyebrow">Materiály</span>
            <h2 className={styles.heading}>
              Pracujem len s kvalitnými
              <br />
              materiálmi
            </h2>
            <p className={styles.paragraph}>
              Používam laminované dosky od overených výrobcov, ktoré zaručujú
              dlhú životnosť, odolnosť a moderný vzhľad.
            </p>
            <a href="#contact" className={styles.link}>
              Zistiť viac o materiáloch <span>→</span>
            </a>
          </div>

          <div className={styles.grid}>
            {materials.map((material) => (
              <MaterialCard key={material.materialCode} {...material} onSelect={handleSelectMaterial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Materials
