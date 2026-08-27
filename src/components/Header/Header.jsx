import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { navLinks } from '../../data/content'
import { sectionHref } from '../../utils/sectionLink'
import wide from '../../styles/wide-container.module.css'
import styles from './Header.module.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock the page behind the full-screen menu so it can never bleed through
  // or cause a scroll/layout jump while open.
  useEffect(() => {
    if (!menuOpen) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.headerMenuOpen : ''}`}
    >
      <div className={`${wide.wide} ${styles.inner}`}>
        <Link to="/" className={styles.logoLink}>
          <Logo variant="light" />
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {/* Non-scrolling clearance so the fixed logo/toggle row above
              never gets scrolled-under content behind it. Only navScroll
              scrolls, on short viewports where content doesn't fit. */}
          <div className={styles.navSpacer} aria-hidden="true" />
          <div className={styles.navScroll}>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} onClick={closeMenu}>
                      {link.label}
                    </Link>
                  ) : (
                    <a href={sectionHref(link.href, pathname)} onClick={closeMenu}>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <a href="#contact" className={`btn btn-primary ${styles.mobileCta}`} onClick={closeMenu}>
              KONTAKT 
              <span className={styles.ctaArrow}>→</span>
            </a>
          </div>
        </nav>

        <a href="#contact" className={`btn btn-primary ${styles.cta} ${styles.ctaButton}`}>
          KONTAKT
          <span className={styles.ctaArrow}>→</span>
        </a>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          aria-label={menuOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
