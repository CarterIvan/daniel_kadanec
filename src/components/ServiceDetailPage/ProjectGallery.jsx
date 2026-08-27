import { useEffect, useRef, useState } from 'react'
import Lightbox from '../Lightbox/Lightbox'
import Reveal from '../Reveal/Reveal'
import styles from './ProjectGallery.module.css'

const pad = (n) => String(n).padStart(2, '0')

function ProjectGallery({ gallery }) {
  const [active, setActive] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const trackRef = useRef(null)
  const itemRefs = useRef([])

  if (!gallery || gallery.length === 0) return null

  const scrollToIndex = (i) => {
    const clamped = (i + gallery.length) % gallery.length
    const track = trackRef.current
    const el = itemRefs.current[clamped]
    if (track && el) {
      track.scrollTo({ left: el.offsetLeft - track.offsetLeft, behavior: 'smooth' })
    }
    setActive(clamped)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    let frame = null
    const onScroll = () => {
      if (frame) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const trackLeft = track.scrollLeft + track.offsetLeft
        let closest = 0
        let closestDistance = Infinity
        itemRefs.current.forEach((el, i) => {
          if (!el) return
          const distance = Math.abs(el.offsetLeft - trackLeft)
          if (distance < closestDistance) {
            closestDistance = distance
            closest = i
          }
        })
        setActive(closest)
      })
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section id="projects" className={`section ${styles.gallery}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Realizácie</span>
          <h2 className={styles.heading}>Ukážky z tejto kategórie</h2>
        </div>

        <div className={styles.track} ref={trackRef}>
          {gallery.map((item, i) => (
            <div className={styles.slide} key={item.image} ref={(el) => (itemRefs.current[i] = el)}>
              <Reveal variant="image" delay={Math.min(i, 4) * 80}>
                <button
                  type="button"
                  className={styles.tile}
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`Zväčšiť fotografiu: ${item.alt || ''}`}
                >
                  <img src={item.image} alt={item.alt || ''} loading="lazy" />
                  <span className={styles.tileOverlay}>
                    <span className={styles.tilePlus}>+</span>
                  </span>
                </button>
              </Reveal>
            </div>
          ))}
        </div>

        {gallery.length > 1 && (
          <div className={styles.controls}>
            <div className={styles.dots}>
              {gallery.map((item, i) => (
                <button
                  key={item.image}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                  aria-label={`Zobraziť fotografiu ${i + 1}`}
                  onClick={() => scrollToIndex(i)}
                />
              ))}
            </div>

            <span className={styles.counter}>
              {pad(active + 1)} / {pad(gallery.length)}
            </span>

            <div className={styles.arrows}>
              <button
                className={`${styles.arrow} ${styles.arrowPrev}`}
                aria-label="Predchádzajúca fotografia"
                onClick={() => scrollToIndex(active - 1)}
              >
                <span className={styles.arrowGlyph}>←</span>
              </button>
              <button
                className={`${styles.arrow} ${styles.arrowNext}`}
                aria-label="Ďalšia fotografia"
                onClick={() => scrollToIndex(active + 1)}
              >
                <span className={styles.arrowGlyph}>→</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={gallery}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i - 1 + gallery.length) % gallery.length)}
          onNext={() => setLightboxIndex((i) => (i + 1) % gallery.length)}
        />
      )}
    </section>
  )
}

export default ProjectGallery
