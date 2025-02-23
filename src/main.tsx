import "@/styles/globals.css"

import { createRoot } from "react-dom/client"
import App from "./pages/_app"

const container = document.getElementById("root")!

createRoot(container).render(<App />)
