import type React from "react"
import { useEffect, useRef } from "react"
import { cn } from "@/utils"

export const Link: React.FC<React.ComponentProps<"a">> = ({
  className,
  children,
  ...props
}) => {
  const ref = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    const element = ref.current as HTMLAnchorElement

    // todo: we need to add animation here if we use GSAP or add motion.a if we use Framer Motion

    return () => {}
  }, [])

  return (
    <a ref={ref} className={cn("", className)} {...props}>
      {children}
    </a>
  )
}
