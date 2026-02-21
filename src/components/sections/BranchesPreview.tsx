"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { branches } from "@/data/branches"

export default function BranchesPreview() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div style={{ minHeight: '600px', background: '#0A0A0A' }} />
        )
    }
    return (
        <section className="relative py-[80px] md:py-[120px] px-[5%] bg-[#0A0A0A] overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-white/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* ── SECTION HEADER ── */}
                <div className="text-center mb-16">
                    <div className="inline-block text-xs font-bold tracking-widest uppercase text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-4 py-2 rounded-full mb-4 font-body">
                        📍 Find Us In Hyderabad
                    </div>
                    <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-4 tracking-tight">
                        Visit Our <span className="text-[#D4AF37]">Juice Centres</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto font-body">
                        3 locations across Hyderabad — fresh juice always around the corner since 1986.
                    </p>

                    {/* Stats bar */}
                    <div className="flex justify-center gap-12 mt-8 pt-8 border-t border-white/10 font-body">
                        <div>
                            <div className="font-display font-black text-3xl text-[#D4AF37]">3</div>
                            <div className="text-xs font-bold tracking-widest uppercase text-slate-500 mt-1">Locations</div>
                        </div>
                        <div>
                            <div className="font-display font-black text-3xl text-[#D4AF37]">39+</div>
                            <div className="text-xs font-bold tracking-widest uppercase text-slate-500 mt-1">Years</div>
                        </div>
                        <div>
                            <div className="font-display font-black text-3xl text-[#D4AF37]">39+</div>
                            <div className="text-xs font-bold tracking-widest uppercase text-slate-500 mt-1">Years Serving Hyderabad</div>
                        </div>
                    </div>
                </div>

                {/* ── BRANCHES GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {branches.map((branch, i) => (
                        <motion.div
                            key={branch.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`branch-card group relative rounded-3xl overflow-hidden bg-[#111111] border border-white/5 shadow-xl shadow-black transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/10 hover:-translate-y-3 flex flex-col ${branch.highlight ? 'md:scale-105 z-10' : ''}`}
                        >
                            {/* Photo area with overlay */}
                            <div className="relative h-56 overflow-hidden rounded-t-3xl bg-[#111111]">
                                <Image
                                    src={branch.image}
                                    alt={branch.name}
                                    fill
                                    style={{ objectPosition: branch.imagePosition || 'center center' }}
                                    className="object-cover 
                                               hover:scale-105 transition-transform duration-500"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                                {/* Dark gradient at bottom of image */}
                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />

                                {/* Badge top-left */}
                                <div
                                    className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm font-body"
                                    style={{ background: branch.badgeColor }}
                                >
                                    {branch.badge}
                                </div>

                                {/* Open/Close status top-right */}
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-green-600 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm font-body">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    Open Now
                                </div>
                            </div>

                            {/* Card body */}
                            <div className="p-6 bg-[#111111] border-t-4 border-[#D4AF37] flex flex-col flex-1">
                                {/* Tag */}
                                <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#D4AF37] mb-2 font-body">
                                    {branch.tag}
                                </div>

                                {/* Branch Name — make it bold, dark, large, unmissable */}
                                <h3 className="font-display font-black text-white text-lg md:text-xl mb-4 leading-tight border-b border-white/5 pb-4 whitespace-nowrap overflow-hidden text-ellipsis">
                                    {branch.name}
                                </h3>

                                {/* Address */}
                                <div className="flex gap-2 mb-3">
                                    <span className="text-[#D4AF37]/60 mt-0.5 flex-shrink-0">📍</span>
                                    <p className="text-sm text-slate-400 leading-relaxed font-body">{branch.address}</p>
                                </div>

                                {/* Specialty highlight box */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-3 mb-4">
                                    <div className="text-[0.68rem] font-bold tracking-wider uppercase text-[#D4AF37] mb-1 font-body">
                                        ✨ Known For
                                    </div>
                                    <p className="text-sm text-slate-200 font-medium leading-snug font-body">
                                        {branch.specialty}
                                    </p>
                                </div>

                                {/* Hours */}
                                <div className="flex items-center gap-2 text-sm font-semibold text-green-500 mb-5 font-body">
                                    <span>🕐</span> {branch.hours}
                                </div>

                                {/* Action buttons */}
                                <div className="flex gap-3 mt-auto">
                                    <a
                                        href={branch.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-[#D4AF37] hover:bg-[#B8960C] text-black text-sm font-bold py-3 px-4 rounded-2xl text-center transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D4AF37]/20 font-body"
                                    >
                                        📍 Get Directions
                                    </a>
                                    <a
                                        href={`tel:${branch.phone.replace(/\s/g, '')}`}
                                        className="bg-white/5 hover:bg-white/10 text-white text-sm font-bold py-3 px-4 rounded-2xl transition-all border border-white/10 font-body"
                                    >
                                        📞 Call
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 md:mt-24 flex justify-center w-full">
                    <Link
                        href="/branches"
                        className="group relative flex items-center justify-center gap-4 bg-[#111111] overflow-hidden text-white px-10 md:px-12 py-5 md:py-6 rounded-[24px] font-body font-black text-lg transition-all shadow-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:-translate-y-2 w-full md:w-auto min-h-[64px]"
                    >
                        <span className="relative z-10">View Full Details & Maps</span>
                        <span className="relative z-10 text-2xl group-hover:translate-x-2 transition-transform">📍</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
