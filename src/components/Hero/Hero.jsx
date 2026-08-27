import { heroImg } from '../../data/content'
import wide from '../../styles/wide-container.module.css'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.imageWrap}>
        <img src={heroImg} alt="Moderná kuchyňa na mieru s drevenou lamelovou priečkou" />
        <div className={styles.overlay} />
      </div>

      <div className={`${wide.wide} ${styles.content}`}>
        <div className={styles.textBlock}>
          <span className={`eyebrow ${styles.reveal} ${styles.revealEyebrow}`}>Bratislava a okolie</span>
          <h1 className={`${styles.headline} ${styles.reveal} ${styles.revealHeadline}`}>
            Nábytok
            <br />
            na mieru,
            <br />
            ktorý dokonale
            <br />
            zapadne do
            <br />
            vášho domova
          </h1>
          <span className={`${styles.divider} ${styles.reveal} ${styles.revealDivider}`} aria-hidden="true" />
          <p className={`${styles.subtext} ${styles.reveal} ${styles.revealSubtext}`}>
            Navrhujeme a vyrábame kvalitné kuchyne,
            <br />
            vstavané skrine a nábytok na mieru
            <br />
            z laminovaných dosiek EGGER
            <br />a ďalších prémiových materiálov.
          </p>
          <div className={`${styles.actions} ${styles.reveal} ${styles.revealActions}`}>
            <a href="+421940571802" className={`btn btn-primary ${styles.btn}`}>
              ZAVOLAJTE MI 
              <span className={styles.arrow}>→</span>
            </a>
            <a href="#projects" className={`btn btn-outline-dark ${styles.btn}`}>
              Pozrieť realizácie
              <span className={styles.arrow}>→</span>
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.scrollIndicator} ${styles.reveal} ${styles.revealScroll}`}>
        <span>Posúvajte nižšie</span>
        <span className={styles.scrollArrow}>↓</span>
      </div>
    </section>
  )
}

export default Hero
