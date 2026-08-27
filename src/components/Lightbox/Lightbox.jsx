import { useEffect, useRef, useState } from 'react'
import styles from './Lightbox.module.css'

const EXIT_DURATION_MS = 320
const SWIPE_THRESHOLD_PX = 50

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const [closing, setClosing] = useState(false)
  const touchStartX = useRef(null)

  const requestClose = () => {
    if (closing) return
    setClosing(true)
    setTimeout(onClose, EXIT_DURATION_MS)
  }

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') requestClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onPrev, onNext])

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return
    if (delta < 0) onNext()
    else onPrev()
  }

  const current = images[index]
  const total = images.length
  const pad = (n) => String(n + 1).padStart(2, '0')

  return (
    <div
      className={`${styles.overlay} ${closing ? styles.closing : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Galéria realizácií"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button className={styles.backdrop} aria-label="Zavrieť galériu" onClick={requestClose} />

      <div className={styles.content}>
        <button className={styles.close} aria-label="Zavrieť" onClick={requestClose}>
          <span />
          <span />
        </button>

        <figure className={styles.figure}>
          <img key={current.image} src={current.image} alt={current.alt || ''} className={styles.image} />
        </figure>

        {total > 1 && (
          <>
            <button className={`${styles.nav} ${styles.prev}`} aria-label="Predchádzajúci obrázok" onClick={onPrev}>
              ←
            </button>
            <button className={`${styles.nav} ${styles.next}`} aria-label="Ďalší obrázok" onClick={onNext}>
              →
            </button>
            <div className={styles.counter}>
              {pad(index)} / {pad(total - 1)}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Lightbox
