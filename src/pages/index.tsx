import { data } from "@/configurations"

import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { Skills } from "@/components/sections/skills"
import { Works } from "@/components/sections/works"
import { About } from "@/components/sections/about"
import LoadingScreen from "@/components/LoadingScreen"
import { useState } from "react"

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [imagesPosition, setImagesPosition] = useState<[]>([])

  return (
    <>
      {/* {isLoading ? (
        <LoadingScreen
          data={data}
          onLoadingComplete={() => {
            setIsLoading(false)
          }}
        />
      ) : (
        <>
          <Header data={data} />
          <About data={data} />
          <Works data={data} />
          <Skills data={data} />
          <Footer data={data} />
        </>
      )} */}
      <>
        <Header data={data} />
        <About data={data} />
        <Works data={data} />
        <Skills data={data} />
        <Footer data={data} />
      </>
    </>
  )
}

export default Page
