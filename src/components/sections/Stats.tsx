"use client"
import { motion } from "framer-motion"

const stats = [
    { icon: '🏆', number: '39+', label: 'Years of Heritage', color: 'bg-[#D4AF37]/10', text: 'text-[#D4AF37]' },
    { icon: '🥤', number: '100+', label: 'Fresh Varieties', color: 'bg-green-500/10', text: 'text-green-500' },
    { icon: '📍', number: '3', label: 'Premium Branches', color: 'bg-[#D4AF37]/10', text: 'text-[#D4AF37]' },
    { icon: '❤️', number: '39+', label: 'Years Serving Hyderabad', color: 'bg-green-500/10', text: 'text-green-500' },
]

export default function Stats() {
    return (
        <section className="relative py-[60px] md:py-[100px] px-[5%] bg-[#0A0A0A] overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 overflow-hidden">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className={`p-10 md:p-8 rounded-[40px] border border-white/5 bg-[#111111] shadow-xl shadow-black flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/10 hover:-translate-y-2 group`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner transition-transform group-hover:scale-110`}>
                                {stat.icon}
                            </div>
                            <span className={`text-[clamp(2.5rem,8vw,3.5rem)] md:text-5xl font-display font-black ${stat.text} mb-2 leading-none tracking-tight`}>
                                {stat.number}
                            </span>
                            <span className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest font-body whitespace-nowrap">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
