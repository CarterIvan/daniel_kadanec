// Homepage-only sections (#home, #services, #projects, #about, #materials)
// only exist on the "/" route. When the navbar/footer render on a service
// detail page, a link to one of those hashes must first navigate home.
// #contact is excluded: every page (home + every service page) renders its
// own final-CTA section with id="contact", so it always works as a plain
// same-page anchor no matter where it's clicked from.
export function sectionHref(hash, pathname) {
  if (hash === '#contact') return hash
  if (pathname === '/') return hash
  if (hash === '#home') return '/'
  return `/${hash}`
}
