import React from "react"
import { Image } from "@/components/shared/image"
import { Link } from "@/components/shared/link"

interface Props {
  data: {
    index: string
    title: string
    year: string
    preview?: string
    description: string
    images: string[]
  }[]
}

export const Works: React.FC<Props> = ({ data }) => {
  return (
    <section className="mx-[var(--grid-margins)] flex justify-center pt-span-12 uppercase">
      <div>
        {data.map((work) => {
          const shuffle = ({ images, description }: typeof work) => {
            const contents = images.map((image) => ({
              type: "image",
              content: image
            }))

            contents.push({
              type: "text",
              content: description
            })

            const targetLength = 7
            while (contents.length < targetLength) {
              contents.push({
                type: "empty",
                content: ""
              })
            }

            let shuffled = [...contents] // Create a copy to avoid modifying the original

            const isValidShuffle = (
              array: {
                type: string
                content: string
              }[]
            ) => {
              for (let i = 0; i < array.length - 1; i++) {
                if (
                  array[i].type === "text" &&
                  array[i + 1].type === "empty" &&
                  i + 2 < array.length &&
                  array[i + 2].type === "empty"
                ) {
                  return false // Text followed by two empties
                }

                if (
                  array[i].type === "empty" &&
                  array[i + 1].type === "empty" &&
                  i + 2 < array.length &&
                  array[i + 2].type === "text"
                ) {
                  return false // Two empties followed by text
                }

                if (
                  array[i].type === "empty" &&
                  array[i + 1].type === "empty"
                ) {
                  return false // Two empties in a row
                }
              }

              if (array[array.length - 1].type === "text") {
                return false // Last card is text
              }

              if (
                array.length >= 2 &&
                array[array.length - 2].type === "text" &&
                array[array.length - 1].type === "empty"
              ) {
                return false // Last two cards are text then empty
              }

              if (
                array.length >= 2 &&
                array[array.length - 2].type === "empty" &&
                array[array.length - 1].type === "text"
              ) {
                return false // Last two cards are empty then text
              }

              return true
            }

            let attempts = 0
            const maxAttempts = 1000 // Adjust as needed

            while (attempts < maxAttempts) {
              shuffled = [...contents].sort(() => Math.random() - 0.5) // Shuffle a copy
              if (isValidShuffle(shuffled)) {
                return shuffled
              }
              attempts++
            }

            console.warn(
              "Card shuffling failed after multiple attempts. Returning an invalid shuffle."
            )
            return shuffled // Return the last shuffled array, even if invalid, to prevent infinite loops.
          }

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
