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

const fruits = [
    { emoji: "🍊", top: "15%", left: "10%", size: "3rem", delay: 0.2, rotate: -15 },
    { emoji: "🥭", top: "65%", left: "5%", size: "4rem", delay: 0.4, rotate: 10 },
    { emoji: "🍋", top: "25%", right: "8%", size: "3.5rem", delay: 0.6, rotate: -10 },
    { emoji: "🍓", top: "70%", right: "12%", size: "2.5rem", delay: 0.8, rotate: 20 },
    { emoji: "🥝", top: "10%", right: "20%", size: "2.8rem", delay: 0.5, rotate: 15 },
]

export default function Hero() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div style={{ minHeight: '100vh', background: '#FFFDF8' }} />
        )
    }
    return (
        <section className="hero-section relative min-h-screen flex items-center overflow-hidden bg-[#FFFDF8] py-[60px] md:py-[100px] px-[5%]">
            {/* ── BACKGROUND DECORATION ── */}
            <div className="hero-circle absolute top-[-10%] right-[-10%] w-[60%] h-[70%] bg-orange-100/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] bg-green-50/50 rounded-full blur-[100px] pointer-events-none" />

            <div className="absolute inset-0 opacity-[0.4] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(249,115,22,.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />

            {/* ── FLOATING FRUITS (DESKTOP ONLY) ── */}
            {fruits.map((f, i) => (
                <motion.div
                    key={i}
                    className="absolute pointer-events-none select-none hidden lg:block"
                    style={{ top: f.top, left: f.left, right: f.right, fontSize: f.size }}
                    initial={{ opacity: 0, scale: 0, rotate: f.rotate }}
                    animate={{ opacity: 0.8, scale: 1, rotate: f.rotate }}
                    transition={{ delay: f.delay, duration: 0.8, type: "spring", stiffness: 100 }}
                >
                    <motion.span
                        animate={{
                            y: [0, -15, 0],
                            rotate: [f.rotate - 5, f.rotate + 5, f.rotate - 5]
                        }}
                        transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                        style={{ display: "block" }}
                    >
                        {f.emoji}
                    </motion.span>
                </motion.div>
            ))}

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
                        <span className="hero-badge inline-flex items-center gap-2 bg-orange-100/80 border border-orange-200 text-orange-600 px-4 py-2 rounded-full text-[10px] md:text-xs font-body font-bold uppercase tracking-wider shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                            </span>
                            Hyderabad's Iconic Juice Since 1986
                        </span>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex flex-col">
                        <h1 className="hero-headline text-[clamp(2.4rem,10vw,8rem)] md:text-8xl lg:text-9xl font-display font-black leading-[1] md:leading-[0.9] text-slate-900 tracking-tighter">
                            Hyderabad's Most Loved <br className="hidden md:block" />
                            <span className="text-orange-500">Juice Centre</span> <br className="hidden md:block" />
                            <span className="text-green-600">Since 1986</span>
                        </h1>
                    </motion.div>

                    <motion.p variants={fadeUp} className="hero-sub text-base md:text-xl text-slate-600 max-w-lg leading-relaxed font-body">
                        Experience the authentic taste of fresh fruit creations at Nice Juice Centre.
                        Serving signature malai desserts, premium milkshakes, and fresh juices
                        for over 39 years. Loved by generations since 1986.
                    </motion.p>

                    <motion.div variants={fadeUp} className="hero-buttons flex flex-col md:flex-row gap-4 pt-4 font-body">
                        <Link href="/menu"
                            className="btn-primary px-8 md:px-10 py-4 md:py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold transition-all shadow-xl shadow-orange-100 hover:shadow-orange-200 hover:-translate-y-1 active:translate-y-0 text-center w-full md:w-auto min-w-[180px] min-h-[44px] flex items-center justify-center"
                        >
                            Explore Menu
                        </Link>
                        <Link href="/branches"
                            className="btn-secondary px-8 md:px-10 py-4 md:py-5 bg-white border-2 border-slate-100 hover:border-orange-200 text-slate-700 rounded-2xl font-bold transition-all hover:shadow-lg hover:shadow-orange-50/50 hover:-translate-y-1 active:translate-y-0 text-center w-full md:w-auto min-w-[180px] min-h-[44px] flex items-center justify-center"
                        >
                            Find Locations
                        </Link>
                    </motion.div>

                    {/* Fruit visuals — Scroll row on mobile, hidden on desktop */}
                    <motion.div variants={fadeUp} className="hero-visuals md:hidden">
                        <div className="fruit-card">
                            🍊 Fresh Orange <span>100% Cold Pressed</span>
                        </div>
                        <div className="fruit-card">
                            🍋 Lime Mint <span>Best Seller</span>
                        </div>
                        <div className="fruit-card">
                            🥭 Alphonso Mango <span>Seasonal Special</span>
                        </div>
                        <div className="card-badge">
                            100% Natural & Fresh
                        </div>
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div
                        variants={fadeUp}
                        className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-100"
                    >
                        {[
                            { val: "39+", label: "Years of Heritage" },
                            { val: "100+", label: "Fresh Varieties" },
                            { val: "3", label: "Premium Branches" },
                            { val: "1986", label: "Serving Hyderabad Since" }
                        ].map((s, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="stat-num text-xl md:text-2xl font-black text-slate-900 font-display italic tracking-tight">{s.val}</span>
                                <span className="stat-label text-[10px] md:text-xs uppercase tracking-widest text-slate-400 font-bold font-body">{s.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Hero Image Section (Desktop Only Visual) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative hidden md:block"
                >
                    <div className="relative flex items-center justify-center">
                        <div
                            className="relative rounded-3xl overflow-hidden shadow-2xl"
                            style={{
                                background: 'linear-gradient(135deg, #FFF3E0, #FFE0B2)',
                                width: '320px',
                                height: '420px',
                            }}
                        >
                            {/* Product Image */}
                            <div className="relative w-full h-[260px] overflow-hidden">
                                <Image
                                    src="/image.png"
                                    alt="Mulberry Malai"
                                    fill
                                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                            </div>

                            {/* Info Bar */}
                            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm px-5 py-4 flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-display font-bold text-gray-900 text-base">
                                            Mulberry Malai
                                        </div>
                                        <div className="text-[10px] text-orange-400 font-bold uppercase tracking-wider">
                                            Our Most Famous Item ⭐
                                        </div>
                                    </div>
                                    <div className="bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg shadow-orange-200">
                                        ₹120
                                    </div>
                                </div>
                                <p className="text-[10px] text-gray-500 leading-relaxed font-body">
                                    Our signature bestseller made with fresh mulberries and rich premium cream. A unique dessert loved by customers since 1986.
                                </p>
                            </div>

                            {/* Top Badge */}
                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-orange-500 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                                Must Try
                            </div>
                        </div>

                        {/* Floating fruit cards — hide on mobile, show desktop */}
                        <div className="hidden lg:block absolute right-[-60px] top-1/2 -translate-y-1/2 z-20">
                            {/* Fruit card 1 */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity }}
                                className="relative w-32 h-32 md:w-36 md:h-36 rounded-3xl overflow-hidden shadow-2xl mb-6 border-4 border-white"
                            >
                                <Image src="/f1.png" alt="Fresh Juice" fill className="object-cover" />
                            </motion.div>

                            {/* Fruit card 2 */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                                className="relative w-28 h-28 md:w-32 md:h-32 rounded-3xl overflow-hidden shadow-2xl ml-8 border-4 border-white"
                            >
                                <Image src="/f2.png" alt="Mulberry" fill className="object-cover" />
                            </motion.div>

                            {/* Fruit card 3 */}
                            <motion.div
                                animate={{ y: [0, -18, 0] }}
                                transition={{ duration: 3.8, repeat: Infinity, delay: 1 }}
                                className="relative w-32 h-32 md:w-36 md:h-36 rounded-3xl overflow-hidden shadow-2xl mt-4 border-4 border-white"
                            >
                                <Image src="/f3.png" alt="Mango" fill className="object-cover" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
