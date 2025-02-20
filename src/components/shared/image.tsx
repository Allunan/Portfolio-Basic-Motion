import { cn } from "@/utils"
import gsap from "gsap"
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

  useEffect(() => {
    const container = containerRef.current as HTMLDivElement

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
