import { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import { heroImg } from '../../data/content'
import styles from './Preloader.module.css'

// Minimum time the preloader stays fully on screen before it's allowed to
// exit, so the brand reveal never feels rushed even if the hero image is
// already cached. Real load time only extends this, never shortens it.
const MIN_VISIBLE_MS = 1700
const EXIT_DURATION_MS = 850

function Preloader() {
  const [phase, setPhase] = useState('active') // active -> exiting -> done

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    let imageReady = false
    let minTimeElapsed = false

    const tryExit = () => {
      if (imageReady && minTimeElapsed) setPhase('exiting')
    }

    const img = new Image()
    img.onload = () => {
      imageReady = true
      tryExit()
    }
    img.onerror = () => {
      imageReady = true
      tryExit()
    }
    img.src = heroImg
    if (img.complete) {
      imageReady = true
    }

    const minTimer = setTimeout(() => {
      minTimeElapsed = true
      tryExit()
    }, MIN_VISIBLE_MS)

    // Safety net: never let a stalled image request hold the site hostage.
    const maxTimer = setTimeout(() => setPhase('exiting'), MIN_VISIBLE_MS + 2500)

    return () => {
      clearTimeout(minTimer)
      clearTimeout(maxTimer)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    if (phase !== 'exiting') return undefined
    const t = setTimeout(() => {
      setPhase('done')
      document.body.style.overflow = ''
    }, EXIT_DURATION_MS)
    return () => clearTimeout(t)
  }, [phase])

  if (phase === 'done') return null

  return (
    <div
      className={`${styles.preloader} ${phase === 'exiting' ? styles.exiting : ''}`}
      aria-hidden="true"
    >
      <div className={styles.glow} />
      <div className={styles.logoWrap}>
        <Logo
          variant="light"
          markClassName={styles.mark}
          nameClassName={styles.name}
          subtitleClassName={styles.subtitle}
        />
      </div>
    </div>
  )
}

export default Preloader
