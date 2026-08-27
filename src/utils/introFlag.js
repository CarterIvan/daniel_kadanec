// Tracks whether the hero's first-load entrance animation has already
// played once during this browser session (a plain module-level variable,
// not React state, so it survives Hero unmounting/remounting as the user
// navigates away and back via React Router — it only resets on an actual
// full page reload, same as the preloader itself).
//
// Read this via a lazy useState initializer (pure — safe under StrictMode's
// double-invoke) and only flip it via setIntroPlayed() inside a useEffect
// (idempotent — safe even if the effect itself is double-invoked).
let hasIntroPlayed = false

export function getIntroPlayed() {
  return hasIntroPlayed
}

export function setIntroPlayed() {
  hasIntroPlayed = true
}
