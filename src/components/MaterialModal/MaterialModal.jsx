import { useEffect } from 'react'
import styles from './MaterialModal.module.css'

// Shows only fields that actually exist on the material data — no invented
// material codes or decor names.
function MaterialModal({ material, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={`Materiál ${material.manufacturer}`}>
      <button className={styles.backdrop} aria-label="Zavrieť" onClick={onClose} />

      <div className={styles.card}>
        <button className={styles.close} aria-label="Zavrieť" onClick={onClose}>
          <span />
          <span />
        </button>

        <div className={styles.media}>
          {material.image ? (
            <img src={material.image} alt={material.manufacturer} />
          ) : (
            <span className={styles.wordmark} style={{ color: material.logoColor }}>
              {material.name}
            </span>
          )}
        </div>

        <div className={styles.body}>
          <span className={styles.manufacturer}>{material.manufacturer}</span>
          {material.description && <p className={styles.description}>{material.description}</p>}
        </div>
      </div>
    </div>
  )
}

export default MaterialModal
