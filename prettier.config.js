const config = {
  plugins: [
    "prettier-plugin-css-order",
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  cssDeclarationSorterOrder: "smacss",
  importOrder: [
    "^react$",
    "<TYPES>^(react)",
    "^clsx$",
    "<TYPES>^(clsx)",
    "^@*next",
    "<TYPES>^(@*next)",
    "<BUILTIN_MODULES>",
    "<TYPES>^(node:)",
    "<THIRD_PARTY_MODULES>",
    "<TYPES>^([@a-z])",
    "^~/(.*)$",
    "<TYPES>^~/(.*)",
    "^[.]",
    "<TYPES>",
    "",
    "^(?!.*[.]css$)[./].*$",
    ".css$",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "importAttributes"],
  importOrderTypeScriptVersion: "5.7.2",
  tailwindFunctions: ["clsx", "cn", "cva", "cx"],
};

export default config;
