import nextJest from "next/jest.js";

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
  injectGlobals: false,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/playwright-tests/"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
  },
};

const config = createJestConfig(customJestConfig);

export default config;
