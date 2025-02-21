import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import type { DataType } from "@/types"

interface Props {
  count: number
  durations: {
    flipDuration: number
    staggerScaleDowImage: number
    durationScaleDownImage: number
  }
}

export const LoadingScreen: React.FC<Props> = ({ count, durations }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { flipDuration, staggerScaleDowImage, durationScaleDownImage } =
    durations
  useEffect(() => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 1,
      delay: flipDuration + count * staggerScaleDowImage,
      ease: "easeInOut",
      onComplete: () => {
        gsap.set(containerRef.current, { display: "none" })
      }
    })
    gsap.fromTo(
      ".loading-image",
      {
        scale: 1.5,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        stagger: durationScaleDownImage,
        duration: staggerScaleDowImage,
        ease: "easeInOut"
      }
    )
  }, [])
  return (
    <div
      ref={containerRef}
      className="fixed h-screen w-full bg-background top-0 left-0 z-10"
    />
  )
}
