import { CardType, WorkType } from "@/types"

interface Content {
  type: CardType
  content: string
}

const getValidContentForIdx = (
  idx: number,
  contents: Content[],
  textBeenUsed: boolean,
  remainingImages: number
): CardType[] => {
  const validTypes: CardType[] = []

  if (idx === 0) {
    return [CardType.EMPTY, CardType.IMAGE, CardType.TEXT] // First card can be anything
  }

  if (!textBeenUsed && idx === contents.length - 2) {
    return [CardType.TEXT] // Force text before the last card
  }

  if (idx === contents.length - 1 && contents[idx - 1].type === CardType.TEXT) {
    return [CardType.IMAGE, CardType.EMPTY]
  }

  if (textBeenUsed) {
    validTypes.push(CardType.EMPTY, CardType.IMAGE)
  } else {
    validTypes.push(CardType.EMPTY, CardType.IMAGE, CardType.TEXT)
  }

  if (remainingImages === 0) {
    validTypes.filter((type) => type !== CardType.IMAGE)
  }

  if (contents[idx - 1].type === CardType.EMPTY) {
    validTypes.filter((type) => type !== CardType.EMPTY)
  }

  if (contents.length - idx === remainingImages) {
    validTypes.filter((type) => type !== CardType.EMPTY)
  }

  if (idx === contents.length - 3 && !textBeenUsed && remainingImages === 1) {
    validTypes.filter((type) => type !== CardType.IMAGE)
  }

  if (contents.length - idx === remainingImages + 1 && !textBeenUsed) {
    validTypes.filter((type) => type !== CardType.EMPTY)
  }

  return validTypes
}

export const shuffle = ({ images, description }: WorkType): Content[] => {
  const targetLength = 7
  const content: Content[] = []
  const remainingImages = [...images]
  let textBeenUsed = false

  for (let i = 0; i < targetLength; i++) {
    const validTypes = getValidContentForIdx(
      i,
      content,
      textBeenUsed,
      remainingImages.length
    )

    if (validTypes.length === 0) {
      // Handle the case where no valid types are available (should be rare)
      console.warn(
        "No valid card types available. Returning a partial shuffle."
      )
      return content // Or throw an error, depending on your needs.
    }

    const randomType = validTypes[Math.floor(Math.random() * validTypes.length)]

    switch (randomType) {
      case CardType.TEXT:
        textBeenUsed = true
        content.push({ type: CardType.TEXT, content: description })
        break
      case CardType.IMAGE:
        const randomIndex = Math.floor(Math.random() * remainingImages.length)
        content.push({
          type: CardType.IMAGE,
          content: remainingImages[randomIndex]
        })
        remainingImages.splice(randomIndex, 1)
        break
      case CardType.EMPTY:
        content.push({ type: CardType.EMPTY, content: "" })
        break
    }
  }

  return content
}

// OLD SHUFFLE
const oldShuffle = ({ images, description }: WorkType) => {
  const contents = images.map((image) => ({
    type: CardType.IMAGE,
    content: image
  }))
  contents.push({
    type: CardType.TEXT,
    content: description
  })
  const targetLength = 7
  while (contents.length < targetLength) {
    contents.push({
      type: CardType.EMPTY,
      content: ""
    })
  }
  let shuffled = [...contents] // Create a copy to avoid modifying the original
  const isValidShuffle = (
    array: {
      type: CardType
      content: string
    }[]
  ) => {
    for (let i = 0; i < array.length - 1; i++) {
      if (
        array[i].type === CardType.TEXT &&
        array[i + 1].type === CardType.EMPTY &&
        i + 2 < array.length &&
        array[i + 2].type === CardType.EMPTY
      ) {
        return false // Text followed by two empties
      }
      if (
        array[i].type === CardType.EMPTY &&
        array[i + 1].type === CardType.EMPTY &&
        i + 2 < array.length &&
        array[i + 2].type === CardType.TEXT
      ) {
        return false // Two empties followed by text
      }
      if (
        array[i].type === CardType.EMPTY &&
        array[i + 1].type === CardType.EMPTY
      ) {
        return false // Two empties in a row
      }
    }
    if (array[array.length - 1].type === CardType.TEXT) {
      return false // Last card is text
    }
    if (
      array.length >= 2 &&
      array[array.length - 2].type === CardType.TEXT &&
      array[array.length - 1].type === CardType.EMPTY
    ) {
      return false // Last two cards are text then empty
    }
    if (
      array.length >= 2 &&
      array[array.length - 2].type === CardType.EMPTY &&
      array[array.length - 1].type === CardType.TEXT
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
