import { useEffect, useRef, useState } from 'react'
import { heroImg } from '../../data/content'
import { getIntroPlayed, setIntroPlayed } from '../../utils/introFlag'
import wide from '../../styles/wide-container.module.css'
import styles from './Hero.module.css'

function Hero() {
  // Pure read here (safe under StrictMode's double-invoke of lazy
  // initializers) — the flag itself is only ever flipped in the effect
  // below, which is idempotent even if that also double-invokes.
  const [skipIntro] = useState(() => getIntroPlayed())
  const heroRef = useRef(null)

  useEffect(() => {
    setIntroPlayed()
  }, [])

  const reveal = (revealClass) => (skipIntro ? '' : `${styles.reveal} ${revealClass}`)

  const scrollToNextSection = () => {
    heroRef.current?.nextElementSibling?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className={styles.hero} ref={heroRef}>
      <div className={styles.imageWrap}>
        <div className={styles.kenBurns}>
          <img
            src={heroImg}
            alt="Moderná kuchyňa na mieru s drevenou lamelovou priečkou"
            fetchpriority="high"
            decoding="async"
            className={skipIntro ? '' : styles.imgSettle}
          />
        </div>
        <div className={styles.overlay} />
      </div>

      <div className={`${wide.wide} ${styles.content}`}>
        <div className={styles.textBlock}>
          <span className={`eyebrow ${styles.heroEyebrow} ${reveal(styles.revealEyebrow)}`}>Bratislava a okolie</span>
          {/* The headline is the page's actual LCP candidate (the hero
              photo sits behind a dark overlay, so it doesn't qualify) —
              rendered fully visible immediately rather than on the
              staggered fade-in delay, so it can be painted and measured
              right away instead of sitting at opacity:0 for ~2.6s+. */}
          <h1 className={styles.headline}>
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
            <a href="tel:+421940700565" className={`btn btn-primary ${styles.btn}`}>
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

      <button
        type="button"
        className={`${styles.mobileScrollIndicator} ${reveal(styles.revealScroll)}`}
        onClick={scrollToNextSection}
        aria-label="Posunúť na ďalšiu sekciu"
      >
        <span className={styles.mobileScrollLabel}>Posuňte nižšie</span>
        <svg
          className={styles.mobileScrollGlyph}
          width="14"
          height="26"
          viewBox="0 0 14 26"
          fill="none"
          aria-hidden="true"
        >
          <line x1="7" y1="0" x2="7" y2="15" stroke="currentColor" strokeWidth="1" />
          <path d="M2 11L7 17L12 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  )
}

export default Hero
