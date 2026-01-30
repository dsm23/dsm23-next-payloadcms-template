import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";
import config from "./playwright.config";

const PORT = process.env.PORT ?? "3000";

const injectFromEnvFile = () => {
  const envDir = ".";
  const envFiles = [
    /** default file */ `.env`,
    /** local file */ `.env.local`,
    /** mode file */ `.env.playwright`,
    /** mode local file */ `.env.playwright.local`,
  ];

  envFiles.forEach((file) => {
    const filePath = path.join(envDir, file);
    if (fs.existsSync(filePath)) {
      dotenv.config({ path: filePath });
    }
  });
};

injectFromEnvFile();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  ...config,
  use: {
    ...config.use,
    baseURL: `http://localhost:${PORT}`,
  },
  tag: "@prod",
  webServer: {
    command: `pnpm run build \\
        && ln -s "$(pwd)/public" .next/standalone \\
        && ln -s "$(pwd)/.next/static" .next/standalone/.next \\
        && PORT=${PORT} HOSTNAME=localhost node .next/standalone/server.js`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
  },
});
