import Image from "next/image"
import Link from "next/link"

const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/branches", label: "Branches" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
]

export default function Footer() {
    return (
        <footer className="bg-[#050505] text-white py-[60px] md:py-[100px] px-[5%] border-t border-[#D4AF37]/20 font-body">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-20">

                    {/* Brand Info */}
                    <div className="space-y-6 md:space-y-8">
                        <Link href="/" className="inline-block transition-transform duration-300 hover:scale-[1.04]">
                            <div className="relative h-[44px] md:h-[56px] w-[140px] md:w-[180px]">
                                <Image
                                    src="/logo.png"
                                    alt="Nice Juice Centre"
                                    fill
                                    className="object-contain filter brightness-0 invert"
                                />
                            </div>
                        </Link>
                        <p className="text-[#A0A0A0] text-sm md:text-base leading-relaxed max-w-xs">
                            Serving purist-approved, fresh juices and authentic fruit delights to the heart of Hyderabad since 1986.
                        </p>
                        <div className="flex items-center gap-4">
                            {['fb', 'ig', 'tw'].map(s => (
                                <div key={s} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] group cursor-pointer transition-all active:scale-90 shadow-lg">
                                    <div className="w-4 h-4 bg-white/20 rounded-sm group-hover:bg-black/40 transition-colors"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display text-white text-lg md:text-xl font-bold mb-6 md:mb-8">Navigation</h4>
                        <ul className="space-y-3 md:space-y-4">
                            {links.map(l => (
                                <li key={l.href}>
                                    <Link href={l.href} className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors text-sm md:text-base font-bold block group py-1">
                                        <span className="inline-block transition-transform group-hover:translate-x-1">{l.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="font-display text-white text-lg md:text-xl font-bold mb-6 md:mb-8">Get in Touch</h4>
                        <div className="space-y-6 md:space-y-8">
                            <div className="group">
                                <p className="text-[#D4AF37] font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2">Secunderabad</p>
                                <a href="tel:+918639271639" className="text-slate-200 font-bold text-sm md:text-base block hover:text-[#D4AF37] transition-colors min-h-[44px] flex items-center">
                                    +91 86392 71639
                                </a>
                            </div>
                            <div className="group">
                                <p className="text-[#D4AF37] font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2">Bandlaguda</p>
                                <a href="tel:+919533133316" className="text-slate-200 font-bold text-sm md:text-base block hover:text-[#D4AF37] transition-colors min-h-[44px] flex items-center">
                                    +91 95331 33316
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Proof */}
                    <div>
                        <h4 className="font-display text-white text-lg md:text-xl font-bold mb-6 md:mb-8">Opening Hours</h4>
                        <div className="p-6 bg-white/5 rounded-[30px] border border-white/10 space-y-4 backdrop-blur-sm">
                            <div className="flex justify-between items-center pb-3 border-b border-white/10">
                                <span className="text-[#A0A0A0] text-[10px] md:text-xs font-bold font-body">MON–SUN</span>
                                <span className="text-[#D4AF37] font-bold text-[10px] md:text-xs font-body uppercase">Open Now</span>
                            </div>
                            <p className="text-white font-bold text-lg md:text-xl font-display">9:00 AM – 11:30 PM</p>
                            <p className="text-[#A0A0A0]/60 text-[9px] md:text-[10px] font-bold uppercase tracking-wider">Seasonally adjusted hours</p>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <p className="text-[#A0A0A0]/60 text-[10px] md:text-xs font-bold flex items-center gap-2">
                        © 2026 Nice Juice Centre <span className="w-1 h-1 rounded-full bg-slate-700"></span> <span>All Rights Reserved</span>
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-[#A0A0A0]/60 text-[10px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            Made with <span className="animate-pulse">❤️</span> for Hyderabad
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
