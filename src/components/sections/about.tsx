import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import type { DataType } from "@/types"
import { Image } from "../shared/image"
import { TextAnimated } from "../shared/textAnimated"

interface Props {
  data: DataType
}

export const About: React.FC<Props> = ({ data }) => {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const headingAnimation = gsap.fromTo(
      headingRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    )
    return () => {
      headingAnimation.kill()
    }
  }, [])

  return (
    <section
      id="about"
      className="pt-60 pb-32 mx-grid border-b border-dashed border-muted border-opacity-70">
      <div className="flex flex-wrap gap-base-2">
        <div className="span-w-2 sm:span-w-1 text-muted">
          <h3 ref={headingRef}>about me</h3>
        </div>
        <TextAnimated className="span-w-2 sm:span-w-2">{data.bio}</TextAnimated>
        <div className="w-full lg:span-w-5 flex items-center justify-center">
          <div className="aspect-[2/1.5] sm:aspect-[2/.85]">
            <Image src={data.hero_picture} className="w-full lg:span-w-3 aspect-[2/1.5] sm:aspect-[2/.85]"/>
          </div>
        </div>
      </div>
    </section>
  )
}
