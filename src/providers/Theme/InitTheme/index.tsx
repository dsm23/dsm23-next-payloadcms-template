import type { FunctionComponent } from "react";
import { headers } from "next/headers";
import Script from "next/script";
import { defaultTheme, themeLocalStorageKey } from "../ThemeSelector/types";

export const InitTheme: FunctionComponent = async () => {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce") ?? undefined;

  return (
    // TODO: might need this lint rule later: eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script
      nonce={nonce}
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
      // handle CSP issues in dev
      strategy={
        process.env.NODE_ENV === "production"
          ? "beforeInteractive"
          : "afterInteractive"
      }
    />
  );
};
