import Hero from "@/components/sections/Hero"
import Stats from "@/components/sections/Stats"
import OurStory from "@/components/sections/OurStory"
import BranchesPreview from "@/components/sections/BranchesPreview"
import GalleryTeaser from "@/components/sections/GalleryTeaser"
import CTABanner from "@/components/sections/CTABanner"

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
