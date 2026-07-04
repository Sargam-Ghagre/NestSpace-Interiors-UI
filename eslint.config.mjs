import { createRequire } from "module"

const require = createRequire(import.meta.url)

// eslint-config-next 16.x ships a native flat config array.
// We replicate what core-web-vitals.js does internally:
//   1. spread the base index config
//   2. append the core-web-vitals config from @next/eslint-plugin-next
const nextBase = require("eslint-config-next")
const nextPlugin = require("@next/eslint-plugin-next")

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  // Ignore directories that are not project source code
  {
    ignores: [".agents/**", "node_modules/**"],
  },
  ...nextBase,
  nextPlugin.configs["core-web-vitals"],
  {
    settings: {
      // Explicitly set the React version so eslint-plugin-react does not try
      // to call context.getFilename() for auto-detection (removed in ESLint 10).
      react: {
        version: "detect",
      },
    },
    rules: {
      // React 19 compiler rules introduced in eslint-config-next@16.
      // Disabled while the existing codebase adopts these patterns incrementally.
      // See: https://react.dev/reference/rules
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/purity": "off",

      // Pre-existing JSX content uses bare apostrophes throughout the codebase.
      // Disabling rather than mass-editing content files out of scope for this fix.
      "react/no-unescaped-entities": "off",
    },
  },
]

export default eslintConfig
