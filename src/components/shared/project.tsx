import type { WorkType } from "@/types"

import { Card, Link } from "@/components"
import { shuffle } from "@/utils"
import gsap from "gsap"
import React, { useEffect, useRef } from "react"

interface ProjectProps {
  data: WorkType
}

export const Project: React.FC<ProjectProps> = ({ data }) => {
  const shuffled = shuffle(data)

  const elementRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const elements = elementRefs.current as HTMLElement[]

    gsap.fromTo(
      elements,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "easeInOut"
      }
    )

    return () => {
      gsap.killTweensOf(elements)
    }
  }, [])

  return (
    <div className="flex flex-wrap gap-base-2 py-2 border-b border-dashed border-muted border-opacity-70">
      <div className="span-w-1 aspect-card flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <span
            ref={(element) => {
              elementRefs.current[0] = element
            }}
            className="text-muted">
            {data.index}
          </span>
          <span
            ref={(element) => {
              elementRefs.current[1] = element
            }}
            className="text-primary text-lg">
            {data.title}
          </span>
        </div>
        <div className="flex w-full justify-between">
          <span
            ref={(element) => {
              elementRefs.current[2] = element
            }}
            className="text-muted">
            {data.year}
          </span>
          {data.preview && (
            <Link
              ref={(element) => {
                elementRefs.current[3] = element
              }}
              href={data.preview}>
              Live Preview
            </Link>
          )}
        </div>
      </div>

      {shuffled.map(({ type, content }, index) => (
        <Card key={index} type={type} content={content} />
      ))}
    </div>
  )
}
