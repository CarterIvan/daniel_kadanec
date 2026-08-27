import { useEffect, useState } from 'react'
import { heroImg } from '../../data/content'
import { getIntroPlayed, setIntroPlayed } from '../../utils/introFlag'
import wide from '../../styles/wide-container.module.css'
import styles from './Hero.module.css'

function Hero() {
  // Pure read here (safe under StrictMode's double-invoke of lazy
  // initializers) — the flag itself is only ever flipped in the effect
  // below, which is idempotent even if that also double-invokes.
  const [skipIntro] = useState(() => getIntroPlayed())

  useEffect(() => {
    setIntroPlayed()
  }, [])

  const reveal = (revealClass) => (skipIntro ? '' : `${styles.reveal} ${revealClass}`)

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.imageWrap}>
        <div className={styles.kenBurns}>
          <img
            src={heroImg}
            alt="Moderná kuchyňa na mieru s drevenou lamelovou priečkou"
            className={skipIntro ? '' : styles.imgSettle}
          />
        </div>
        <div className={styles.overlay} />
      </div>

      <div className={`${wide.wide} ${styles.content}`}>
        <div className={styles.textBlock}>
          <span className={`eyebrow ${reveal(styles.revealEyebrow)}`}>Bratislava a okolie</span>
          <h1 className={`${styles.headline} ${reveal(styles.revealHeadline)}`}>
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
          <span className={`${styles.divider} ${reveal(styles.revealDivider)}`} aria-hidden="true" />
          <p className={`${styles.subtext} ${reveal(styles.revealSubtext)}`}>
            Navrhujeme a vyrábame kvalitné kuchyne,
            <br />
            vstavané skrine a nábytok na mieru
            <br />
            z laminovaných dosiek EGGER
            <br />a ďalších prémiových materiálov.
          </p>
          <div className={`${styles.actions} ${reveal(styles.revealActions)}`}>
            <a href="tel:+421904571802" className={`btn btn-primary ${styles.btn}`}>
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

      <div className={`${styles.scrollIndicator} ${reveal(styles.revealScroll)}`}>
        <span>Posúvajte nižšie</span>
        <span className={styles.scrollArrow}>↓</span>
      </div>
    </section>
  )
}

export default Hero
