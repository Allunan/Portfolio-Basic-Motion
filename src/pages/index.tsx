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
  const durations = {
    flipDuration: 1.5,
    staggerScaleDowImage: 0.3,
    durationScaleDownImage: 0.3
  }
  return (
    <>
      <Header data={data} />
      <About data={data} count={count} durations={durations} />
      <Works data={data} count={count} durations={durations} />
      <Skills data={data} />
      <Footer data={data} />
      <LoadingScreen count={count} durations={durations} />
    </>
  )
}

export default Page
