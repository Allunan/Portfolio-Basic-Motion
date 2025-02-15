import type { WorkType } from "@/types"

export const shuffle = ({ images, description }: WorkType) => {
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

      if (array[i].type === "empty" && array[i + 1].type === "empty") {
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
