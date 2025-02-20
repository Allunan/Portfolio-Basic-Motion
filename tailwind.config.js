import {
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  gap,
  padding,
  margin,
  tailwindCSSVars
} from "./src/lib/tailwindcss/index.ts"

import { theme } from "./src/configurations.ts"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: margin(),
      gap: gap(),
      padding: padding(),

      colors: theme,

      fontFamily: {
        sans: [
          "Finlandica",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif"
        ]
      },

      aspectRatio: {
        card: "3 / 4"
      }
    }
  },
  plugins: [
    function addBaseFunction({ addBase }) {
      addBase(tailwindCSSVars)
    },
    function addUtilitiesFunction({ addUtilities }) {
      addUtilities({
        // Width Utilities
        ...Object.fromEntries(
          Object.entries(width()).map(([key, value]) => [
            `.${key}`,
            { width: value }
          ])
        ),
        ...Object.fromEntries(
          Object.entries(minWidth()).map(([key, value]) => [
            `.${key}`,
            { "min-width": value }
          ])
        ),
        ...Object.fromEntries(
          Object.entries(maxWidth()).map(([key, value]) => [
            `.${key}`,
            { "max-width": value }
          ])
        ),

        // Height Utilities
        ...Object.fromEntries(
          Object.entries(height()).map(([key, value]) => [
            `.${key}`,
            { height: value }
          ])
        ),
        ...Object.fromEntries(
          Object.entries(minHeight()).map(([key, value]) => [
            `.${key}`,
            { "min-height": value }
          ])
        ),
        ...Object.fromEntries(
          Object.entries(maxHeight()).map(([key, value]) => [
            `.${key}`,
            { "max-height": value }
          ])
        )
      })
    }
  ]
}
