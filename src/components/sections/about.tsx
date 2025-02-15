import React from "react"
import { Image } from "../shared/image"

interface Props {
  data: {
    bio: string
    hero_picture: string
  }
}

export const About: React.FC<Props> = ({ data }) => {
  return (
    <section className="pt-60 pb-32 mx-[var(--grid-margins)] border-b border-dashed border-[#AFAFB6] border-opacity-70">
      <div className="flex flex-wrap gap-base-2">
        <div>
          <h3 className="span-w-2 sm:span-w-1 lg:span-w-1 text-[#AFAFB6]">
            about me
          </h3>
        </div>
        <div>
          <p className="span-w-2 aspect-[5] sm:span-w-3 lg:span-w-2 text-justify">
            {data.bio}
          </p>
        </div>
        <div className="span-w-2 sm:span-w-4 lg:span-w-5 flex justify-center mt-8 sm:mt-4 lg:mt-0">
          <Image
            alt=""
            src={data.hero_picture}
            className="span-w-2 sm:span-w-4 lg:span-w-3 aspect-[3]"
          />
        </div>
      </div>
    </section>
  )
}
