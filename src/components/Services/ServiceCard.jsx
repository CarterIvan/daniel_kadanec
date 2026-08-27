import { Link } from 'react-router-dom'
import styles from './Services.module.css'

function ServiceCard({ slug, title, description, image }) {
  return (
    <Link to={`/${slug}`} className={styles.card}>
      <div className={styles.cardImage}>
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
        <span className={styles.cardLink}>
          Zistiť viac <span>→</span>
        </span>
      </div>
    </Link>
  )
}

export default ServiceCard
