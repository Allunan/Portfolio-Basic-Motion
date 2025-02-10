import "@/styles/globals.css"

import { Routes } from "@generouted/react-router"
import { ThemeProvider } from "next-themes"
import { createRoot } from "react-dom/client"
import { StrictMode } from "react"

const container = document.getElementById("root")!
createRoot(container).render(
  <StrictMode>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </StrictMode>
)
