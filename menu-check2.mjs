import { chromium } from 'playwright'

const browser = await chromium.launch()

const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
const start = Date.now()
await page.goto('http://localhost:5183/', { waitUntil: 'commit' })
await page.waitForTimeout(Math.max(0, 4300 - (Date.now() - start)))
await page.click('button[aria-label="Otvoriť menu"]')
await page.waitForTimeout(700)
await page.screenshot({ path: '/tmp/menu-tall-844.png' })
await page.close()

const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const start2 = Date.now()
await desktop.goto('http://localhost:5183/', { waitUntil: 'commit' })
await desktop.waitForTimeout(Math.max(0, 4300 - (Date.now() - start2)))
await desktop.screenshot({ path: '/tmp/desktop-nav-check.png', clip: { x: 0, y: 0, width: 1440, height: 100 } })
await desktop.close()

await browser.close()
