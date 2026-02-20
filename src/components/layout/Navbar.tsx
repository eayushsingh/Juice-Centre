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
        <nav className="fixed top-0 left-0 right-0 h-20 bg-[#FFFDF8] z-50 px-6 md:px-10" />
    )

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 ${scrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-orange-100"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
                {/* LEFT — Logo */}
                <Link href="/" className="flex-shrink-0">
                    <img
                        src="/logo.png"
                        alt="Nice Juice Centre"
                        style={{
                            height: '72px',
                            width: 'auto',
                            objectFit: 'contain',
                            mixBlendMode: 'multiply',
                            WebkitMixBlendMode: 'multiply',
                            background: 'transparent',
                            display: 'block',
                            transition: 'transform 0.25s ease',
                        } as any}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                </Link>

                {/* CENTER — Nav links (desktop only) */}
                <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-sm p-1 rounded-full border border-orange-50/50 shadow-sm font-body">
                    {links.map((l) => {
                        const isActive = pathname === l.href
                        return (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${isActive
                                    ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                                    : "text-slate-600 hover:text-orange-500 hover:bg-orange-50/50"
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
                        className="md:hidden relative z-[60] p-2 text-3xl text-slate-800 transition-colors active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
                        className="fixed inset-0 z-50 bg-white"
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
                                            className={`block text-[clamp(1.5rem,5vw,2rem)] font-display font-bold py-4 border-b border-slate-50 transition-colors ${pathname === l.href
                                                ? "text-orange-500"
                                                : "text-slate-800 active:text-orange-500"
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
