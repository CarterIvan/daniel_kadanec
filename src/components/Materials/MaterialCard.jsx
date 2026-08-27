import styles from './Materials.module.css'

function MaterialCard({ name, manufacturer, description, materialCode, logoColor, image, onSelect }) {
  const handleClick = () => {
    if (onSelect) onSelect(materialCode)
  }

  return (
    <button
      type="button"
      className={styles.card}
      onClick={handleClick}
      aria-label={`Zobraziť materiál ${manufacturer}`}
    >
      <div className={styles.thumb}>
        {image ? (
          <img src={image} alt={manufacturer} loading="lazy" className={styles.swatchImg} />
        ) : (
          <span className={styles.wordmark} style={{ color: logoColor }}>
            {name}
          </span>
        )}
      </div>
      <span className={styles.desc}>{description}</span>
    </button>
  )
}

export default MaterialCard
