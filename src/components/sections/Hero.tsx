"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from 'react'

export default function Hero() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div style={{ minHeight: '100vh', background: '#0A0A0A' }} />
        )
    }

    return (
        <section className="relative min-h-screen bg-[#0A0A0A] overflow-hidden
                            pt-16 pb-8 px-6 md:px-12 flex flex-col justify-center">

            {/* ── BACKGROUND DECORATION ── */}
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[70%]
                            bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%]
                            bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,.15) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto w-full">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 mb-8
                               border border-[#D4AF37]/30 rounded-full
                               px-4 py-2 w-fit bg-[#D4AF37]/5"
                >
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase font-body">
                        Hyderabad's Iconic Juice Since 1986
                    </span>
                </motion.div>

                {/* Main grid — text + card side by side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-2 items-center">

                    {/* LEFT — Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <h1 className="font-display leading-[0.95] tracking-tight mb-6">
                            <span className="block text-white text-5xl md:text-6xl lg:text-7xl font-black">
                                Hyderabad's
                            </span>
                            <span className="block text-white text-5xl md:text-6xl lg:text-7xl font-black">
                                Most Loved
                            </span>
                            <span className="block text-[#D4AF37] text-5xl md:text-6xl lg:text-7xl font-black italic">
                                Juice Centre
                            </span>
                            <span className="block text-[#D4AF37]/70 text-4xl md:text-5xl lg:text-6xl font-black">
                                Since 1986
                            </span>
                        </h1>

                        <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed mb-8 font-body">
                            Experience the authentic taste of fresh fruit creations
                            at Nice Juice Centre. Serving signature malai desserts,
                            premium milkshakes, and fresh juices for over 39 years.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mb-10">
                            <Link href="/menu"
                                className="px-8 py-4 rounded-full font-bold
                                           text-black text-sm tracking-wide
                                           bg-[#D4AF37] hover:bg-[#B8960C]
                                           transition-all duration-200 shadow-lg shadow-[#D4AF37]/20
                                           hover:-translate-y-0.5 active:translate-y-0">
                                Explore Menu
                            </Link>
                            <Link href="/branches"
                                className="px-8 py-4 rounded-full font-bold
                                           text-[#D4AF37] text-sm tracking-wide
                                           border-2 border-[#D4AF37]/50
                                           hover:border-[#D4AF37] hover:bg-[#D4AF37]/5
                                           transition-all duration-200
                                           hover:-translate-y-0.5 active:translate-y-0">
                                Find Locations
                            </Link>
                        </div>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10"
                        >
                            {[
                                { val: "39+", label: "Years of Heritage" },
                                { val: "100+", label: "Fresh Varieties" },
                                { val: "3", label: "Premium Branches" },
                                { val: "1986", label: "Serving Since" },
                            ].map((s, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-xl md:text-2xl font-black text-[#D4AF37] font-display italic tracking-tight">{s.val}</span>
                                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 font-bold font-body">{s.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* RIGHT — Mulberry Malai Card */}
                    <div className="flex justify-center lg:justify-end mt-0 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-full max-w-[280px] sm:max-w-[320px]
                                           rounded-3xl overflow-hidden
                                           border border-[#D4AF37]/20
                                           shadow-[0_32px_80px_rgba(212,175,55,0.12)]
                                           bg-[#111111]"
                            >
                                {/* Image */}
                                <div className="relative w-full h-[280px]">
                                    <Image
                                        src="/image.png"
                                        alt="Mulberry Malai"
                                        fill
                                        priority
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                                    {/* Must Try badge */}
                                    <div className="absolute top-3 left-3 flex items-center gap-2
                                                    bg-black/70 backdrop-blur-md
                                                    border border-[#D4AF37]/30
                                                    px-3 py-1.5 rounded-full">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                                        <span className="text-[#D4AF37] text-xs font-bold">Must Try</span>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-5">
                                    <h3 className="text-white font-bold text-xl mb-1 font-display">
                                        Mulberry Malai
                                    </h3>
                                    <p className="text-[#D4AF37] text-xs font-bold tracking-wider mb-3">
                                        ⭐ OUR MOST FAMOUS ITEM
                                    </p>
                                    <p className="text-gray-500 text-xs leading-relaxed mb-4 font-body">
                                        Our signature bestseller made with fresh
                                        mulberries and rich premium cream. A unique
                                        dessert loved since 1986.
                                    </p>
                                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                                        <span className="text-[#D4AF37] font-black text-2xl font-display">
                                            ₹120
                                        </span>
                                        <span className="text-xs text-gray-600 border border-gray-800 px-3 py-1 rounded-full">
                                            Since 1986
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
