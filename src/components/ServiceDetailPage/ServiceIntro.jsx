import styles from './ServiceIntro.module.css'

function ServiceIntro({ statement, paragraphs }) {
  return (
    <section className={`section ${styles.intro}`}>
      <div className="container">
        <span className={`eyebrow ${styles.eyebrow}`}>Prístup</span>

        <div className={styles.grid}>
          <h2 className={styles.statement}>{statement}</h2>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.copy}>
            {paragraphs.map((paragraph, i) => (
              <p key={paragraph}>
                <span className={styles.copyIndex}>{String(i + 1).padStart(2, '0')}</span>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceIntro
