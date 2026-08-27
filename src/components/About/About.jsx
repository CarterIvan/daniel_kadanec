import { aboutChecklist } from '../../data/content'
import kitchenBeigePantry from '../../assets/images/kitchen-beige-pantry.jpeg'
import styles from './About.module.css'

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.imageCol}>
        <img src={kitchenBeigePantry} alt="Kuchyňa na mieru s vstavanými spotrebičmi" />
      </div>

      <div className={styles.textCol}>
        <div className={styles.textInner}>
          <span className="eyebrow">O mne</span>
          <h2 className={styles.heading}>
            Poctivý nábytok.
            <br />
            Férový prístup.
            <br />
            Spokojní zákazníci.
          </h2>
          <p className={styles.paragraph}>
            Som stolár z Bratislavy a už viac ako 20 rokov sa venujem výrobe
            nábytku na mieru z laminovaných dosiek. Každý projekt beriem
            osobne – od prvého návrhu až po finálnu montáž.
          </p>
          <ul className={styles.checklist}>
            {aboutChecklist.map((item) => (
              <li key={item}>
                <span className={styles.check}>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary">
            Viac o mne
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
