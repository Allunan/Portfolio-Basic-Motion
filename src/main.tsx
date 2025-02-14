import "@/styles/globals.css"

import { Routes } from "@generouted/react-router"
import { createRoot } from "react-dom/client"

const container = document.getElementById("root")!

createRoot(container).render(<Routes />)
