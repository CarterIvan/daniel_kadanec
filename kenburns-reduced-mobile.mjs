import { chromium } from 'playwright'

const browser = await chromium.launch()

// Reduced motion check
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' })
const start = Date.now()
await page.goto('http://localhost:5183/', { waitUntil: 'commit' })
await page.waitForTimeout(Math.max(0, 3000 - (Date.now() - start)))
const reducedTransform = await page.evaluate(() => {
  const el = document.querySelector('[class*="kenBurns"]')
  return el ? getComputedStyle(el).transform : 'NOT FOUND'
})
console.log('reduced-motion kenBurns transform (should be none):', reducedTransform)
await page.close()

// Mobile check
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } })
const start2 = Date.now()
await mobile.goto('http://localhost:5183/', { waitUntil: 'commit' })
await mobile.waitForTimeout(Math.max(0, 4500 - (Date.now() - start2)))
const overflow = await mobile.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
console.log('mobile overflow:', overflow)
await mobile.waitForTimeout(3000)
const mobileTransform = await mobile.evaluate(() => {
  const el = document.querySelector('[class*="kenBurns"]')
  return el ? getComputedStyle(el).transform : 'NOT FOUND'
})
console.log('mobile kenBurns transform after ~7.5s (should show progress):', mobileTransform)
await mobile.screenshot({ path: '/tmp/kenburns-mobile.png' })
await mobile.close()

await browser.close()
