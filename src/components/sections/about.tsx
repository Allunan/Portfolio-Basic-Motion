import type { DataType } from "@/types"

import { Image } from "../shared/image"

interface Props {
  data: DataType
}

export const About: React.FC<Props> = ({ data }) => {
  return (
    <section
      id="about"
      className="pt-60 pb-32 mx-grid border-b border-dashed border-muted border-opacity-70">
      <div className="flex flex-wrap gap-base-2">
        <h3 className="span-w-2 sm:span-w-1 text-muted">about me</h3>
        <p className="span-w-2 sm:span-w-2 text-justify">{data.bio}</p>
        <div className="w-full lg:span-w-5 flex items-center justify-center">
          <div className="aspect-[2/1.5] sm:aspect-[2/.85]">
            <Image src={data.hero_picture} className="w-full lg:span-w-3 aspect-[2/1.5] sm:aspect-[2/.85]"/>
          </div>
        </div>
      </div>
    </section>
  )
}
