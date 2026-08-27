import { chromium } from 'playwright'

const browser = await chromium.launch()
const sizes = [320, 375, 390, 414, 480]

for (const w of sizes) {
  const page = await browser.newPage({ viewport: { width: w, height: 800 } })
  const start = Date.now()
  await page.goto('http://localhost:5183/', { waitUntil: 'commit' })
  await page.waitForTimeout(Math.max(0, 4300 - (Date.now() - start)))

  await page.click('button[aria-label="Otvoriť menu"]')
  await page.waitForTimeout(700)
  await page.screenshot({ path: `/tmp/menu-${w}.png` })

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
  const navRect = await page.evaluate(() => {
    const nav = document.querySelector('nav')
    return nav.getBoundingClientRect()
  })
  console.log(`${w}px overflow=${overflow} navHeight=${navRect.height} viewport=800`)

  await page.close()
}

await browser.close()
