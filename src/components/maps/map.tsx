'use client';

import '@arcgis/map-components/components/arcgis-legend';
import '@arcgis/map-components/components/arcgis-map';
import '@arcgis/map-components/components/arcgis-search';

import { setAssetPath } from '@esri/calcite-components/dist/components';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

setAssetPath('/arcgis/');

export default function Map() {
  const mapRef = useRef<HTMLArcgisMapElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const darkLink = document.createElement('link') as HTMLLinkElement;
    darkLink.rel = 'stylesheet';
    darkLink.href = '/esri/themes/dark/main.css';
    darkLink.disabled = theme !== 'dark';
    darkLink.id = 'dark-theme-css';

    const lightLink = document.createElement('link') as HTMLLinkElement;
    lightLink.rel = 'stylesheet';
    lightLink.href = '/esri/themes/light/main.css';
    lightLink.disabled = theme !== 'light';
    lightLink.id = 'light-theme-css';

    document.head.prepend(darkLink);
    document.head.prepend(lightLink);

    return () => {
      document.head.removeChild(darkLink);
      document.head.removeChild(lightLink);
    };
  }, []);

  // Update enabled/disabled on theme change:
  useEffect(() => {
    const darkLink = document.getElementById('dark-theme-css') as HTMLLinkElement;
    const lightLink = document.getElementById('light-theme-css') as HTMLLinkElement;

    if (darkLink && lightLink) {
      darkLink.disabled = theme !== 'dark';
      lightLink.disabled = theme !== 'light';
    }
  }, [theme]);
  return (
    <div className='flex h-full w-full'>
      <arcgis-map ref={mapRef} itemId='d5dda743788a4b0688fe48f43ae7beb9'>
        <arcgis-search position='top-right' />
        <arcgis-legend position='bottom-left' />
      </arcgis-map>
    </div>
  );
}
