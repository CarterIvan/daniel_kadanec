import styles from './ProcessTimeline.module.css'

function ProcessTimeline({ steps }) {
  return (
    <section className={`section ${styles.process}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Spolupráca</span>
          <h2 className={styles.heading}>Ako prebieha spolupráca</h2>
        </div>

        <ol className={styles.timeline}>
          {steps.map((step) => (
            <li className={styles.step} key={step.number}>
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.desc}>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ProcessTimeline
