import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";
import redirects from "./redirects.js";

const NEXT_PUBLIC_SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

const nextConfig: NextConfig = {
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

export default withPayload(nextConfig);
