import { ReactLenis } from "lenis/react"
import { ThemeProvider } from "next-themes"
import { StrictMode } from "react"
import { Outlet } from "react-router-dom"

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
