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
) => {
  const validContent: Record<CardType, boolean> = {
    [CardType.EMPTY]: true,
    [CardType.IMAGE]: true,
    [CardType.TEXT]: true
  }

  // First card can be anything
  if (idx === 0) return validContent

  // Text already been added so not valid anymore
  if (textBeenUsed) validContent[CardType.TEXT] = false

  if (remainingImages === 0) validContent[CardType.IMAGE] = false

  // If the previous card is EMPTY, the current card cannot be EMPTY
  if (contents[idx - 1].type === CardType.EMPTY)
    validContent[CardType.EMPTY] = false

  // If before last card and text not yet added, force it to
  if (!textBeenUsed && idx === contents.length - 2) {
    validContent[CardType.EMPTY] = false
    validContent[CardType.IMAGE] = false
    return validContent
  }

  // Prevent adding empty card while remaning empty cards equal remaning unused images
  if (contents.length - idx === remainingImages)
    validContent[CardType.EMPTY] = false

  // Save last image to prevent having text then empty at the end
  if (idx === contents.length - 3 && !textBeenUsed && remainingImages === 1)
    validContent[CardType.IMAGE] = false

  // Remaining cards are only enough for remaining images and text card
  if (contents.length - idx === remainingImages + 1 && !textBeenUsed)
    validContent[CardType.EMPTY] = false

  // if last card and ->
  if (idx === contents.length - 1)
    if (contents[idx - 1].type === CardType.TEXT)
      // previous card was TEXT, current card can't be EMPTY
      validContent[CardType.EMPTY] = false

  return validContent
}

export const shuffle = ({ images, description }: WorkType) => {
  const targetLength = 7

  const content: Content[] = new Array(targetLength).fill({
    type: CardType.EMPTY,
    content: ""
  })

  const remainingImages = [...images]
  let textBeenUsed = false

  for (let i = 0; i < targetLength; i++) {
    const validContent = getValidContentForIdx(
      i,
      content,
      textBeenUsed,
      remainingImages.length
    )

    const _validTypes = Object.entries(validContent)
      .filter(([_, valid]) => valid)
      .map(([type]) => type as CardType)

    const validTypes = [..._validTypes, ..._validTypes] // Double the odds I guess ?

    const randomType = validTypes[getRandomNumber(validTypes.length)]
    if (randomType === CardType.TEXT) {
      textBeenUsed = true
      content[i] = {
        type: CardType.TEXT,
        content: description
      }
    }

    if (randomType === CardType.IMAGE) {
      const randomIndex = getRandomNumber(remainingImages.length)
      content[i] = {
        type: CardType.IMAGE,
        content: remainingImages[randomIndex]
      }
      remainingImages.splice(randomIndex, 1)
    }
  }

  return content
}

const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max)
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
