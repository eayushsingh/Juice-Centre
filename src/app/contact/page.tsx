"use client"
import CTABanner from "@/components/sections/CTABanner"

const metadata = {
    title: 'Contact Us | Nice Juice Centre',
    description: 'Get in touch with Nice Juice Centre for orders, inquiries, and feedback.',
}

export default function ContactPage() {
    return (
        <main className="pt-24 min-h-screen bg-[#050505]">
            <section className="py-[60px] md:py-[80px] text-center px-[5%]">
                <h1 className="text-4xl md:text-6xl text-white mb-6 font-display font-black tracking-tight">
                    Get in <span className="text-[#D4AF37]">Touch</span>
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto font-body">
                    Have a question or want to place a bulk order? We're just a call away.
                </p>
            </section>

            <div className="max-w-7xl mx-auto px-[5%] pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#111111] p-8 md:p-12 rounded-[40px] shadow-xl shadow-black border border-[#D4AF37]/20">
                        <h2 className="text-2xl md:text-3xl font-display font-black mb-8">Contact Information</h2>

                        <div className="space-y-10">
                            <div>
                                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-2xl">📞</span> Phone Numbers
                                </h3>
                                <div className="space-y-6 ml-9">
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">MG Road, Secunderabad</p>
                                        <a href="tel:+918639271639" className="text-xl text-[#D4AF37] font-bold hover:underline">+91 86392 71639</a>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Tolichowki, Hyderabad</p>
                                        <a href="tel:+919346036222" className="text-xl text-[#D4AF37] font-bold hover:underline">+91 93460 36222</a>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Bandlaguda, Hyderabad</p>
                                        <a href="tel:+919398588286" className="text-xl text-[#D4AF37] font-bold hover:underline">+91 93985 88286</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📧</span>
                                <div className="ml-1">
                                    <h3 className="font-bold text-white">Email</h3>
                                    <p className="text-slate-400 text-sm mt-1">
                                        Not publicly available. Please contact branch directly.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-2xl">🕐</span>
                                <div className="ml-1">
                                    <h3 className="font-bold text-white">Business Hours</h3>
                                    <p className="text-slate-400 text-sm mt-1">
                                        9:00 AM – Late Night (varies by branch)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#D4AF37] p-8 md:p-12 rounded-[40px] text-black overflow-hidden relative shadow-2xl shadow-[#D4AF37]/20">
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-display font-black mb-6">Visit Our Stores</h2>
                            <p className="opacity-90 mb-8 font-body">
                                Come experience the freshness in person at any of our three prime locations in Hyderabad.
                            </p>
                            <a
                                href="/branches"
                                className="inline-flex items-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-2xl hover:bg-black/80 transition-all shadow-lg"
                            >
                                📍 View All Locations
                            </a>
                        </div>
                        <span className="absolute bottom-[-20%] right-[-10%] text-[200px] opacity-10 rotate-12 pointer-events-none">🍊</span>
                    </div>
                </div>
            </div>

            <CTABanner />
        </main>
    )
}
