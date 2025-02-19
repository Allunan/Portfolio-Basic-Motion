import { data } from "@/constants"

import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { Skills } from "@/components/sections/skills"
import { Works } from "@/components/sections/works"
import { About } from "@/components/sections/about"

const Page: React.FC = () => {
  return (
    <div className="mx-auto mxw:mx-0 max-w-[var(--grid-max-width)]">
      <Header data={data} />
      <About data={data} />
      <Works data={data} />
      <Skills data={data} />
      <Footer data={data} />
    </div>
  )
}

export default Page
