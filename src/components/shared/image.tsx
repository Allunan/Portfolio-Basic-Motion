import type React from "react"
import { useEffect, useRef } from "react"
import { cn } from "@/utils"

export const Image: React.FC<React.ComponentProps<"img">> = ({
  className,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const container = containerRef.current as HTMLDivElement
    const img = containerRef.current as HTMLImageElement

    // todo: we need to add animation here if we use GSAP or add motion.a if we use Framer Motion

    return () => {}
  }, [])

  return (
    <div ref={containerRef} className={cn("", className)}>
      <img ref={imageRef} className="object-cover w-full h-full" {...props} />
    </div>
  )
}
