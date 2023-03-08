module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "prettier"
  ],
  overrides: [
    /**
     * Config files (e.g. jest.config.js, tailwind.config.js)
     */
    {
      files: ["*.config.js"],
      env: {
        node: true
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    },
    /**
     * Jest Configuration
     */
    {
      files: ["**/__tests__/**/*.{ts,tsx}", "**/*.test.{ts,tsx}"],
      env: {
        jest: true
      },
      extends: ["plugin:jest/recommended", "plugin:jest/style"],
      plugins: ["jest"],
      rules: {
        "@typescript-eslint/no-non-null-assertion": "off"
      }
    }
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        caughtErrors: "none",
        varsIgnorePattern: "^_"
      }
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          ["builtin", "external"],
          "internal",
          ["sibling", "parent"],
          "index",
          "object",
          "type"
        ],
        alphabetize: {
          order: "asc"
        }
      }
    ],
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true
      }
    ]
  }
}
