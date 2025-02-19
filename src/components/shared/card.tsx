import { CardType } from "@/types"
import React, { useEffect, useRef } from "react"
import { Image } from "@/components/shared/image"
import { data } from "@/constants"
import gsap from "gsap"

interface CardProps {
  type: CardType
  content: string
}

const TextCard: React.FC<{ content: string }> = ({ content }) => {
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

export const Card: React.FC<CardProps> = ({ type, content }) => {
  const cardsNodes: Record<CardType, React.ReactNode> = {
    [CardType.IMAGE]: (
      <Image
        src={content}
        className="span-w-1 aspect-card"
        fadeIn={!data.loader.includes(content)}
      />
    ),
    [CardType.TEXT]: <TextCard content={content} />,
    [CardType.EMPTY]: <div className="span-w-1 aspect-card" />
  }

  return cardsNodes[type]
}
