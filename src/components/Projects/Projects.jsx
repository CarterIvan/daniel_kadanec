import { useEffect, useRef, useState } from 'react'
import { projects } from '../../data/content'
import ProjectCard from './ProjectCard'
import Lightbox from '../Lightbox/Lightbox'
import Reveal from '../Reveal/Reveal'
import styles from './Projects.module.css'

const pad = (n) => String(n).padStart(2, '0')
const lightboxImages = projects.map((p) => ({ image: p.image, alt: p.title }))

function Projects() {
  const [active, setActive] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const trackRef = useRef(null)
  const itemRefs = useRef([])

  const scrollToIndex = (index) => {
    const clamped = (index + projects.length) % projects.length
    const track = trackRef.current
    const el = itemRefs.current[clamped]
    if (track && el) {
      track.scrollTo({ left: el.offsetLeft - track.offsetLeft, behavior: 'smooth' })
    }
    setActive(clamped)
  }

  // Keep the dots/counter in sync while the user swipes or drags the
  // scrollbar directly, not just when the arrows/dots are used.
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
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="eyebrow">Realizácie</span>
            <h2 className={styles.heading}>Ukážky mojej práce</h2>
          </div>
          <a href="https://www.instagram.com/danjo.kady/" className={styles.headerLink}>
            Všetky realizácie <span>→</span>
          </a>
        </div>

        <div className={styles.track} ref={trackRef}>
          {projects.map((project, i) => (
            <div className={styles.slide} key={project.title + i} ref={(el) => (itemRefs.current[i] = el)}>
              <Reveal variant="image" delay={Math.min(i, 4) * 80}>
                <ProjectCard {...project} onOpen={() => setLightboxIndex(i)} />
              </Reveal>
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <div className={styles.dots}>
            {projects.map((project, i) => (
              <button
                key={project.title + i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                aria-label={`Zobraziť realizáciu ${i + 1}`}
                onClick={() => scrollToIndex(i)}
              />
            ))}
          </div>

          <span className={styles.counter}>
            {pad(active + 1)} / {pad(projects.length)}
          </span>

          <div className={styles.arrows}>
            <button
              className={`${styles.arrow} ${styles.arrowPrev}`}
              aria-label="Predchádzajúca realizácia"
              onClick={() => scrollToIndex(active - 1)}
            >
              <span className={styles.arrowGlyph}>←</span>
            </button>
            <button
              className={`${styles.arrow} ${styles.arrowNext}`}
              aria-label="Ďalšia realizácia"
              onClick={() => scrollToIndex(active + 1)}
            >
              <span className={styles.arrowGlyph}>→</span>
            </button>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i - 1 + projects.length) % projects.length)}
          onNext={() => setLightboxIndex((i) => (i + 1) % projects.length)}
        />
      )}
    </section>
  )
}

export default Projects
