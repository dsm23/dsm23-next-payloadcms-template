"use client";

import React from "react";
import Link from "next/link";
import { CMSLink } from "@/components/Link";
import { SearchIcon } from "lucide-react";
import type { Header as HeaderType } from "@/payload-types";

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || [];

  return (
    <nav className="flex items-center gap-3">
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
