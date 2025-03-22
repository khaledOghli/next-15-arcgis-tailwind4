'use client';

import '@arcgis/map-components/components/arcgis-legend';
import '@arcgis/map-components/components/arcgis-map';
import '@arcgis/map-components/components/arcgis-search';
import { useEffect, useRef } from 'react';

export default function Map() {
  const mapRef = useRef<HTMLArcgisMapElement | null>(null);

  useEffect(() => {
    const darkLink = document.createElement('link') as HTMLLinkElement;
    darkLink.rel = 'stylesheet';
    darkLink.href = '/assets/esri/themes/dark/main.css';
    darkLink.disabled = theme !== 'dark';
    darkLink.id = 'dark-theme-css';

    const lightLink = document.createElement('link') as HTMLLinkElement;
    lightLink.rel = 'stylesheet';
    lightLink.href = '/assets/esri/themes/light/main.css';
    lightLink.disabled = theme !== 'light';
    lightLink.id = 'light-theme-css';

    document.head.prepend(darkLink);
    document.head.prepend(lightLink);

    return () => {
      document.head.removeChild(darkLink);
      document.head.removeChild(lightLink);
    };
  }, []);

  return (
    <div>
      <arcgis-map ref={mapRef} itemId='d5dda743788a4b0688fe48f43ae7beb9'>
        <arcgis-search position='top-right' />
        <arcgis-legend position='bottom-left' />
      </arcgis-map>
    </div>
  );
}
