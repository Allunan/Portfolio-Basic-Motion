export interface DataType {
  name: string
  bio: string
  hero_picture: string
  works: {
    index: string
    title: string
    year: string
    preview?: string
    description: string
    images: string[]
  }[]
  skills: {
    title: string
    items: string[]
  }[]
  socials: {
    title: string
    link: string
  }[]
}
