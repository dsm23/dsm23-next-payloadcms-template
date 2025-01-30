import nextJest from "next/jest.js";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const createJestConfig = nextJest({
  dir: "./",
});

/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
const customJestConfig = {
  collectCoverageFrom: [
    "**/src/**/*.{js,jsx,ts,tsx}",
    "!**/src/**/*.stories.{js,jsx,ts,tsx}",
  ],
  coveragePathIgnorePatterns: [".next/", "dist/", "node_modules/", "stories/"],
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 1,
      lines: 1,
      statements: 1,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/playwright-tests"],
  moduleNameMapper: {
    // https://github.com/lucide-icons/lucide/issues/2734#issuecomment-2597970172
    "lucide-react": require.resolve("lucide-react"),
    "^~/(.*)$": "<rootDir>/src/$1",
  },
};

const config = createJestConfig(customJestConfig);

export default config;
