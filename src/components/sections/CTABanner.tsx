"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CTABanner() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div style={{ height: '300px', background: '#0A0A0A' }} />
        )
    }
    return (
        <section className="relative py-[60px] md:py-[100px] px-[5%] bg-[#0A0A0A] overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto relative rounded-[40px] md:rounded-[60px] p-8 md:p-20 overflow-hidden border border-[#D4AF37]/20"
                style={{ background: "linear-gradient(135deg, #111111 0%, #0A0A0A 100%)" }}
            >
                {/* Abstract shapes */}
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] bg-white/10 rounded-full blur-[80px] rotate-12 pointer-events-none" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[120%] bg-black/5 rounded-full blur-[60px] pointer-events-none" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 text-center lg:text-left">
                    <div className="max-w-2xl">
                        <h2 className="text-[clamp(2.2rem,8vw,5rem)] md:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                            Craving Something <span className="underline decoration-white/30 underline-offset-8">Fresh?</span>
                        </h2>
                        <p className="text-white/80 text-base md:text-xl font-body leading-relaxed">
                            Experience the magic of authentic, premium fruit juices delivered fresh to your heart. Visit us or order now for a taste of pure nature!
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto font-body">
                        <a
                            href="tel:+918639271639"
                            className="w-full lg:w-auto px-10 py-4 md:py-5 bg-[#D4AF37] text-black rounded-3xl font-bold text-base md:text-lg transition-all shadow-2xl hover:bg-[#B8960C] hover:-translate-y-1 active:translate-y-0 text-center min-h-[56px] flex items-center justify-center"
                        >
                            📞 Call Now
                        </a>
                        <a
                            href="https://wa.me/918639271639"
                            className="w-full lg:w-auto px-10 py-4 md:py-5 bg-green-600 border-2 border-green-500/50 text-white rounded-3xl font-bold text-base md:text-lg transition-all shadow-2xl hover:bg-green-700 hover:-translate-y-1 active:translate-y-0 text-center min-h-[56px] flex items-center justify-center"
                        >
                            💬 WhatsApp
                        </a>
                    </div>
                </div>

                {/* Floating fruit emojis */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-10 text-6xl hidden lg:block opacity-40 pointer-events-none"
                >
                    🍊
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-10 text-6xl hidden lg:block opacity-40 pointer-events-none"
                >
                    🥬
                </motion.div>
            </motion.div>
        </section>
    )
}
