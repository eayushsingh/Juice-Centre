"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function OurStory() {
    return (
        <section className="relative py-[60px] md:py-[100px] px-[5%] bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left side — Store Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: -0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl"
                            style={{ minHeight: '480px' }}
                        >
                            {/* Main store image */}
                            <Image
                                src="/image copy.png"
                                alt="Nice Juice Centre Store"
                                fill
                                className="object-cover object-top"
                                priority
                            />

                            {/* Gradient overlay for premium feel */}
                            <div className="absolute inset-0 bg-gradient-to-t
                                            from-black/40 via-transparent to-transparent" />

                            {/* Legacy of Trust badge — keep exactly as is */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2
                                            bg-[#111111] border border-[#D4AF37]/20 rounded-2xl shadow-xl
                                            px-6 py-4 text-center w-[200px]">
                                <div className="text-2xl mb-1">🏆</div>
                                <div className="font-display font-bold text-white text-base">
                                    Legacy of Trust
                                </div>
                                <div className="text-xs text-[#A0A0A0] mt-1 leading-snug">
                                    Serving pure joy for over three decades in the heart of Hyderabad.
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6 md:gap-8 order-1 lg:order-2"
                    >
                        <div>
                            <span className="text-[#D4AF37] font-bold tracking-[.3em] uppercase text-[10px] md:text-xs mb-3 md:mb-4 block font-body">Our Story</span>
                            <h2 className="text-[clamp(2.5rem,8vw,5rem)] md:text-6xl font-display font-extrabold text-white leading-[1.1] tracking-tight">
                                A Tradition of <br />
                                <span className="text-[#D4AF37]">Unmatched Quality.</span>
                            </h2>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-6 text-slate-400 font-body text-base md:text-lg leading-relaxed">
                            <p>
                                Established in <span className="font-black text-white font-display underline decoration-[#D4AF37]/30 decoration-4 underline-offset-4">1986</span>, Nice Juice Centre is one of Hyderabad's most iconic juice destinations.
                            </p>
                            <p>
                                Known for its signature Mulberry Malai and premium fruit creations, the brand has been serving freshness and quality for nearly four decades. With multiple branches across the city, Nice Juice Centre continues to be a favorite among juice lovers.
                            </p>
                        </div>

                        {/* Legacy cards: 2x2 grid on mobile */}
                        <div className="grid grid-cols-2 gap-4 md:gap-8 pt-4">
                            <div className="flex flex-col gap-2 p-4 md:p-6 bg-[#111111] border border-white/5 rounded-[30px] shadow-sm transition-transform hover:-translate-y-1">
                                <span className="text-2xl md:text-3xl">🌿</span>
                                <h4 className="font-extrabold font-display text-white text-sm md:text-base">100% Natural</h4>
                                <p className="text-[10px] md:text-xs text-[#A0A0A0] font-body leading-tight">Handpicked premium fruits from the best orchards across India.</p>
                            </div>
                            <div className="flex flex-col gap-2 p-4 md:p-6 bg-[#111111] border border-white/5 rounded-[30px] shadow-sm transition-transform hover:-translate-y-1">
                                <span className="text-2xl md:text-3xl">✨</span>
                                <h4 className="font-extrabold font-display text-white text-sm md:text-base">Old School Love</h4>
                                <p className="text-[10px] md:text-xs text-[#A0A0A0] font-body leading-tight">Traditional recipes passed down through three generations.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
