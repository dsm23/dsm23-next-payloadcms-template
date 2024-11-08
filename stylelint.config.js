// These are all the custom `@` (at) rules that we use within our custom PostCSS plugins
const CUSTOM_AT_RULES = [
  // Tailwind-specific at-rules
  "apply",
  "layer",
  "responsive",
  "screen",
  "tailwind",
  "variants",
  // PostCSS-specific at-rules
  "define-mixin",
  "mixin",
];

// Enforces certain selectors to be only in kebab-case notation
// We use these for id selectors and classname selectors
const ONLY_ALLOW_KEBAB_CASE_SELECTORS = [
  /^(?:[a-z]+(?:-[a-z]+)*)$/,
  { message: (s) => `Expected '${s}' to be in kebab-case` },
];

// Enforces certain selectors to be camelCase in module.css files
const ONLY_ALLOW_CAMELCASE_SELECTORS = [
  /^[a-z]+([A-Z][a-z]*)*$/,
  { message: (s) => `Expected '${s}' to be in camelCase` },
];

export default {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order", "stylelint-selector-bem-pattern"],
  rules: {
    // Enforces Element Class Names to be kebab-case
    "selector-class-pattern": ONLY_ALLOW_KEBAB_CASE_SELECTORS,
    // Enforces Element IDs to be kebab-case
    "selector-id-pattern": ONLY_ALLOW_KEBAB_CASE_SELECTORS,
    // Allow Tailwind-based CSS Rules
    "at-rule-no-unknown": [true, { ignoreAtRules: CUSTOM_AT_RULES }],
    // Ignore Tailwind's theme and screen functions
    "function-no-unknown": [true, { ignoreFunctions: ["theme", "screen"] }],
    // Allow the Global CSS Selector
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["global"] },
    ],
    // cssDeclarationSorterOrder: smacss
    "order/properties-order": [
      {
        properties: [
          "z-index",
          "display",
          "position",
          "top",
          "right",
          "bottom",
          "left",
        ],
      },
      {
        properties: ["visibility", "float", "clear"],
      },
      {
        properties: [
          "flex",
          "flex-direction",
          "flex-wrap",
          "flex-flow",
          "flex-basis",
          "flex-grow",
          "flex-shrink",
          "align-items",
          "justify-content",
          "align-self",
          "order",
        ],
      },
      {
        properties: [
          "width",
          "min-width",
          "max-width",
          "height",
          "min-height",
          "max-height",
        ],
      },
    ],
    "no-descending-specificity": null,
    // Disables the Level-4 Media Queries; Since they're more exotic and less known
    "media-feature-range-notation": "prefix",
    // Adopts the import notation from `postcss-import`
    "import-notation": "string",
  },
  overrides: [
    {
      files: ["**/*.module.css"],
      rules: {
        // Enforces Element Class Names to be camelCase in .module.css files
        "selector-class-pattern": ONLY_ALLOW_CAMELCASE_SELECTORS,
      },
    },
  ],
};
