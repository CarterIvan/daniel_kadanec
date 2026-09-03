import { kitchenDiningPendant } from '../../data/content'
import styles from './CTA.module.css'

function CTA() {
  return (
    <section id="contact" className={styles.cta}>
      <div className={styles.textCol}>
        <div className={styles.textInner}>
          <span className="eyebrow">Kontaktujte ma</span>
          <h2 className={styles.heading}>
            Máte záujem o nábytok
            <br />
            na mieru?
          </h2>
          <p className={styles.paragraph}>
            Napíšte mi pár informácií o vašom projekte
            <br />a pripravím vám nezáväznú ponuku.
          </p>
          <a href="mailto:kady.danjo@gmail.com" className="btn btn-primary">
            Nezáväzná ponuka
          </a>
        </div>
      </div>
      <div className={styles.imageCol}>
        <img src={kitchenDiningPendant} alt="Prémiová kuchyňa s jedálenským stolom" loading="lazy" decoding="async" />
      </div>
    </section>
  )
}

export default CTA
