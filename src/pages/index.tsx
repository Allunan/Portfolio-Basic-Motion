import React from "react"

import { data } from "@/constants"

import { Footer } from "@/components/sections"
import { Header } from "@/components/sections/header"
import { Skills } from "@/components/sections/skills"
import { Works } from "@/components/sections/works"
import { About } from "@/components/sections/about"

const Index: React.FC = () => {
  return (
    <>
      <Header data={data} />
      <About data={data} />
      <Works data={data.works} />
      <Skills data={data.skills} />
      <Footer data={data} />
    </>
  )
}

export default Index
