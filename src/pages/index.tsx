import { data } from "@/configurations"

import { About } from "@/components"
import { Footer } from "@/components"
import { Header } from "@/components"
import { Skills } from "@/components"
import { Works } from "@/components"

const Page: React.FC = () => {
  return (
    <>
      <Header data={data} />
      <About data={data} />
      <Works data={data} />
      <Skills data={data} />
      <Footer data={data} />
    </>
  )
}

export default Page
