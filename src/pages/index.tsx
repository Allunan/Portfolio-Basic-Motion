import type React from "react"
import { data } from "@/constants"

const Index: React.FC = () => {
  return (
    <section className="span-max-w-4 md:span-max-w-8 xl:span-max-w-8 mx-auto pt-span-12 uppercase">
      <div>
        {data.works.map((work, index) => {
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
            <div key={index} className="flex gap-base-2 my-base-4 ">
              <div className="span-w-1">
                <span>{work.index}</span>
                <span>{work.title}</span>
                {work.year}
                <a href={work.preview}>Live Preview</a>
              </div>

              {shuffled.map((content, index) => {
                if (content.type === "empty") {
                  return <div key={index} className="span-w-1"></div>
                }
                if (content.type === "text") {
                  return (
                    <div key={index} className="span-w-1">
                      {content.content}
                    </div>
                  )
                }
                return (
                  <div key={index} className="span-w-1">
                    <img
                      className="object-cover w-full h-full"
                      src={content.content}
                    />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Index
