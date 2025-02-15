import React from "react"

import type { DataType } from "@/types"

import { Image } from "@/components/shared/image"
import { Link } from "@/components/shared/link"
import { shuffle } from "@/utils/shuffle"

interface Props {
  data: DataType
}

export const Works: React.FC<Props> = ({ data }) => {
  return (
    <section
      id="works"
      className="mx-[var(--grid-margins)] flex justify-center pt-span-12 uppercase">
      <div>
        {data.works.map((work) => {
          const shuffled = shuffle(work)

          return (
            <React.Fragment key={work.index}>
              <div className="flex flex-wrap gap-base-2 my-2">
                <div className="span-w-1 aspect-[3/4] flex flex-col justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#AFAFB6]">{work.index}</span>
                    <span className="text-[#55555E] text-lg">{work.title}</span>
                  </div>
                  <div className="flex w-full justify-between">
                    <span className="text-[#AFAFB6]">{work.year}</span>
                    {work.preview && (
                      <Link href={work.preview}>Live Preview</Link>
                    )}
                  </div>
                </div>

                {shuffled.map(({ type, content }, index) => {
                  if (type === "empty") {
                    return (
                      <div
                        key={`${work.index}-${index}`}
                        className="span-w-1 aspect-[3/4]"
                      />
                    )
                  }

                  if (type === "text") {
                    return (
                      <div
                        key={`${work.index}-${index}`}
                        className="span-w-1 aspect-[3/4]">
                        <p className="text-justify text">{content}</p>
                      </div>
                    )
                  }

                  return (
                    <Image
                      alt=""
                      src={content}
                      key={`${work.index}-${index}`}
                      className="span-w-1 aspect-[3/4]"
                    />
                  )
                })}
              </div>
              <hr className="border-1/2 border-dashed border-[#AFAFB6] opacity-70" />
            </React.Fragment>
          )
        })}
      </div>
    </section>
  )
}
