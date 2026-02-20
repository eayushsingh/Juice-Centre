import SafeImage from "./SafeImage"
import { GalleryImage } from "@/data/gallery"

interface Props {
    image: GalleryImage
    className?: string
}

export default function GalleryItem({ image, className }: Props) {
    return (
        <div className={`group relative overflow-hidden rounded-2xl cursor-pointer ${className}`}>
            <SafeImage
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <p className="text-white font-bold text-lg mb-1">{image.label}</p>
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest leading-none bg-white/10 px-2 py-1 rounded">
                    {image.category}
                </span>
            </div>
        </div>
    )
}
