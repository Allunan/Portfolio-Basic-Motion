import gsap from "gsap"
import CustomEase from "gsap/CustomEase"
import Flip from "gsap/Flip"
import { ReactLenis } from "lenis/react"
import { ThemeProvider } from "next-themes"
import { StrictMode } from "react"
import Page from "."

gsap.registerPlugin(CustomEase)
gsap.registerPlugin(Flip)
CustomEase.create("easeInOut", "0.45, 0, 0, 1")

const App: React.FC = () => {
  return (
    <StrictMode>
      <ReactLenis root>
        <ThemeProvider enableSystem={false} defaultTheme="dark">
          <Page />
        </ThemeProvider>
      </ReactLenis>
    </StrictMode>
  )
}

export default App
