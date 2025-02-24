import { cn } from "@/utils"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import SplitType from "split-type"

interface Props extends React.ComponentProps<"div"> {
  durations?: {
    flipDuration: number
    staggerScaleDowImage: number
    durationScaleDownImage: number
  }
  count?: number
}
export const TextAnimated: React.FC<Props> = ({
  className,
  children,
  count,
  durations,
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const lineRefs = useRef<HTMLElement[]>([])

  const splitText = () => {
    if (!ref.current) return

    const wrappers = new SplitType(ref.current, {
      types: "lines",
      lineClass: "overflow-hidden text-justify text-justify-last"
    })
    const lines = new SplitType(wrappers.lines as HTMLElement[], {
      types: "lines"
    })

    lineRefs.current = lines.lines as HTMLElement[]
  }

  useEffect(() => {
    if (!ref.current) return

    splitText()
    window.addEventListener("resize", splitText)

    gsap.from(lineRefs.current, {
      duration: 1.5,
      yPercent: -100,
      stagger: 0.075,
      ease: "easeInOut",
      delay:
        durations &&
        count &&
        durations.flipDuration + count * durations.staggerScaleDowImage
    })

    return () => {
      window.removeEventListener("resize", splitText)
      gsap.killTweensOf(lineRefs.current)
    }
  }, [])

  return (
    <div ref={ref} className={cn("", className)} {...props}>
      {children}
    </div>
  )
}
