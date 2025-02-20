import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import type { DataType } from "@/types"

interface LoadingScreenProps {
  data: DataType
  onLoadingComplete: () => void
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onLoadingComplete,
  data
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<(HTMLImageElement | null)[]>([])

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Animate images to their final positions
        gsap.to(imagesRef.current, {
          duration: 1,
          scale: 1,
          y: (i) => (i % 2 === 0 ? -200 : 200),
          x: (i) => (i - 3) * 200,
          opacity: 1,
          stagger: 0.1,
          ease: "easeInOut",
          onComplete: onLoadingComplete
        })
      }
    })
    console.log(imagesRef.current[0]?.x)

    // Initial setup - all images invisible and centered
    gsap.set(imagesRef.current, {
      opacity: 0,
      scale: 1.3,
      x: 0,
      y: 0
    })

    // Animate images appearing one by one
    tl.fromTo(
      imagesRef.current,
      {
        opacity: 0,
        scale: 1.5
      },
      {
        duration: 1,
        opacity: 1,
        scale: 1.2,
        stagger: 0.5,
        ease: "easeInOut"
      }
    )
  }, [onLoadingComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        {data.loader.map((src, index) => (
          <img
            key={index}
            ref={(el) => (imagesRef.current[index] = el)}
            src={src}
            alt={`Loading image ${index + 1}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  )
}

export default LoadingScreen
