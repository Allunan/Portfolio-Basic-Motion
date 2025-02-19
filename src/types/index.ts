export interface WorkType {
  index: string
  title: string
  year: string
  preview?: string
  description: string
  images: string[]
}

export interface SkillType {
  title: string
  items: string[]
}

export interface SocialType {
  title: string
  link: string
}

export interface DataType {
  name: string
  bio: string
  hero_picture: string
  works: WorkType[]
  skills: SkillType[]
  socials: SocialType[]
}

export enum CardType {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  EMPTY = "EMPTY"
}

export interface Colors {
  primary: string
  secondary: string
  muted: string
  background: string
}
