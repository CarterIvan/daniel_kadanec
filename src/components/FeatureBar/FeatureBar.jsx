import { features } from '../../data/content'
import Reveal from '../Reveal/Reveal'
import styles from './FeatureBar.module.css'

const icons = [
  // ruler / na mieru
  <svg key="0" width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path d="M3 16.5L7.5 21l13.5-13.5L16.5 3 3 16.5z" stroke="currentColor" strokeWidth="1.2" />
    <path d="M13 6.5l2 2M10 9.5l2 2M7 12.5l2 2" stroke="currentColor" strokeWidth="1.2" />
  </svg>,
  // material / hexagon
  <svg key="1" width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" stroke="currentColor" strokeWidth="1.2" />
    <path d="M12 8l4 2.3v4.4L12 17l-4-2.3v-4.4L12 8z" stroke="currentColor" strokeWidth="1" />
  </svg>,
  // precision / target
  <svg key="2" width="26" height="26" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" />
  </svg>,
  // location pin
  <svg key="3" width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.2" />
  </svg>,
]

function FeatureBar() {
  return (
    <section className={styles.bar}>
      <div className={`container ${styles.grid}`}>
        {features.map((feature, i) => (
          <Reveal className={styles.item} variant="item" delay={i * 90} key={feature.title}>
            <span className={styles.icon}>{icons[i]}</span>
            <div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.desc}>{feature.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default FeatureBar
