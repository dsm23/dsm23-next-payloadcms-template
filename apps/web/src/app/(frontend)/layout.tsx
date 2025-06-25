import type { ReactNode } from "react";
import { draftMode, headers } from "next/headers";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { AdminBar } from "~/components/AdminBar";
import { Footer } from "~/Footer/Component";
import { Header } from "~/Header/Component";
import { Providers } from "~/providers";
import { InitTheme } from "~/providers/Theme/InitTheme";
import { mergeOpenGraph } from "~/utilities/merge-open-graph";
import { cn } from "~/utilities/ui";

import "./globals.css";

import { getServerSideURL } from "~/utilities/get-url";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { isEnabled } = await draftMode();

  const headersList = await headers();
  const nonce = headersList.get("x-nonce") ?? undefined;

  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme nonce={nonce} />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: "summary_large_image",
    creator: "@payloadcms",
  },
};
