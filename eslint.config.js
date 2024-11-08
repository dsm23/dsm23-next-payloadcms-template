import path from "node:path";
import { fileURLToPath } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import globals from "globals";
import ts from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

const compat = new FlatCompat();

const compatConfig = compat.config({
  extends: [
    // https://github.com/vercel/next.js/discussions/49337
    "plugin:@next/eslint-plugin-next/core-web-vitals",

    // https://github.com/facebook/react/issues/28313
    "plugin:react-hooks/recommended",
  ],
});

export default ts.config(
  includeIgnoreFile(gitignorePath),
  {
    files: ["**/*.{js,mjs,cjs,ts,md,mdx,jsx,tsx}"],
    languageOptions: {
      globals: globals.nodeBuiltin,
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.js", "*.mjs"],
        },
        tsconfigDirName: import.meta.dirname,
      },
    },
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  react.configs.flat["jsx-runtime"],
  jsxA11y.flatConfigs.recommended,
  prettier,
  ...compatConfig,
  {
    files: ["!**/src/**"],
    ...ts.configs.disableTypeChecked,
  },
  {
    rules: {
      // TODO: enable these rules
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
);
