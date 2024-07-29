<<<<<<< HEAD
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
=======
import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
>>>>>>> 76bea16fd502ed1bdf187379666c891a12997fc4

// Flat Config (ESLint v9+)
export default [
  {
<<<<<<< HEAD
    files: ["**/*.{js,mjs,cjs,jsx}"],
=======
    files: ['**/*.{js,mjs,cjs,jsx}'],
>>>>>>> 76bea16fd502ed1bdf187379666c891a12997fc4
  },
  {
    settings: {
      react: {
<<<<<<< HEAD
        version: "detect",
=======
        version: 'detect',
>>>>>>> 76bea16fd502ed1bdf187379666c891a12997fc4
      },
    },
    plugins: {
      react: pluginReact,
<<<<<<< HEAD
      "react-hooks": pluginReactHooks,
      "react-refresh": pluginReactRefresh,
=======
      'react-hooks': pluginReactHooks,
      'react-refresh': pluginReactRefresh,
>>>>>>> 76bea16fd502ed1bdf187379666c891a12997fc4
    },
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser, // globalThis, window, console, alert, ...
        ...globals.node, // global, process, ...
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
<<<<<<< HEAD
      "react-refresh/only-export-components": "warn",
      "react/react-in-jsx-scope": "off",
=======
      'react-refresh/only-export-components': 'warn',
      'react/react-in-jsx-scope': 'off',
>>>>>>> 76bea16fd502ed1bdf187379666c891a12997fc4
    },
  },
];
