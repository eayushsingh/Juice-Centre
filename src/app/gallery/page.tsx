"use client"
import GalleryTeaser from "@/components/sections/GalleryTeaser"

const metadata = {
    title: 'Gallery | Nice Juice Centre',
    description: 'Glimpse into our world of fresh fruit juices and signature malai desserts.',
}

export default function GalleryPage() {
    return (
        <main className="pt-24 min-h-screen bg-[#050505]">
            <section className="py-[60px] md:py-[80px] text-center px-[5%]">
                <h1 className="text-4xl md:text-6xl text-white mb-6 font-display font-black tracking-tight">
                    Our <span className="text-[#D4AF37]">Gallery</span>
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto font-body">
                    Visual stories of our fresh ingredients, artisan processes, and signature creations.
                </p>
            </section>
            <GalleryTeaser />
        </main>
    )
}
