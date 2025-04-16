import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import nextjs from "@next/eslint-plugin-next";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    ignores: [".next/**", "node_modules/**"]
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "react-hooks": pluginReactHooks,
      "@next/next": nextjs
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "@next/next/no-html-link-for-pages": "off"
    }
  }
];