import styles from './Projects.module.css'

function ProjectCard({ image, title, category, onOpen }) {
  return (
    <>
      <button type="button" className={styles.card} onClick={onOpen} aria-label={`Zväčšiť fotografiu: ${title}`}>
        <img src={image} alt={title} loading="lazy" />
        <span className={styles.cardOverlay}>
          <span className={styles.cardPlus}>+</span>
        </span>
      </button>
      <div className={styles.cardCaption}>
        <span className={styles.cardCategory}>{category}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
    </>
  )
}

export default ProjectCard
