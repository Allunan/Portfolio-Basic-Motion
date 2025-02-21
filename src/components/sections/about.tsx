import type { DataType } from "@/types"

import { Image, TextAnimated } from "@/components"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"

interface Props {
  data: DataType
  count?: number
  durations?: {
    flipDuration: number
    staggerScaleDowImage: number
    durationScaleDownImage: number
  }
}

export const About: React.FC<Props> = ({ data, count, durations }) => {
  const headingRef = useRef<HTMLHeadingElement>(null)

  console.log(
    durations &&
      count &&
      durations.flipDuration + count * durations.staggerScaleDowImage
  )

  useEffect(() => {
    const headingAnimation = gsap.fromTo(
      headingRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "easeInOut",
        delay:
          durations &&
          count &&
          durations.flipDuration + count * durations.staggerScaleDowImage
      }
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
        <TextAnimated
          durations={durations}
          count={count}
          className="span-w-2 sm:span-w-2">
          {data.bio}
        </TextAnimated>
        <div className="w-full lg:span-w-5 flex items-center justify-center">
          <div className="aspect-[2/1.5] sm:aspect-[2/.85]">
            <Image
              count={count}
              durations={durations}
              src={data.hero_picture}
              className="w-full lg:span-w-3 aspect-[2/1.5] sm:aspect-[2/.85]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
