interface Props {
    tag: string
    title: string
    highlight?: string
    highlightColor?: string
    subtitle?: string
    light?: boolean
    center?: boolean
}

export default function SectionHeader({ tag, title, highlight, highlightColor = "#FF8C00", subtitle, light, center }: Props) {
    const parts = highlight ? title.split(highlight) : [title]
    return (
        <div className={center ? "text-center" : ""}>
            <span className={`inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 ${light ? "bg-white/10 text-white" : "bg-[#FF8C00]/10 text-[#FF8C00]"}`}>
                {tag}
            </span>
            <h2 className={`font-fredoka text-4xl md:text-5xl leading-tight mb-4 ${light ? "text-white" : "text-[#111]"}`}>
                {parts[0]}
                {highlight && <span style={{ color: highlightColor }}>{highlight}</span>}
                {parts[1]}
            </h2>
            {subtitle && (
                <p className={`text-base leading-relaxed max-w-xl ${center ? "mx-auto" : ""} ${light ? "text-white/60" : "text-gray-500"}`}>
                    {subtitle}
                </p>
            )}
        </div>
    )
}
