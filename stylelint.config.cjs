module.exports = {
  extends: [
    'stylelint-config-standard', // ✨ Best practices for modern CSS
    'stylelint-config-tailwindcss', // 🌬 Tailwind utility checks (redundant classes, etc.)
    'stylelint-prettier/recommended', // 🎯 Run Prettier as a Stylelint rule
  ],
  plugins: ['stylelint-prettier'], // 💅 Required for Prettier integration
  rules: {
    'no-empty-source': null, // ✅ Avoid false positives with Tailwind-only files
    'block-no-empty': true, // ❌ Prevent empty blocks like `div {}`
    'color-no-invalid-hex': true, // ❌ Prevent typos like `#gggggg`
    'selector-class-pattern': null, // ✅ Allow any class name
    'no-duplicate-selectors': true, // ❌ Prevent duplicate selectors
    'at-rule-no-deprecated': null, // ✅ Allow all at-rules
  },
  ignoreFiles: [
    '**/*.js',
    '**/*.ts',
    '**/*.tsx',
    'public/**',
    'node_modules/**',
    '.next/**',
    'dist/**',
    'build/**',
    'config/**',
  ],
};
