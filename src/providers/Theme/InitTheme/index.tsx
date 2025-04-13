import type { FunctionComponent } from "react";
import Script from "next/script";
import type { ScriptProps } from "next/script";
import { defaultTheme, themeLocalStorageKey } from "../ThemeSelector/types";

export const InitTheme: FunctionComponent<ScriptProps> = (props) => {
  return (
    <Script
      {...props}
      dangerouslySetInnerHTML={{
        __html: `
  (function () {
    function getImplicitPreference() {
      var mediaQuery = '(prefers-color-scheme: dark)'
      var mql = window.matchMedia(mediaQuery)
      var hasImplicitPreference = typeof mql.matches === 'boolean'

      if (hasImplicitPreference) {
        return mql.matches ? 'dark' : 'light'
      }

      return null
    }

    function themeIsValid(theme) {
      return theme === 'light' || theme === 'dark'
    }

    var themeToSet = '${defaultTheme}'
    var preference = window.localStorage.getItem('${themeLocalStorageKey}')

    if (themeIsValid(preference)) {
      themeToSet = preference
    } else {
      var implicitPreference = getImplicitPreference()

      if (implicitPreference) {
        themeToSet = implicitPreference
      }
    }

    document.documentElement.setAttribute('data-theme', themeToSet)
  })();
  `,
      }}
      id="theme-script"
      strategy={
        process.env.NODE_ENV === "development"
          ? "afterInteractive"
          : "beforeInteractive"
      }
    />
  );
};
