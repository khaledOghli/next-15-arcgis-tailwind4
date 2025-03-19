import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals', // ✅ Enforces best practices for Next.js
      'plugin:@next/next/recommended', // ✅ Prevents common Next.js mistakes
      'next/typescript', // ✅ Ensures TypeScript best practices
      'plugin:@typescript-eslint/recommended', // ✅ Enforces TypeScript rules
      'plugin:react/recommended', // ✅ React best practices
      'plugin:react-hooks/recommended', // ✅ Ensures React hooks are used correctly
      'plugin:jsx-a11y/recommended', // ✅ Improves accessibility (a11y)
      'plugin:import/recommended', // ✅ Helps prevent import errors
      'plugin:import/typescript', // ✅ Improves TypeScript import handling
      'prettier', // ✅ Disables formatting rules conflicting with Prettier
    ],
    rules: {
      /** ✅ Formatting & Style Rules (Prettier) */
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1, // ✅ Ensures at most one empty line
          maxBOF: 0, // Prevents blank lines at the start of a file
          maxEOF: 1, // Allows a single blank line at the end
        },
      ],
      /** ✅ TypeScript Best Practices */
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

      /** ✅ React Best Practices */
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-key': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'error',
      'react/no-array-index-key': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      'react/jsx-no-comment-textnodes': 'error', // ✅ Prevents comments from affecting blank lines
      'react/jsx-newline': [
        'error',
        {
          prevent: true,
        },
      ],
      /** ✅ Next.js Best Practices */
      '@next/next/no-img-element': 'error',
      '@next/next/no-html-link-for-pages': 'warn',
      '@next/next/google-font-display': 'error',
      '@next/next/no-sync-scripts': 'error',

      /** ✅ Security & Performance */
      'no-console': ['warn', { allow: ['warn', 'error'] }], // ❌ Block console.log but allow warnings/errors
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'multi-line'],
      'consistent-return': 'error',

      /** ✅ Import & Module Rules */
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-unresolved': 'error',
      'import/no-duplicates': 'error',
      'import/no-cycle': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/eslint.config.mjs'],
        },
      ],
      /** ✅ Accessibility (A11y) */
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-static-element-interactions': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
    },
    ignorePatterns: ['node_modules', 'dist', 'build'],
  }),
];

export default eslintConfig;
