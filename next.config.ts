import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";
import { env } from "./env";
import redirects from "./redirects.js";

const NEXT_PUBLIC_SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: !process.env.CI,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item);

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(":", "") as
            | "http"
            | "https"
            | undefined,
        };
      }),
    ],
  },
  reactStrictMode: true,
  redirects,
};

export default () => {
  const plugins = [withPayload, withBundleAnalyzer({ enabled: env.ANALYZE })];

  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig,
  });

  return config;
};
