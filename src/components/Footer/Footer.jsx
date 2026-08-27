import { useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { footerServices, footerLinks } from '../../data/content'
import { sectionHref } from '../../utils/sectionLink'
import styles from './Footer.module.css'

function Footer() {
  const { pathname } = useLocation()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <Logo variant="light" />
          <p className={styles.desc}>
            Stolárstvo a výroba nábytku na mieru z laminovaných dosiek.
            Bratislava a okolie.
          </p>
          <div className={styles.social}>
            <a href="https://www.facebook.com/daniel.kadanec" aria-label="Facebook" className={styles.socialIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.66 15.4 3.57 14.2 3.57c-2.4 0-4.05 1.47-4.05 4.16V9.9H7.4V13h2.75v8h3.35z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/danjo.kady/" aria-label="Instagram" className={styles.socialIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Služby</h4>
          <ul className={styles.list}>
            {footerServices.map((item) => (
              <li key={item}>
                <a href={sectionHref('#services', pathname)}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Rýchle odkazy</h4>
          <ul className={styles.list}>
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={sectionHref(link.href, pathname)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Kontakt</h4>
          <ul className={styles.list}>
            <li>
              <a href="tel:+421908123456">+421 908 123 456</a>
            </li>
            <li>
              <a href="mailto:info@danielkadanec.sk">info@danielkadanec.sk</a>
            </li>
            <li>Bratislava a okolie</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <span>© 2026 Daniel Kadanec — Nábytok na mieru. Všetky práva vyhradené.</span>
          <div className={styles.bottomLinks}>
            <a href="#">Ochrana osobných údajov</a>
            <a href="#">Zásady cookies</a>
            <a href="#">Designed by Ivan Ponican</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
