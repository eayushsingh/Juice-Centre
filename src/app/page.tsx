import dynamic from "next/dynamic"
import Hero from "@/components/sections/Hero"

// Below-fold sections: lazy loaded after Hero is painted
const Stats = dynamic(() => import("@/components/sections/Stats"), { ssr: true })
const OurStory = dynamic(() => import("@/components/sections/OurStory"), { ssr: true })
const BranchesPreview = dynamic(() => import("@/components/sections/BranchesPreview"), { ssr: true })
const GalleryTeaser = dynamic(() => import("@/components/sections/GalleryTeaser"), { ssr: true })
const CTABanner = dynamic(() => import("@/components/sections/CTABanner"), { ssr: true })

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <OurStory />
      <BranchesPreview />
      <GalleryTeaser />
      <CTABanner />
    </>
  )
}
