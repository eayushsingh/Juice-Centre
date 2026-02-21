"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

import { useEffect, useState } from 'react'

const stagger: any = { animate: { transition: { staggerChildren: 0.1 } } }
const fadeUp: any = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
}



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
        <section className="hero-section relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A] py-[60px] md:py-[100px] px-[5%]">
            {/* ── BACKGROUND DECORATION ── */}
            <div className="hero-circle absolute top-[-10%] right-[-10%] w-[60%] h-[70%] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="absolute inset-0 opacity-[0.2] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />



            {/* ── MAIN CONTENT ── */}
            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col gap-6 md:gap-8"
                >
                    {/* Badge */}
                    <motion.div variants={fadeUp}>
                        <span className="hero-badge inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] px-4 py-2 rounded-full text-[10px] md:text-xs font-body font-bold uppercase tracking-wider shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                            </span>
                            Hyderabad's Iconic Juice Since 1986
                        </span>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex flex-col">
                        <h1 className="hero-headline text-[clamp(2.4rem,10vw,8rem)] md:text-8xl lg:text-9xl font-display font-black leading-[1] md:leading-[0.9] text-white tracking-tighter">
                            Hyderabad's Most Loved <br className="hidden md:block" />
                            <span className="text-[#D4AF37]">Juice Centre</span> <br className="hidden md:block" />
                            <span className="text-[#D4AF37]/80">Since 1986</span>
                        </h1>
                    </motion.div>

                    <motion.p variants={fadeUp} className="hero-sub text-base md:text-xl text-slate-300 max-w-lg leading-relaxed font-body">
                        Experience the authentic taste of fresh fruit creations at Nice Juice Centre.
                        Serving signature malai desserts, premium milkshakes, and fresh juices
                        for over 39 years. Loved by generations since 1986.
                    </motion.p>

                    <motion.div variants={fadeUp} className="hero-buttons flex flex-col md:flex-row gap-4 pt-4 font-body">
                        <Link href="/menu"
                            className="btn-primary px-8 md:px-10 py-4 md:py-5 bg-[#D4AF37] hover:bg-[#B8960C] text-black rounded-2xl font-bold transition-all shadow-xl shadow-[#D4AF37]/10 hover:shadow-[#D4AF37]/20 hover:-translate-y-1 active:translate-y-0 text-center w-full md:w-auto min-w-[180px] min-h-[44px] flex items-center justify-center"
                        >
                            Explore Menu
                        </Link>
                        <Link href="/branches"
                            className="btn-secondary px-8 md:px-10 py-4 md:py-5 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] rounded-2xl font-bold transition-all hover:bg-[#D4AF37]/5 hover:-translate-y-1 active:translate-y-0 text-center w-full md:w-auto min-w-[180px] min-h-[44px] flex items-center justify-center"
                        >
                            Find Locations
                        </Link>
                    </motion.div>

                    {/* Fruit visuals — Scroll row on mobile, hidden on desktop */}
                    <motion.div variants={fadeUp} className="hero-visuals md:hidden">
                        <div className="fruit-card">
                            🍊 Fresh Orange <span className="text-[#D4AF37]">100% Cold Pressed</span>
                        </div>
                        <div className="fruit-card">
                            🍋 Lime Mint <span className="text-[#D4AF37]">Best Seller</span>
                        </div>
                        <div className="fruit-card">
                            🥭 Alphonso Mango <span className="text-[#D4AF37]">Seasonal Special</span>
                        </div>
                        <div className="card-badge bg-[#D4AF37] text-black">
                            100% Natural & Fresh
                        </div>
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div
                        variants={fadeUp}
                        className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10"
                    >
                        {[
                            { val: "39+", label: "Years of Heritage" },
                            { val: "100+", label: "Fresh Varieties" },
                            { val: "3", label: "Premium Branches" },
                            { val: "1986", label: "Serving Hyderabad Since" }
                        ].map((s, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="stat-num text-xl md:text-2xl font-black text-[#D4AF37] font-display italic tracking-tight">{s.val}</span>
                                <span className="stat-label text-[10px] md:text-xs uppercase tracking-widest text-slate-400 font-bold font-body">{s.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* ── FRUIT DECORATIONS — visible on ALL screens ── */}
                    <motion.div
                        variants={fadeUp}
                        className="flex justify-center items-center gap-3 flex-wrap mt-6 mb-4"
                    >
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                            className="relative w-16 h-16 md:w-20 md:h-20
                                       rounded-2xl overflow-hidden flex-shrink-0
                                       border-2 border-[#D4AF37]/40
                                       shadow-[0_8px_24px_rgba(212,175,55,0.2)]
                                       rotate-[-6deg]"
                        >
                            <Image src="/f1.png" alt="Fruit" fill className="object-cover" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="relative w-14 h-14 md:w-16 md:h-16
                                       rounded-2xl overflow-hidden flex-shrink-0
                                       border-2 border-[#D4AF37]/40
                                       shadow-[0_8px_24px_rgba(212,175,55,0.2)]
                                       rotate-[4deg]"
                        >
                            <Image src="/f3.png" alt="Fruit" fill className="object-cover" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="relative w-16 h-16 md:w-20 md:h-20
                                       rounded-2xl overflow-hidden flex-shrink-0
                                       border-2 border-[#D4AF37]/40
                                       shadow-[0_8px_24px_rgba(212,175,55,0.2)]
                                       rotate-[-3deg]"
                        >
                            <Image src="/f5.png" alt="Fruit" fill className="object-cover" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -9, 0] }}
                            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="relative w-14 h-14 md:w-16 md:h-16
                                       rounded-2xl overflow-hidden flex-shrink-0
                                       border-2 border-[#D4AF37]/40
                                       shadow-[0_8px_24px_rgba(212,175,55,0.2)]
                                       rotate-[5deg]"
                        >
                            <Image src="/f2.png" alt="Fruit" fill className="object-cover" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="relative w-16 h-16 md:w-20 md:h-20
                                       rounded-2xl overflow-hidden flex-shrink-0
                                       border-2 border-[#D4AF37]/40
                                       shadow-[0_8px_24px_rgba(212,175,55,0.2)]
                                       rotate-[-4deg]"
                        >
                            <Image src="/f6.png" alt="Fruit" fill className="object-cover" />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* RIGHT — Mulberry Malai Card — visible on ALL screens */}
                <div className="w-full lg:w-auto flex-shrink-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full max-w-[280px] mx-auto lg:mx-0
                                       rounded-3xl overflow-hidden
                                       border border-[#D4AF37]/30
                                       shadow-[0_20px_60px_rgba(212,175,55,0.15)]
                                       bg-[#111111]"
                        >
                            {/* Photo */}
                            <div className="relative w-full h-[220px] sm:h-[260px]">
                                <Image
                                    src="/image.png"
                                    alt="Mulberry Malai"
                                    fill
                                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                                {/* Gold gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

                                {/* Must Try badge */}
                                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold px-3 py-1.5 rounded-full">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                                    Must Try
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-4">
                                <h3 className="text-white font-display font-bold text-lg mb-1">
                                    Mulberry Malai
                                </h3>
                                <p className="text-[#D4AF37] text-xs font-bold tracking-wider mb-2">
                                    ⭐ OUR MOST FAMOUS ITEM
                                </p>
                                <p className="text-gray-400 text-xs leading-relaxed mb-3">
                                    Our signature bestseller made with fresh mulberries and rich premium cream.
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-[#D4AF37] font-display font-black text-xl">
                                        ₹120
                                    </span>
                                    <span className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded-full">
                                        Since 1986
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>

    )
}
