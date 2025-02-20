import type { DataType } from "@/types"

import { Project } from "@/components"
import React from "react"

interface Props {
  data: DataType
}

export const Works: React.FC<Props> = ({ data }) => {
  return (
    <section
      id="works"
      className="mx-grid flex flex-col justify-center pt-span-12 uppercase">
      {data.works.map((work) => (
        <Project key={work.title} data={work} />
      ))}
    </section>
  )
}
