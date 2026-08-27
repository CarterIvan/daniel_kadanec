import { chromium } from 'playwright'

const browser = await chromium.launch()
const errors = []
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()) })
page.on('pageerror', (err) => errors.push(err.message))

const start = Date.now()
await page.goto('http://localhost:5183/', { waitUntil: 'commit' })
await page.waitForTimeout(Math.max(0, 4500 - (Date.now() - start)))

const getTransform = async () => page.evaluate(() => {
  const el = document.querySelector('[class*="kenBurns"]')
  const overlay = document.querySelector('[class*="overlay"]')
  return {
    kenBurnsTransform: el ? getComputedStyle(el).transform : 'NOT FOUND',
    overlayTransform: overlay ? getComputedStyle(overlay).transform : 'NOT FOUND',
  }
})

console.log('at ~4.5s (soon after mount):', JSON.stringify(await getTransform()))

await page.waitForTimeout(5000)
console.log('at ~9.5s:', JSON.stringify(await getTransform()))

await page.waitForTimeout(6000)
console.log('at ~15.5s:', JSON.stringify(await getTransform()))

await page.screenshot({ path: '/tmp/kenburns-mid.png' })

console.log('errors:', errors.length ? errors : 'none')
await browser.close()
