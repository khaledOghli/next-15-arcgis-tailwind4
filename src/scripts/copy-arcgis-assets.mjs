import path from 'path';

import fs from 'fs-extra';

async function copyArcGISAssets() {
  const sourceBase = path.resolve('./node_modules/@arcgis/core/assets/esri/themes');
  const targetBase = path.resolve('./public/assets/esri/themes');

  // Clean existing assets
  await fs.remove(targetBase);
  console.log('✅ Existing ArcGIS assets deleted.');

  // Copy fonts directly from source (no nested folders)
  const fontsSource = path.resolve(sourceBase, 'base/fonts');
  const fontsDest = path.resolve(targetBase, 'base/fonts');

  // Copy entire fonts directory content directly
  await fs.copy(fontsSource, fontsDest, {
    filter: (src) =>
      src.endsWith('.woff') || src.endsWith('.woff2') || fs.statSync(src).isDirectory(),
  });

  console.log('✅ Fonts copied successfully.');

  // Helper function to copy CSS themes only
  const copyThemeCss = async (theme) => {
    const srcCss = path.resolve(sourceBase, theme, 'main.css');
    const destCssDir = path.resolve(targetBase, theme);
    await fs.ensureDir(destCssDir);
    await fs.copy(srcCss, path.join(destCssDir, 'main.css'));
    console.log(`✅ ${theme} theme CSS copied.`);
  };

  // Copy themes concurrently
  await Promise.all([copyThemeCss('dark'), copyThemeCss('light')]);

  console.log('🎉 ArcGIS assets setup completed successfully.');
}

copyArcGISAssets().catch((error) => {
  console.error('❌ Error copying ArcGIS assets:', error);
});
