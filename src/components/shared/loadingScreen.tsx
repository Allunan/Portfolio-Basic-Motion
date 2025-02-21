import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import type { DataType } from "@/types"

interface Props {
  data: DataType
}

export const LoadingScreen: React.FC<Props> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { loader } = data
  const count = loader.length
  const flipDuration = 1.5
  const staggerScaleDowImage = 0.4
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
        stagger: 0.3,
        duration: 0.3,
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
