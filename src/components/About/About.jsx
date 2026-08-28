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
          <div className={styles.social}>
            <a
              href="https://www.facebook.com/daniel.kadanec"
              aria-label="Facebook"
              className={styles.socialIcon}
            >
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M13.8 21v-7.2h2.1l.3-2.6h-2.4V9.6c0-.75.2-1.26 1.28-1.26h1.37V6a18 18 0 0 0-2-.1c-1.98 0-3.34 1.21-3.34 3.43v1.91H8.9v2.6h2.21V21" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/danjo.kady/"
              aria-label="Instagram"
              className={styles.socialIcon}
            >
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
