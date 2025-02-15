import type { DataType } from "@/types"

import { Image } from "../shared/image"

interface Props {
  data: DataType
}

export const About: React.FC<Props> = ({ data }) => {
  return (
    <section id="about" className="pt-60 pb-32 mx-[var(--grid-margins)] border-b border-dashed border-[#AFAFB6] border-opacity-70">
      <div className="flex flex-wrap gap-base-2">
        <h3 className="span-w-2 sm:span-w-1 text-[#AFAFB6]">about me</h3>
        <p className="span-w-2 aspect-[5] sm:span-w-2 text-justify">
          {data.bio}
        </p>
        <div className="w-full lg:span-w-5 flex items-center justify-center">
          <Image
            alt=""
            src={data.hero_picture}
            className="span-w-2 sm:span-w-4 lg:span-w-3 aspect-[2/1.5] sm:aspect-[2/.85]"
          />
        </div>
      </div>
    </section>
  )
}
