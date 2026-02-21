"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/branches", label: "Branches" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
]

export default function Navbar() {
    const [mounted, setMounted] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setMounted(true)
        const fn = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", fn, { passive: true })
        return () => window.removeEventListener("scroll", fn)
    }, [])

    if (!mounted) return (
        <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '80px', background: '#0A0A0A', zIndex: 50 }} />
    )

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                background: 'rgba(10, 10, 10, 0.97)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: 'none',
                borderBottom: 'none',
                boxShadow: scrolled ? '0 1px 40px rgba(0,0,0,0.4)' : 'none',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 32px',
            }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
                {/* LEFT — Logo */}
                <Link href="/" style={{ flexShrink: 0 }}>
                    <img
                        src="/logo-gold.png"
                        alt="Nice Juice Centre"
                        style={{
                            width: '160px',
                            height: 'auto',
                            display: 'block',
                            minWidth: '160px',
                        }}
                    />
                </Link>

                {/* CENTER — Nav links (desktop only) */}
                <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-sm p-1 rounded-full border border-white/10 shadow-sm font-body">
                    {links.map((l) => {
                        const isActive = pathname === l.href
                        return (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${isActive
                                    ? "bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20"
                                    : "text-white/80 hover:text-[#D4AF37] hover:bg-white/5"
                                    }`}
                            >
                                {l.label}
                            </Link>
                        )
                    })}
                </div>

                {/* RIGHT — Order Now button + hamburger */}
                <div className="flex items-center gap-3">
                    <a
                        href="tel:+918639271639"
                        className="hidden md:flex group items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-body font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-green-100/50 hover:shadow-green-200/50 hover:-translate-y-0.5 min-h-[44px]"
                    >
                        <span>📞 Order Now</span>
                    </a>
                    <button
                        className="md:hidden relative z-[60] p-2 text-3xl text-white transition-colors active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Close menu" : "Open menu"}
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* MOBILE DRAWER */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-50 bg-[#0A0A0A]"
                    >
                        <div className="flex flex-col h-full pt-32 pb-12 px-[8%]">
                            <div className="flex flex-col gap-4 flex-1">
                                {links.map((l, i) => (
                                    <motion.div
                                        key={l.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={l.href}
                                            onClick={() => setOpen(false)}
                                            className={`block text-[clamp(1.5rem,5vw,2rem)] font-display font-bold py-4 border-b border-white/5 transition-colors ${pathname === l.href
                                                ? "text-[#D4AF37]"
                                                : "text-white active:text-[#D4AF37]"
                                                }`}
                                        >
                                            {l.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: links.length * 0.1 }}
                            >
                                <a
                                    href="tel:+918639271639"
                                    className="flex items-center justify-center gap-3 bg-green-600 text-white font-body font-bold py-5 rounded-3xl text-xl shadow-xl shadow-green-100 min-h-[56px] w-full"
                                >
                                    <span>📞</span> Order Now
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
