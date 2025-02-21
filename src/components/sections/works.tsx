import type { DataType } from "@/types"

import { Project } from "@/components"
import React from "react"

interface Props {
  data: DataType
  count: number
  durations: {
    flipDuration: number
    staggerScaleDowImage: number
    durationScaleDownImage: number
  }
}

export const Works: React.FC<Props> = ({ data, count, durations }) => {
  return (
    <section
      id="works"
      className="mx-grid flex flex-col justify-center pt-span-12 uppercase">
      {data.works.map((work) => (
        <Project
          key={work.title}
          data={work}
          count={count}
          durations={durations}
        />
      ))}
    </section>
  )
}
