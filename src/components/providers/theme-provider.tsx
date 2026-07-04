"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Wraps next-themes. Dark mode is the default experience; users can switch to
 * an elegant light mode via the header toggle. Theme is applied as a `.dark`
 * class on <html> (see `attribute="class"`).
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
