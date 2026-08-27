import { services } from '../../data/content'
import ServiceCard from './ServiceCard'
import styles from './Services.module.css'

function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="eyebrow">Čo vyrábam</span>
            <h2 className={styles.heading}>
              Nábytok na mieru
              <br />
              pre každý interiér
            </h2>
          </div>
          <a href="#contact" className={styles.headerLink}>
            Zistiť viac o službách <span>→</span>
          </a>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
