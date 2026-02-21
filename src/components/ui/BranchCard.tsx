import { Branch } from "@/data/branches"

interface Props {
    branch: Branch
    accentColor?: string
}

export default function BranchCard({ branch, accentColor = "#D4AF37" }: Props) {
    return (
        <div className="bg-[#111111] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-300 hover:-translate-y-2 group border border-white/5">
            <div className="h-1.5 w-full" style={{ backgroundColor: accentColor }} />

            <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display font-black text-3xl text-white">{branch.name}</h3>
                    <span className="bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#D4AF37]/20">
                        {branch.tag}
                    </span>
                </div>

                <div className="space-y-4 mb-8">
                    <div className="flex gap-3 text-sm text-slate-400 italic">
                        <span>📍</span>
                        <span>{branch.address}</span>
                    </div>
                    <div className="flex gap-3 text-sm text-slate-400">
                        <span>🕐</span>
                        <span>{branch.hours}</span>
                    </div>
                    <div className="flex gap-3 text-sm">
                        <span>📞</span>
                        <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-[#D4AF37] font-bold hover:underline">
                            {branch.phone}
                        </a>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3">
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white font-bold text-xs py-3 rounded-full transition-all duration-200"
                    >
                        📍 Get Directions
                    </a>
                    <a
                        href={`https://wa.me/${branch.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs py-3 rounded-full transition-all duration-200 flex items-center justify-center gap-2"
                    >
                        💬 WhatsApp
                    </a>
                </div>
            </div>
        </div>
    )
}
