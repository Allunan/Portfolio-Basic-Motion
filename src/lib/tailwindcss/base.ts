export const grid = {
  desktop: {
    gap: 16,
    columns: 12,
    container: 1280
  },
  tablet: {
    gap: 12,
    columns: 8,
    container: 768
  },
  phone: {
    gap: 8,
    columns: 4,
    container: 280
  }
}

export const tailwindCSSVars = {
  ":root": {
    "--grid-columns": `${grid.phone.columns}`, // Default: Mobile-first
    "--grid-gap": `${grid.phone.gap}px`,
    "--grid-container": `${grid.phone.container}px`
  },
  "@media (min-width: 768px)": {
    ":root": {
      "--grid-columns": `${grid.tablet.columns}`, // Tablet styles
      "--grid-gap": `${grid.tablet.gap}px`,
      "--grid-container": `${grid.tablet.container}px`
    }
  },
  "@media (min-width: 1280px)": {
    ":root": {
      "--grid-columns": `${grid.desktop.columns}`, // Desktop styles
      "--grid-gap": `${grid.desktop.gap}px`,
      "--grid-container": `${grid.desktop.container}px`
    }
  }
}

export const base = {
  spacing: 4,
  span: "((var(--grid-container) - var(--grid-gap) * (var(--grid-columns) - 1)) / var(--grid-columns))"
}
