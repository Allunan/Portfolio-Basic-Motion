import { cn } from "@/utils"
import gsap from "gsap"
import { Flip } from "gsap/Flip"
import { useEffect, useRef } from "react"

interface Props extends React.ComponentProps<"img"> {
  fadeIn?: boolean
  count: number
}

export const Image: React.FC<Props> = ({
  className,
  count,
  fadeIn = true,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const state = useRef<ReturnType<typeof Flip.getState>>()

  useEffect(() => {
    const wrapper = wrapperRef.current as HTMLDivElement
    const staggerScaleDowImage = 400
    const durationScaleDownImage = 300
    if (!fadeIn) {
      gsap.set(wrapper, {
        position: "fixed",
        top: "50%",
        left: "50%",
        zIndex: 100,
        transform: "translate(-50%, -50%)"
      })
      state.current = Flip.getState(wrapper)
      setTimeout(
        () => {
          if (state.current) {
            gsap.set(wrapper, {
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
        },
        count * staggerScaleDowImage + durationScaleDownImage
      )
    }
    fadeIn &&
      gsap.fromTo(
        wrapper,
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
      gsap.killTweensOf(wrapper)
    }
  }, [fadeIn])

  return (
    <div ref={containerRef} className={cn(className)}>
      <div
        ref={wrapperRef}
        className={cn(
          "overflow-hidden",
          className,
          !fadeIn && "loading-image"
        )}>
        <img
          loading="eager"
          sizes="(max-width: 1024px) 100vw, 75vw"
          alt={props.alt || "alt text not exist"}
          className="object-cover w-full h-full"
          {...props}
        />
      </div>
    </div>
  )
}
