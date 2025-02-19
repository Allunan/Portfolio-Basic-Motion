import { CardType, WorkType } from "@/types"
import { shuffle } from "@/utils/shuffle"
import React from "react"
import { Image } from "./shared/image"
import { Link } from "./shared/link"

interface Props {
  data: WorkType
}

const cards: Record<
  CardType,
  ({ content }: { content: string }) => JSX.Element
> = {
  [CardType.TEXT]: ({ content }) => (
    <div className="span-w-1 aspect-card">
      <p className="text-justify text">{content}</p>
    </div>
  ),
  [CardType.IMAGE]: ({ content }) => (
    <Image src={content} className="span-w-1 aspect-card" />
  ),
  [CardType.EMPTY]: () => <div className="span-w-1 aspect-card" />
}

export const Project: React.FC<Props> = ({ data }) => {
  const shuffled = shuffle(data)

  return (
    <div className="flex flex-wrap gap-base-2 py-2 border-b border-dashed border-muted border-opacity-70">
      <div className="span-w-1 aspect-card flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-muted">{data.index}</span>
          <span className="text-primary text-lg">{data.title}</span>
        </div>
        <div className="flex w-full justify-between">
          <span className="text-muted">{data.year}</span>
          {data.preview && <Link href={data.preview}>Live Preview</Link>}
        </div>
      </div>

      {shuffled.map(({ type, content }, index) => {
        const Card = cards[type]

        return <Card key={`${data.index}-${index}`} content={content} />
      })}
    </div>
  )
}
