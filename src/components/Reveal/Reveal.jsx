import { useEffect, useRef, useState } from 'react'
import styles from './Reveal.module.css'

// Wraps a section (or a single image tile) so it fades into place once, the
// first time it enters the viewport. Deliberately simple (no scroll-linked
// animation, no re-triggering) to keep the effect calm rather than busy.
//
// variant="section" (default): fade + small rise — for whole page sections.
// variant="image": fade + very subtle scale-down (1.04 → 1) and a touch of
// rise — for gallery/portfolio tiles, per the brief's image-reveal spec.
// variant="item": fade + a very small rise only — for small inline content
// (icons, headings, short text) inside a section that must NOT itself be
// hidden/animated, only the content within it.
function Reveal({ children, className = '', delay = 0, variant = 'section' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const variantClass = variant === 'image' ? styles.image : variant === 'item' ? styles.item : styles.reveal

  return (
    <div
      ref={ref}
      className={`${variantClass} ${visible ? styles.visible : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

export default Reveal
