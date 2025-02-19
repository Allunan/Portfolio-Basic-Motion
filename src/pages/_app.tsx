import gsap from "gsap"
import CustomEase from "gsap/CustomEase"
import { ReactLenis } from "lenis/react"
import { ThemeProvider } from "next-themes"
import { StrictMode } from "react"
import { Outlet } from "react-router-dom"

gsap.registerPlugin(CustomEase)
CustomEase.create("easeInOut", "0.45, 0, 0, 1")

const App: React.FC = () => {
  return (
    <StrictMode>
      <ReactLenis root>
        <ThemeProvider enableSystem={false} defaultTheme="light">
          <Outlet />
        </ThemeProvider>
      </ReactLenis>
    </StrictMode>
  )
}

export default App
