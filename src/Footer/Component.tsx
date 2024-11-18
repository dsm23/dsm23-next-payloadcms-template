import Link from "next/link";
import { CMSLink } from "~/components/Link";
import { ThemeSelector } from "~/providers/Theme/ThemeSelector";
import { getCachedGlobal } from "~/utilities/getGlobals";
import type { Footer } from "~/payload-types";

export async function Footer() {
  const footer: Footer = await getCachedGlobal("footer")();

  const navItems = footer?.navItems || [];

  return (
    <footer className="border-t border-border bg-black text-white dark:bg-card">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <picture>
            <img
              alt="Payload Logo"
              className="max-w-[6rem] invert-0"
              src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-logo-light.svg"
            />
          </picture>
        </Link>

        <div className="flex flex-col-reverse items-start gap-4 md:flex-row md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col gap-4 md:flex-row">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />;
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
