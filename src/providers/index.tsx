import type { FunctionComponent, PropsWithChildren } from "react";
import { HeaderThemeProvider } from "./HeaderTheme";
import { ThemeProvider } from "./Theme";

export const Providers: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <ThemeProvider>
      <HeaderThemeProvider>{children}</HeaderThemeProvider>
    </ThemeProvider>
  );
};
