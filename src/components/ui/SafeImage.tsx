"use client"
import Image, { ImageProps } from "next/image"
import { useState } from "react"

interface SafeImageProps extends Omit<ImageProps, "onError"> {
    fallbackSrc?: string
}

export default function SafeImage({
    src,
    alt,
    fallbackSrc = "/images/placeholder.png",
    ...props
}: SafeImageProps) {
    const [imgSrc, setImgSrc] = useState(src)
    const [failed, setFailed] = useState(false)

    return (
        <Image
            {...props}
            src={failed ? fallbackSrc : imgSrc}
            alt={alt}
            onError={() => {
                if (!failed) {
                    setImgSrc(fallbackSrc)
                    setFailed(true)
                }
            }}
        />
    )
}
