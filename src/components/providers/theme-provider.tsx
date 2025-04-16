import * as React from "react"
import { ThemeProvider as NextThemeProvider, ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemeProvider forcedTheme={props.themes?.[0] || undefined} {...props}>
      {children}
    </NextThemeProvider>
  )
}