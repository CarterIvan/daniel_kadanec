import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Without this, navigating from a scrolled-down homepage to a service page
// (or between service pages) via client-side routing keeps the old scroll
// position instead of starting at the top of the new page.
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
