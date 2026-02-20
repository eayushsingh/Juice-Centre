import { writeFileSync, mkdirSync } from "fs"

const dirs = [
  "public/images",
  "public/images/menu",
  "public/images/gallery",
]
dirs.forEach(d => mkdirSync(d, { recursive: true }))

// Minimal valid 1x1 orange PNG (base64 encoded)
// This is a 100x100 solid orange PNG — universally valid
const orangePNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwADhQGAWjR9awAAAABJRU5ErkJggg==",
  "base64"
)

// Write a proper SVG as a text file (not used for next/image)
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <rect width="800" height="500" fill="#FFF5E6"/>
  <circle cx="400" cy="220" r="90" fill="#FF8C00" opacity="0.15"/>
  <circle cx="400" cy="220" r="60" fill="#FF8C00" opacity="0.2"/>
  <circle cx="400" cy="220" r="35" fill="#FF8C00" opacity="0.4"/>
  <text x="400" y="355" font-family="sans-serif" font-size="26" font-weight="bold" fill="#FF8C00" text-anchor="middle">Nice Juice Centre</text>
  <text x="400" y="392" font-family="sans-serif" font-size="16" fill="#ccc" text-anchor="middle">Photo Coming Soon</text>
</svg>`

// Write the PNG placeholder (used by next/image)
writeFileSync("public/images/placeholder.png", orangePNG)

// Write SVG separately (not used by next/image)
writeFileSync("public/images/placeholder-preview.svg", svg)

// Create empty placeholder copies for all missing images
// so 404s stop completely
const menuImages = [
  "orange", "watermelon", "mosambi", "mango", "strawberry",
  "chikoo", "fruitbowl", "tropical", "mojito", "bluelagoon",
  "pineapple", "detox"
]

menuImages.forEach(name => {
  writeFileSync(`public/images/menu/${name}.jpg`, orangePNG)
})

for (let i = 1; i <= 12; i++) {
  writeFileSync(`public/images/gallery/g${i}.jpg`, orangePNG)
}

writeFileSync("public/images/hero.jpg", orangePNG)
writeFileSync("public/images/store.jpg", orangePNG)
writeFileSync("public/images/og.jpg", orangePNG)

console.log("✅ All placeholder images created successfully")
console.log("📸 Replace any file in public/images/ with your real photo — same filename")
