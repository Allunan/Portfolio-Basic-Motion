import { useEffect, useRef } from "react"
import { cn } from "@/utils"
import SplitType from "split-type"
import gsap from "gsap"

export const TextAnimated: React.FC<React.ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(SplitType)
    // Split text into visual lines
    if (ref.current) {
      const splitText = new SplitType(ref.current, { types: "lines" })

      // Animate each line
      splitText.lines?.forEach((line) => {
        const span = document.createElement("p")
        span.innerHTML = line.innerHTML // Copy the line's innerHTML
        span.style.width = "100%" // Make the line a block element
        line.innerHTML = "" // Clear the line's innerHTML
        line.appendChild(span) // Append the span to the line
        line.style.textAlign = "justify" // Justify the text
        line.style.textAlignLast = "justify" // Justify the text
        line.style.overflow = "hidden" // Hide the overflow
        line.style.display = "block" // Make the line a block element
        line.style.width = "100%" // Make the line a block element
        gsap.from(span, {
          duration: 1.5,
          yPercent: -100,
          ease: "power4.easeOut"
        })
      })
    }
  }, [])
  return (
    <div ref={ref} className={cn("", className)} {...props}>
      {children}
    </div>
  )
}
