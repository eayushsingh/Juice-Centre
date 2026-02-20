import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { menuItems, menuCategories, MenuCategory } from "@/data/menu"

const categoryConfig: Record<string, { emoji: string; color: string; bg: string }> = {
    "Everything": { emoji: "🌟", color: "#FF6B00", bg: "#FFF3E8" },
    "Fresh Fruit Juices": { emoji: "🍊", color: "#F97316", bg: "#FFF7ED" },
    "Milkshakes": { emoji: "🥛", color: "#EA580C", bg: "#FFF7ED" },
    "Signature Malai Desserts": { emoji: "🍓", color: "#DB2777", bg: "#FDF2F8" },
    "Fruit Cream Specials": { emoji: "🍇", color: "#8B5CF6", bg: "#F5F3FF" },
    "Seasonal Specials": { emoji: "🥭", color: "#F59E0B", bg: "#FFFBEB" },
    "Dry Fruit Cream": { emoji: "✨", color: "#CA8A04", bg: "#FEFCE8" },
    "Dry Fruit Shakes": { emoji: "🌰", color: "#92400E", bg: "#FEF3C7" },
    "Mocktails": { emoji: "🍹", color: "#0891B2", bg: "#ECFEFF" },
    "Nice Spl": { emoji: "⭐", color: "#F97316", bg: "#FFF7ED" },
    "Lassi": { emoji: "🥛", color: "#F97316", bg: "#FFF7ED" },
    "Chat": { emoji: "🍿", color: "#C2410C", bg: "#FFF7ED" },
    "Grill Sandwich": { emoji: "🥪", color: "#92400E", bg: "#FEF3C7" },
    "Shawarma": { emoji: "🌯", color: "#16A34A", bg: "#F0FDF4" },
}

const isNonVeg = (name: string, category: string) =>
    name.toLowerCase().includes("chicken") ||
    category === "Shawarma" ||
    name.toLowerCase().includes("arabian")

