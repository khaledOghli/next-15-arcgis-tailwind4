import path from 'path';

import fs from 'fs-extra';

async function copyCalciteAssets() {
  const sourceDir = path.resolve('./node_modules/@esri/calcite-components/dist/calcite/assets');
  const targetDir = path.resolve('./public/arcgis/assets');

  // Remove existing Calcite assets
  await fs.remove(targetDir);
  console.log('✅ Existing Calcite assets deleted.');

  // Copy Calcite assets
  await fs.copy(sourceDir, targetDir);
  console.log('✅ Calcite assets copied successfully.');

  console.log('🎉 Calcite assets setup completed successfully.');
}

copyCalciteAssets().catch((error) => {
  console.error('❌ Error copying Calcite assets:', error);
});
