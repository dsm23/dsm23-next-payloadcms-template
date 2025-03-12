/**
 *  @type {import("prettier").Options}
 */
const config = {
  plugins: ["prettier-plugin-css-order", "prettier-plugin-tailwindcss"],
  cssDeclarationSorterOrder: "smacss",
  tailwindFunctions: ["clsx", "cn", "cva", "cx"],
};

export default config;
