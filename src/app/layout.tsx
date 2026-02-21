import type { Metadata, Viewport } from "next"
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google"
import { Suspense } from 'react'
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Nice Juice Centre – Fresh Since 1986 | Hyderabad",
  description: "Hyderabad's most loved fresh juice destination since 1986. Fresh juices, milkshakes, fruit bowls in Secunderabad and Bandlaguda.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Nice Juice Centre",
    description: "Fresh Since 1986 – Hyderabad's finest juice centre",
    images: ["/images/og.jpg"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${jakarta.variable} antialiased`} suppressHydrationWarning>
        <Suspense fallback={
          <div style={{
            minHeight: '100vh',
            background: '#FFFDF8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid #FED7AA',
              borderTop: '3px solid #F97316',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }} />
          </div>
        }>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <a
            href="https://wa.me/918639271639"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-300/50 transition-all duration-200 hover:scale-110"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
              <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.742 5.484 2.037 7.785L0 32l8.404-2.002A15.954 15.954 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.3 13.3 0 01-6.779-1.847l-.486-.289-5.03 1.198 1.226-4.896-.318-.502A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.822c-.398-.199-2.354-1.162-2.72-1.295-.365-.133-.63-.199-.896.199-.265.398-1.028 1.295-1.26 1.56-.232.265-.465.298-.863.1-.398-.2-1.68-.619-3.2-1.974-1.183-1.054-1.981-2.356-2.213-2.754-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.698.199-.232.265-.398.398-.663.133-.265.066-.498-.033-.697-.1-.199-.896-2.16-1.228-2.957-.323-.776-.65-.67-.896-.683l-.763-.013c-.265 0-.697.1-1.062.498-.365.398-1.394 1.362-1.394 3.322s1.427 3.854 1.626 4.12c.199.265 2.808 4.285 6.802 6.01.951.41 1.693.655 2.271.839.954.303 1.822.26 2.508.158.765-.114 2.354-.963 2.687-1.893.333-.93.333-1.727.233-1.893-.1-.166-.365-.265-.763-.465z" />
            </svg>
          </a>
        </Suspense>
      </body>
    </html>
  )
}
