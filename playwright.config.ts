import fs from "node:fs";
import path from "node:path";
import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

const PORT = process.env.PORT || 3000;

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
  testDir: "./playwright-tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: `http://localhost:${PORT}`,

    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
  webServer: {
    command: "pnpm dev",
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
  },
});
