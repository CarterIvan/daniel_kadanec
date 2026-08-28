import styles from './ServiceFinalCTA.module.css'

function ServiceFinalCTA({ heading, text }) {
  return (
    <section id="contact" className={styles.cta}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">Kontaktujte ma</span>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.text}>{text}</p>
        <a href="mailto:kady.danjo@gmail.com" className={`btn btn-primary ${styles.ctaButton}`}>
          Nezáväzná ponuka
          <span className={styles.arrow}>→</span>
        </a>
      </div>
    </section>
  )
}

export default ServiceFinalCTA
