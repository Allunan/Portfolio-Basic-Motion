import { CardType } from "@/types"

import { Image } from "@/components"
import { data } from "@/configurations"
import gsap from "gsap"
import { useEffect, useRef } from "react"

interface CardProps {
  type: CardType
  content: string
  count: number
  durations: {
    flipDuration: number
    staggerScaleDowImage: number
    durationScaleDownImage: number
  }
}

const TextCard: React.FC<{
  content: string
  count: number
  durations: {
    flipDuration: number
    staggerScaleDowImage: number
    durationScaleDownImage: number
  }
}> = ({ content, count, durations }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current as HTMLDivElement

    gsap.fromTo(
      container,
      {
        clipPath: "inset(0% 0% 100% 0%)"
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        delay: durations.flipDuration + count * durations.staggerScaleDowImage,
        ease: "easeInOut"
      }
    )

    return () => {
      gsap.killTweensOf(container)
    }
  }, [])

  return (
    <div ref={containerRef} className="span-w-1 aspect-card overflow-hidden">
      <p className="text-justify">{content}</p>
    </div>
  )
}

export const Card: React.FC<CardProps> = ({
  type,
  content,
  count,
  durations
}) => {
  const cardsNodes: Record<CardType, React.ReactNode> = {
    [CardType.IMAGE]: (
      <Image
        src={content}
        count={count}
        className="span-w-1 aspect-card"
        fadeIn={!data.loader.includes(content)}
        durations={durations}
      />
    ),
    [CardType.TEXT]: (
      <TextCard content={content} durations={durations} count={count} />
    ),
    [CardType.EMPTY]: <div className="span-w-1 aspect-card" />
  }

  return cardsNodes[type]
}
