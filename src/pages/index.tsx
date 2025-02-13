import React from "react"
import { data } from "@/constants"
import { Link } from "@/components/shared/link"
import { Image } from "@/components/shared/image"

const Index: React.FC = () => {
  return (
    <section className="mx-[var(--grid-margins)] flex justify-center pt-span-12 uppercase">
      <div>
        {data.works.map((work) => {
          const contents = work.images.map((image) => {
            return {
              type: "image",
              content: image
            }
          })

          contents.push({
            type: "text",
            content: work.description
          })

          if (contents.length < 7) {
            const diff = 7 - contents.length
            for (let i = 0; i < diff; i++) {
              contents.push({
                type: "empty",
                content: ""
              })
            }
          }

          const shuffled = contents.sort(() => Math.random() - 0.5)

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

                {shuffled.map((content, index) => {
                  if (content.type === "empty") {
                    return (
                      <div
                        key={`${work.index}-${index}`}
                        className="span-w-1 aspect-[3/4]"
                      />
                    )
                  }

                  if (content.type === "text") {
                    return (
                      <div
                        key={`${work.index}-${index}`}
                        className="span-w-1 aspect-[3/4]">
                        <p className="text-justify text">{content.content}</p>
                      </div>
                    )
                  }

                  return (
                    <Image
                      alt=""
                      src={content.content}
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

export default Index
