import GalleryTeaser from "@/components/sections/GalleryTeaser"

export const metadata = {
    title: 'Gallery | Nice Juice Centre',
    description: 'Glimpse into our world of fresh fruit juices and signature malai desserts.',
}

export default function GalleryPage() {
    return (
        <main className="pt-24 min-h-screen bg-[#FFFDF8]">
            <section className="py-[60px] md:py-[80px] text-center px-[5%]">
                <h1 className="text-4xl md:text-6xl text-slate-900 mb-6 font-display font-black tracking-tight">
                    Our <span className="text-orange-500">Gallery</span>
                </h1>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto font-body">
                    Visual stories of our fresh ingredients, artisan processes, and signature creations.
                </p>
            </section>
            <GalleryTeaser />
        </main>
    )
}
