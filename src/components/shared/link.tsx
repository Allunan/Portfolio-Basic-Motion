import { cn } from "@/utils"
import gsap from "gsap"
import React, { forwardRef, useRef } from "react"

export const Link = forwardRef<
  React.ElementRef<"a">,
  React.ComponentProps<"a">
>(({ className, children, ...props }, ref) => {
  const underlineRef = useRef<HTMLHRElement | null>(null)

  const onMouseEnter = () => {
    gsap.fromTo(
      underlineRef.current,
      {
        xPercent: 0
      },
      {
        xPercent: 100,
        duration: 0.7,
        ease: "easeInOut"
      }
    )
  }

  const onMouseLeave = () => {
    gsap.fromTo(
      underlineRef.current,
      {
        xPercent: 100
      },
      {
        xPercent: 200,
        duration: 0.7,
        ease: "easeInOut"
      }
    )
  }

  return (
    <div
      className="relative w-fit overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <a ref={ref} className={cn("hover:cursor-pointer", className)} {...props}>
        {children}
      </a>
      <hr
        ref={underlineRef}
        className="absolute bottom-0 -left-full w-full border border-muted border-opacity-70"
      />
    </div>
  )
})
