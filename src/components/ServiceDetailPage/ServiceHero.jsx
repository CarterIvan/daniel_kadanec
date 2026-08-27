import { Link } from 'react-router-dom'
import wide from '../../styles/wide-container.module.css'
import styles from './ServiceHero.module.css'

function ServiceHero({ category, title, heroDescription, heroImage }) {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrap}>
        <img src={heroImage} alt={title} />
        <div className={styles.overlay} />
      </div>

      <div className={`${wide.wide} ${styles.content}`}>
        <div className={styles.textBlock}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Domov</Link>
            <span>/</span>
            <span>{title}</span>
          </nav>

          <span className="eyebrow">{category}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{heroDescription}</p>
          <a href="#contact" className="btn btn-primary">
            Nezáväzná ponuka
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServiceHero
