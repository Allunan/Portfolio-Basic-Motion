import { cn } from "@/utils"
import gsap from "gsap"
import { Flip } from "gsap/Flip"
import { useEffect, useRef } from "react"

interface Props extends React.ComponentProps<"img"> {
  fadeIn?: boolean
  count?: number
  durations?: {
    flipDuration: number
    staggerScaleDowImage: number
    durationScaleDownImage: number
  }
}

export const Image: React.FC<Props> = ({
  className,
  count,
  fadeIn = true,
  durations,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const state = useRef<ReturnType<typeof Flip.getState>>()

  const getState = () => {
    state.current = Flip.getState(wrapperRef.current as HTMLDivElement)
  }

  useEffect(() => {
    const wrapper = wrapperRef.current as HTMLDivElement

    if (!fadeIn && durations && count) {
      const { flipDuration, staggerScaleDowImage, durationScaleDownImage } =
        durations

      gsap.set(wrapper, {
        position: "fixed",
        top: "50%",
        left: "50%",
        zIndex: 100,
        transform: "translate(-50%, -50%)"
      })

      getState()
      window.addEventListener("resize", getState)

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
              duration: flipDuration,
              ease: "easeInOut"
            })
          }
        },
        count * staggerScaleDowImage * 1000 + durationScaleDownImage * 1000
      )
    }
    fadeIn &&
      durations &&
      count &&
      gsap.fromTo(
        wrapper,
        {
          clipPath: "inset(0% 0% 100% 0%)"
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          delay:
            durations.flipDuration + count * durations.staggerScaleDowImage,
          ease: "easeInOut"
        }
      )

    return () => {
      gsap.killTweensOf(wrapper)
      window.removeEventListener("resize", getState)
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
