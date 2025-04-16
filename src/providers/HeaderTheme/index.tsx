"use client";

import { createContext, use, useCallback, useState } from "react";
import type { FunctionComponent, PropsWithChildren } from "react";
import canUseDOM from "~/utilities/can-use-dom";
import type { Theme } from "~/providers/Theme/types";

export interface ContextType {
  headerTheme?: Theme | null;
  setHeaderTheme: (theme: Theme | null) => void;
}

const initialContext: ContextType = {
  headerTheme: undefined,
  setHeaderTheme: () => null,
};

const HeaderThemeContext = createContext(initialContext);

export const HeaderThemeProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [headerTheme, setThemeState] = useState<Theme | undefined | null>(
    canUseDOM
      ? (document.documentElement.getAttribute("data-theme") as Theme)
      : undefined,
  );

  const setHeaderTheme = useCallback((themeToSet: Theme | null) => {
    setThemeState(themeToSet);
  }, []);

  return (
    <HeaderThemeContext value={{ headerTheme, setHeaderTheme }}>
      {children}
    </HeaderThemeContext>
  );
};

export const useHeaderTheme = (): ContextType => use(HeaderThemeContext);
