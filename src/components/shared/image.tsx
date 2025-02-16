import { useEffect, useRef } from "react"
import { cn } from "@/utils"
import gsap from "gsap"

export const Image: React.FC<React.ComponentProps<"img">> = ({
  className,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current

    if (container) {
      gsap.fromTo(
        container,
        { clipPath: "inset(0% 0% 100% 0%)" }, // Starts completely hidden from the top
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power4.inOut" } // Reveals from top to bottom
      )
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <img className="object-cover w-full h-full" {...props} />
    </div>
  )
}