export default function MenuPage() {
    const [mounted, setMounted] = useState(false)
    const [active, setActive] = useState<"All" | MenuCategory>("All")
    const [priceRange, setPriceRange] = useState<'all' | 'under50' | '50-80' | '80-100' | 'above100'>('all')
    const [sortBy, setSortBy] = useState<'default' | 'low-high' | 'high-low' | 'az'>('default')

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div style={{ minHeight: '100vh', background: '#FFFDF8' }} />
        )
    }

    const priceFilters = [
        { id: 'all', label: 'All Prices' },
        { id: 'under50', label: 'Under ₹50' },
        { id: '50-80', label: '₹50–₹80' },
        { id: '80-100', label: '₹80–₹100' },
        { id: 'above100', label: 'Above ₹100' },
    ]

    const checkPrice = (price: number | null) => {
        if (priceRange === 'all') return true;
        if (price === null) return false;
        if (priceRange === 'under50') return price < 50;
        if (priceRange === '50-80') return price >= 50 && price <= 80;
        if (priceRange === '80-100') return price > 80 && price <= 100;
        if (priceRange === 'above100') return price > 100;
        return true;
    };

    const filteredItems = menuItems.filter(item => {
        const categoryMatch = active === "All" || item.category === active;
        const priceMatch = checkPrice(item.price);
        return categoryMatch && priceMatch;
    });

    const sortedItems = [...filteredItems].sort((a, b) => {
        if (sortBy === 'low-high') return (a.price ?? 0) - (b.price ?? 0);
        if (sortBy === 'high-low') return (b.price ?? 0) - (a.price ?? 0);
        if (sortBy === 'az') return a.name.localeCompare(b.name);
        return 0;
    });

    const categoriesToShow = active === "All" ? menuCategories : [active as MenuCategory]
    const visibleCategories = categoriesToShow.filter(cat =>
        sortedItems.some(item => item.category === cat)
    );

    return (
        <main className="min-h-screen bg-[#FFFDF8] pt-24 relative">
            {/* ── PAGE HERO ── */}
            <section className="relative py-[60px] md:py-[80px] text-center overflow-hidden px-[5%]">
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.05) 0%, transparent 65%)" }} />

                <div className="relative max-w-7xl mx-auto">
                    {/* ── LEFT FLOATING PHOTOS ── */}
                    <div className="hidden xl:block absolute left-0 top-0 pointer-events-none z-10 w-64 h-full">
                        {/* Top photo — closest to heading */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                            className="relative w-40 h-40 rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(249,115,22,0.22)] border-[5px] border-white rotate-[-8deg] ml-8 mt-4"
                        >
                            <Image src="/f1.png" alt="Nice Juice Centre" fill className="object-cover" />
                        </motion.div>

                        {/* Middle photo */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="relative w-32 h-32 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(249,115,22,0.18)] border-[5px] border-white rotate-[6deg] ml-20 -mt-4"
                        >
                            <Image src="/f3.png" alt="Nice Juice Centre" fill className="object-cover" />
                        </motion.div>

                        {/* Bottom photo */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="relative w-36 h-36 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(249,115,22,0.18)] border-[5px] border-white rotate-[-5deg] ml-4 mt-3"
                        >
                            <Image src="/f5.png" alt="Nice Juice Centre" fill className="object-cover" />
                        </motion.div>
                    </div>

                    {/* ── RIGHT FLOATING PHOTOS ── */}
                    <div className="hidden xl:block absolute right-0 top-0 pointer-events-none z-10 w-64 h-full">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="relative w-40 h-40 rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(249,115,22,0.22)] border-[5px] border-white rotate-[8deg] mr-8 mt-4"
                        >
                            <Image src="/f2.png" alt="Nice Juice Centre" fill className="object-cover" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="relative w-32 h-32 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(249,115,22,0.18)] border-[5px] border-white rotate-[-6deg] mr-20 -mt-4"
                        >
                            <Image src="/f4.png" alt="Nice Juice Centre" fill className="object-cover" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                            className="relative w-36 h-36 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(249,115,22,0.18)] border-[5px] border-white rotate-[5deg] mr-4 mt-3"
                        >
                            <Image src="/f6.png" alt="Nice Juice Centre" fill className="object-cover" />
                        </motion.div>
                    </div>

                    <motion.div
                        className="relative z-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 px-6 py-2.5 rounded-full shadow-sm font-body">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                            Vibrant & Authentic Flavors
                        </span>
                        <h1 className="text-[clamp(3.5rem,12vw,8rem)] md:text-8xl text-slate-900 mb-6 leading-none font-display font-black tracking-tighter">
                            Our <span className="text-orange-500">Menu</span>
                        </h1>
                        <p className="text-slate-500 text-base md:text-lg max-w-sm mx-auto font-body">
                            Discover our curated collection of 115+ fresh varieties made with love.
                        </p>

                        {/* Stats Row */}
                        <div className="flex items-center justify-center gap-8 md:gap-12 mt-12">
                            {[
                                { num: "13", label: "Categories" },
                                { num: "115+", label: "Items" },
                                { num: "₹20", label: "Starts" },
                            ].map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    className="text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                >
                                    <span className="block text-2xl md:text-3xl text-slate-900 font-black font-display tracking-tight">{s.num}</span>
                                    <span className="block text-slate-400 text-[10px] mt-1 uppercase tracking-widest font-bold font-body">{s.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── STICKY TABS & FILTERS ── */}
            <div className="sticky top-[72px] lg:top-[88px] z-40 bg-white/90 backdrop-blur-xl border-b border-orange-100 no-x-scroll">
                <div className="max-w-7xl mx-auto px-[5%]">
                    {/* Categories */}
                    <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide font-body">
                        <button
                            onClick={() => setActive("All")}
                            className={`flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 min-h-[44px] ${active === "All"
                                ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                                : "text-slate-500 hover:text-orange-500 bg-orange-50/50 hover:bg-orange-50"
                                }`}
                        >
                            Everything
                        </button>

                        {menuCategories.map((cat) => {
                            const config = categoryConfig[cat]
                            const isActive = active === cat
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActive(cat)}
                                    className={`flex-shrink-0 flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 min-h-[44px] ${isActive
                                        ? "text-white shadow-lg"
                                        : "text-slate-500 hover:text-orange-600 bg-slate-50/50 hover:bg-orange-50/50"
                                        }`}
                                    style={{
                                        backgroundColor: isActive ? config.color : undefined,
                                        boxShadow: isActive ? `0 8px 16px ${config.color}30` : undefined,
                                    }}
                                >
                                    <span className="text-base">{config.emoji}</span>
                                    {cat}
                                </button>
                            )
                        })}
                    </div>

                    {/* Price Filters & Sort */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-t border-orange-50 font-body">
                        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-1">
                            {priceFilters.map((f) => (
                                <button
                                    key={f.id}
                                    onClick={() => setPriceRange(f.id as any)}
                                    className={`flex-shrink-0 px-4 py-2 rounded-full text-[10px] md:text-xs font-bold transition-all duration-200 border min-h-[44px] ${priceRange === f.id
                                        ? "bg-[#F97316] text-white border-[#F97316] shadow-md shadow-orange-100"
                                        : "bg-white text-[#F97316] border-[#F97316]/30 hover:border-[#F97316]"
                                        }`}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center justify-between md:justify-end gap-6">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                Showing {sortedItems.length} items
                            </span>
                            <div className="flex items-center gap-2">
                                <label className="text-[10px] font-bold text-slate-500 uppercase">Sort:</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as any)}
                                    className="bg-white border border-orange-100 text-slate-700 text-xs font-bold rounded-full pl-4 pr-8 py-2 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer min-h-[36px]"
                                >
                                    <option value="default">Default</option>
                                    <option value="low-high">Price: Low-High</option>
                                    <option value="high-low">Price: High-Low</option>
                                    <option value="az">A–Z</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── MENU CONTENT ── */}
            <div className="max-w-7xl mx-auto px-[5%] py-12 md:py-20">
                <AnimatePresence mode="wait">
                    {visibleCategories.length > 0 ? (
                        <motion.div
                            key={`${active}-${priceRange}-${sortBy}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-20 md:space-y-32"
                        >
                            {visibleCategories.map((category, ci) => {
                                const items = sortedItems.filter(i => i.category === category)
                                const config = categoryConfig[category]

                                return (
                                    <motion.section
                                        key={category}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: ci * 0.05 }}
                                    >
                                        {/* ── CATEGORY HEADER ── */}
                                        <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
                                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-[20px] md:rounded-[24px] flex items-center justify-center text-2xl md:text-3xl flex-shrink-0 shadow-lg"
                                                style={{ backgroundColor: config.bg, border: `1px solid ${config.color}20` }}>
                                                {config.emoji}
                                            </div>
                                            <div className="flex-1">
                                                <h2 className="text-2xl md:text-4xl text-slate-900 leading-none mb-1 md:mb-2 font-display font-extrabold tracking-tight">
                                                    {category}
                                                </h2>
                                                <p className="text-slate-400 text-[10px] md:text-sm font-black font-body uppercase tracking-widest">
                                                    {items.length} artisan choices
                                                </p>
                                            </div>
                                            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-slate-100 to-transparent" />
                                        </div>

                                        {/* ── ITEMS GRID ── */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-0">
                                            {items.map((item) => {
                                                const nonVeg = isNonVeg(item.name, item.category)
                                                return (
                                                    <motion.div
                                                        key={item.id}
                                                        layout
                                                        initial={{ opacity: 0, y: 10 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        className="group flex items-center justify-between py-4 md:py-5 border-b border-slate-100 transition-all duration-300 min-h-[64px]"
                                                    >
                                                        <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0 pr-4 font-body">
                                                            <div className={`flex-shrink-0 w-3.5 h-3.5 md:w-4 md:h-4 rounded-[4px] border-2 flex items-center justify-center ${nonVeg ? "border-red-500" : "border-green-600"
                                                                }`}>
                                                                <div className={`w-1 md:w-1.5 h-1 md:h-1.5 rounded-full ${nonVeg ? "bg-red-500" : "bg-green-600"
                                                                    }`} />
                                                            </div>

                                                            <div className="flex flex-col min-w-0">
                                                                <div className="flex items-center gap-2">
                                                                    <span
                                                                        className="text-slate-800 text-sm md:text-base font-bold group-hover:text-orange-600 transition-colors duration-200 truncate">
                                                                        {item.name}
                                                                    </span>
                                                                    {item.popular && (
                                                                        <span
                                                                            className="flex-shrink-0 text-[8px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider bg-orange-100 text-orange-600">
                                                                            Popular
                                                                        </span>
                                                                    )}
                                                                </div>
                                                                {item.price !== null && item.price <= 50 && (
                                                                    <span className="text-[8px] font-bold text-green-600 uppercase tracking-widest mt-0.5">
                                                                        Best Value
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>

                                                        <div className="flex-shrink-0 text-right">
                                                            {item.price !== null ? (
                                                                <span
                                                                    className="text-base md:text-lg font-bold font-display text-[#F97316] group-hover:scale-110 transition-transform inline-block">
                                                                    ₹{item.price}
                                                                </span>
                                                            ) : (
                                                                <span className="text-slate-300 text-[10px] italic font-body">
                                                                    Seasonal
                                                                </span>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )
                                            })}
                                        </div>
                                    </motion.section>
                                )
                            })}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="py-20 text-center flex flex-col items-center justify-center gap-6"
                        >
                            <span className="text-7xl">🍊</span>
                            <div className="max-w-sm">
                                <h3 className="text-2xl font-display font-extrabold text-slate-800 mb-2">No items in this price range</h3>
                                <p className="text-slate-500 font-body text-sm mb-8">Try adjusting your filters to discover more fresh delights from our menu.</p>
                                <button
                                    onClick={() => {
                                        setPriceRange('all');
                                        setActive('All');
                                        setSortBy('default');
                                    }}
                                    className="px-8 py-3 bg-orange-500 text-white font-body font-bold rounded-full shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all active:scale-95 min-h-[44px]"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── BOTTOM CTA ── */}
                <motion.div
                    className="mt-20 md:mt-40 rounded-[40px] md:rounded-[60px] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-orange-100/50"
                    style={{ background: "linear-gradient(135deg, #FFF7ED 0%, #FFFDF8 100%)", border: "1px solid #FFEDD5" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="relative z-10">
                        <span className="text-5xl md:text-6xl mb-6 md:mb-8 block">🍊</span>
                        <h3 className="text-3xl md:text-5xl text-slate-900 mb-6 font-display font-extrabold leading-tight tracking-tight">
                            Find Your <span className="text-orange-500">Perfect Taste.</span>
                        </h3>
                        <p className="text-slate-500 text-base md:text-lg mb-8 md:mb-12 max-w-xl mx-auto font-body">
                            Our master blenders are ready to help you discover your new favorite selection. Freshness guaranteed in every drop.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center font-body">
                            <a
                                href="tel:+918639271639"
                                className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl text-sm transition-all shadow-xl shadow-orange-100 min-h-[56px] w-full sm:w-auto">
                                📞 Secunderabad
                            </a>
                            <a
                                href="tel:+919533133316"
                                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-2xl text-sm transition-all shadow-xl shadow-green-100 min-h-[56px] w-full sm:w-auto">
                                📞 Bandlaguda
                            </a>
                        </div>

                        {/* Legend */}
                        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-12 md:mt-16 pt-8 md:pt-10 border-t border-orange-100/50">
                            <div className="flex items-center gap-3">
                                <div className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-[4px] border-2 border-green-600 flex items-center justify-center">
                                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-green-600" />
                                </div>
                                <span className="text-slate-400 text-[10px] font-bold font-body uppercase tracking-widest">Natural Delight</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-[4px] border-2 border-red-500 flex items-center justify-center">
                                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-red-500" />
                                </div>
                                <span className="text-slate-400 text-[10px] font-bold font-body uppercase tracking-widest">Savoury Choice</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}
