import { chromium } from 'playwright'

const browser = await chromium.launch()
const errors = []

async function run() {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()) })
  page.on('pageerror', (err) => errors.push(err.message))

  const start = Date.now()
  await page.goto('http://localhost:5183/', { waitUntil: 'commit' })
  await page.waitForTimeout(Math.max(0, 4300 - (Date.now() - start)))
  await page.locator('#projects').scrollIntoViewIfNeeded()
  await page.waitForTimeout(200)

  // Hover to check the subtle "+" affordance (no large text)
  const firstCard = page.locator('#projects button[aria-label^="Zväčšiť"]').first()
  await firstCard.hover()
  await page.waitForTimeout(600)
  await page.screenshot({ path: '/tmp/lb-hover.png', clip: { x: 100, y: 300, width: 280, height: 400 } })

  // Click to open lightbox
  await firstCard.click()
  await page.waitForTimeout(500)
  await page.screenshot({ path: '/tmp/lb-open.png' })
  const overflowOpen = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
  console.log('overflow with lightbox open:', overflowOpen)

  // Next
  await page.click('button[aria-label="Ďalší obrázok"]')
  await page.waitForTimeout(500)
  await page.screenshot({ path: '/tmp/lb-next.png' })

  // Escape to close — check exit animation actually plays (element still present briefly)
  await page.keyboard.press('Escape')
  await page.waitForTimeout(100)
  const stillPresentMidClose = await page.evaluate(() => !!document.querySelector('[role="dialog"]'))
  await page.screenshot({ path: '/tmp/lb-mid-close.png' })
  await page.waitForTimeout(400)
  const goneAfterClose = await page.evaluate(() => !document.querySelector('[role="dialog"]'))
  console.log('lightbox present 100ms into close (should be true):', stillPresentMidClose)
  console.log('lightbox gone after full close (should be true):', goneAfterClose)

  // Re-open, test backdrop click to close
  await firstCard.click()
  await page.waitForTimeout(500)
  await page.click('body', { position: { x: 30, y: 30 } })
  await page.waitForTimeout(500)
  const goneAfterBackdrop = await page.evaluate(() => !document.querySelector('[role="dialog"]'))
  console.log('lightbox gone after backdrop click:', goneAfterBackdrop)

  console.log('console errors:', errors.length ? errors : 'none')
  await page.close()
}

await run()
await browser.close()
