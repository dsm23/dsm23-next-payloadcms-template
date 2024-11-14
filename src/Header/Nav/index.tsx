"use client";

import type { FunctionComponent } from "react";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
import { CMSLink } from "~/components/Link";
import type { Header as HeaderType } from "~/payload-types";

type Props = {
  header: HeaderType;
};

export const HeaderNav: FunctionComponent<Props> = ({ header }) => {
  const navItems = header?.navItems || [];

  return (
    <nav className="flex items-center gap-3" aria-label="Primary">
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="link" />;
      })}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
    </nav>
  );
};
