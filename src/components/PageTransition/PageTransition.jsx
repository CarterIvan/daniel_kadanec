import { useLocation } from 'react-router-dom'
import styles from './PageTransition.module.css'

// Keyed by pathname so React remounts this wrapper on every route change,
// replaying the fade-in. Deliberately just a quick, quiet crossfade — the
// goal is to avoid an abrupt hard-cut between pages, not to add a visible
// "loading" moment.
function PageTransition({ children }) {
  const { pathname } = useLocation()

  return (
    <div key={pathname} className={styles.enter}>
      {children}
    </div>
  )
}

export default PageTransition
