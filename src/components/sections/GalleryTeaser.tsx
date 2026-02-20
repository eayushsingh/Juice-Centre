"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { galleryItems } from "@/data/gallery"

export default function GalleryTeaser() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div style={{ minHeight: '600px', background: '#FFFDF8' }} />
        )
    }
    return (
        <section className="relative py-[60px] md:py-[100px] px-[5%] bg-[#FFFDF8] overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-orange-500 font-bold tracking-[.3em] uppercase text-[10px] md:text-xs mb-3 md:mb-4 block font-body">Visual Treats</span>
                    <h2 className="text-[clamp(2.4rem,8vw,5rem)] md:text-6xl font-display font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                        Vibrant & <span className="text-orange-500">Appetizing.</span>
                    </h2>
                </div>

                {/* Mobile: 2x2 grid, Desktop: Mosaic */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                    {galleryItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="relative aspect-square rounded-[30px] md:rounded-[40px] overflow-hidden group border-2 md:border-4 border-white shadow-xl"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                <p className="text-[8px] md:text-xs font-bold font-body uppercase tracking-widest mb-1">{item.tag}</p>
                                <h4 className="text-base md:text-2xl font-bold font-display">{item.title}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 md:mt-16 text-center">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-orange-500 transition-all text-base md:text-lg group min-h-[44px] font-body"
                    >
                        View Full Gallery <span className="group-hover:translate-x-2 transition-transform">📸</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
