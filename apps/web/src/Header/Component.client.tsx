"use client";

import { useEffect, useState } from "react";
import type { FunctionComponent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "~/components/Logo/Logo";
import { useHeaderTheme } from "~/providers/HeaderTheme";
import type { Header } from "~/payload-types";
import { HeaderNav } from "./Nav";

interface HeaderClientProps {
  data: Header;
}

export const HeaderClient: FunctionComponent<HeaderClientProps> = ({
  data,
}) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null);
  const { headerTheme, setHeaderTheme } = useHeaderTheme();
  const pathname = usePathname();

  useEffect(() => {
    setHeaderTheme(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme]);

  return (
    <header
      className="relative z-20 container"
      {...(theme ? { "data-theme": theme } : {})}
    >
      <div className="flex justify-between py-8">
        <Link href="/">
          <Logo
            loading="eager"
            priority="high"
            className="invert dark:invert-0"
          />
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  );
};
