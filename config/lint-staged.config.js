// module.exports = {
//   '*.css': ['prettier --write'],
//   '*.json': ['prettier --write'],
//   '*.md': ['prettier --write'],
//   '*.scss': ['prettier --write'],
//   '*.yaml': ['prettier --write'],
//   '*.{js,jsx,ts,tsx}': [
//     'eslint --fix',
//     'prettier --write',
//     'tsc --noEmit --excludeFiles "node_modules || public || commitlint.config.js || eslint.config.mjs"',
//   ],
// };

// /** @type {import('lint-staged').Config} */
// export default {
//   '*.css': ['prettier --write'],
//   '*.json': ['prettier --write'],
//   '*.md': ['prettier --write'],
//   '*.scss': ['prettier --write'],
//   '*.yaml': ['prettier --write'],
//   '*.{js,jsx,ts,tsx}': (files) => {
//     const filtered = files.filter(
//       (file) =>
//         !file.includes('public/') &&
//         !file.includes('node_modules/') &&
//         !file.includes('commitlint.config.js') &&
//         !file.includes('eslint.config.mjs')
//     );

//     return [
//       `eslint --fix ${filtered.join(' ')}`,
//       `prettier --write ${filtered.join(' ')}`,
//       filtered.length ? 'tsc --noEmit' : null, // Only run tsc if needed
//     ].filter(Boolean); // Remove nulls
//   },
// };
