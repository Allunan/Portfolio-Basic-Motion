import { cn } from "@/utils"
import gsap from "gsap"
import { Flip } from "gsap/Flip"
import { useEffect, useRef } from "react"

interface Props extends React.ComponentProps<"img"> {
  fadeIn?: boolean
}

export const Image: React.FC<Props> = ({
  className,
  fadeIn = true,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const state = useRef<ReturnType<typeof Flip.getState>>()

  useEffect(() => {
    const container = containerRef.current as HTMLDivElement
    if (!fadeIn) {
      gsap.set(container, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      })
      state.current = Flip.getState(container)
      setTimeout(() => {
        if (state.current) {
          gsap.set(container, {
            position: "relative",
            top: "0",
            left: "0",
            transform: "none"
          })
          Flip.from(state.current, {
            duration: 1.5,
            ease: "easeInOut"
          })
        }
      }, 2000)
    }
    fadeIn &&
      gsap.fromTo(
        container,
        {
          clipPath: "inset(0% 0% 100% 0%)"
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "easeInOut"
        }
      )

    return () => {
      gsap.killTweensOf(container)
    }
  }, [fadeIn])

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <img
        loading="eager"
        sizes="(max-width: 1024px) 100vw, 75vw"
        alt={props.alt || "alt text not exist"}
        className="object-cover w-full h-full"
        {...props}
      />
    </div>
  )
}
