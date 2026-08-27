import styles from './Logo.module.css'

// markClassName/nameClassName/subtitleClassName are optional animation hooks
// (used by the Preloader to stage-reveal the same markup). They default to
// empty strings, so normal navbar/footer usage is completely unaffected.
function Logo({ variant = 'dark', markClassName = '', nameClassName = '', subtitleClassName = '' }) {
  return (
    <div className={`${styles.logo} ${variant === 'light' ? styles.light : ''}`}>
      <span className={`${styles.mark} ${markClassName}`} aria-hidden="true">
        <svg viewBox="0 0 40 40" width="40" height="40">
          <rect x="1" y="1" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <text
            x="20"
            y="26"
            textAnchor="middle"
            fontFamily="'Cormorant Garamond', serif"
            fontSize="17"
            fontWeight="500"
            style={{ fill: 'var(--color-gold)' }}
          >
            DK
          </text>
        </svg>
      </span>
      <span className={styles.text}>
        <span className={`${styles.name} ${nameClassName}`}>DANIEL KADANEC</span>
        <span className={`${styles.subtitle} ${subtitleClassName}`}>NÁBYTOK NA MIERU</span>
      </span>
    </div>
  )
}

export default Logo
