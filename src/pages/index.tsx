import { data } from "@/configurations"

import {
  LoadingScreen,
  Footer,
  Header,
  Skills,
  Works,
  About
} from "@/components"

const Page: React.FC = () => {
  const { loader } = data
  const count = loader.length
  return (
    <>
      <Header data={data} />
      <About data={data} />
      <Works data={data} count={count} />
      <Skills data={data} />
      <Footer data={data} />
      <LoadingScreen data={data} />
    </>
  )
}

export default Page
