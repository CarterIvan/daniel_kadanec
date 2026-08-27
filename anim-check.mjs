import { chromium } from 'playwright'

const browser = await chromium.launch()
const errors = []

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()) })
page.on('pageerror', (err) => errors.push(err.message))

const start = Date.now()
await page.goto('http://localhost:5183/', { waitUntil: 'commit' })
await page.waitForTimeout(Math.max(0, 4300 - (Date.now() - start)))

// Check FeatureBar (first Reveal-wrapped section) is visible/opacity 1 after scroll
await page.evaluate(() => window.scrollTo(0, 900))
await page.waitForTimeout(700)
const featureOpacity = await page.evaluate(() => {
  const el = document.querySelector('section')
  return null
})
// Check via class presence: Reveal adds a "visible" class once intersecting
const revealStates = await page.evaluate(() => {
  const reveals = document.querySelectorAll('[class*="reveal"], [class*="Reveal"]')
  return Array.from(reveals).slice(0, 5).map((el) => ({
    cls: el.className,
    opacity: getComputedStyle(el).opacity,
  }))
})
console.log('reveal states after scroll:', JSON.stringify(revealStates, null, 2))

// Scroll further to trigger more sections
await page.evaluate(() => window.scrollTo(0, 2500))
await page.waitForTimeout(700)
await page.screenshot({ path: '/tmp/anim-scroll-2500.png' })

await page.evaluate(() => window.scrollTo(0, 4500))
await page.waitForTimeout(700)
await page.screenshot({ path: '/tmp/anim-scroll-4500.png' })

// Hover a service card
await page.evaluate(() => window.scrollTo(0, 1400))
await page.waitForTimeout(300)
const cardLink = page.locator('a[href="/kuchyne-na-mieru"]').first()
await cardLink.hover()
await page.waitForTimeout(500)
await page.screenshot({ path: '/tmp/anim-card-hover.png' })

// Navigate via page transition
await cardLink.click()
await page.waitForTimeout(200)
await page.screenshot({ path: '/tmp/anim-page-transition-mid.png' })
await page.waitForTimeout(600)
await page.screenshot({ path: '/tmp/anim-page-transition-done.png' })

console.log('errors:', errors.length ? errors : 'none')
await browser.close()
