import type { GridVars } from "./types"

export const grid: GridVars = {
  maxWidth: 1920,
  desktop: {
    gap: 8,
    columns: 8,
    margins: 24
  },
  tablet: {
    gap: 8,
    columns: 4,
    margins: 16
  },
  phone: {
    gap: 8,
    columns: 2,
    margins: 8
  }
}

export const tailwindCSSVars = {
  ":root": {
    // Default: Mobile
    "--grid-columns": `${grid.phone.columns}`,
    "--grid-gap": `${grid.phone.gap}px`,
    "--grid-margins": `${grid.phone.margins}px`,
    "--grid-max-width": `${grid.maxWidth}px`
  },
  "@media (min-width: 540px)": {
    // Tablet
    ":root": {
      "--grid-columns": `${grid.tablet.columns}`,
      "--grid-gap": `${grid.tablet.gap}px`,
      "--grid-margins": `${grid.tablet.margins}px`
    }
  },
  "@media (min-width: 1024px)": {
    // Desktop
    ":root": {
      "--grid-columns": `${grid.desktop.columns}`,
      "--grid-gap": `${grid.desktop.gap}px`,
      "--grid-margins": `${grid.desktop.margins}px`
    }
  }
}

export const base = {
  spacing: 4,
  span: "((calc(min(100dvw, var(--grid-max-width)) - (var(--grid-margins) * 2)) - (var(--grid-gap) * (var(--grid-columns) - 1))) / var(--grid-columns))"
}
