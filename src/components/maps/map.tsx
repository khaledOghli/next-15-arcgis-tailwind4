'use client';

import React, { useEffect, useRef } from 'react';
import { defineCustomElements as defineMapElements } from '@arcgis/map-components/dist/loader';
import '@arcgis/map-components/components/arcgis-map';
import '@arcgis/map-components/components/arcgis-legend';
import '@arcgis/map-components/components/arcgis-search';

export default function Map() {
  const mapRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    defineMapElements(window, {
      resourcesUrl: 'https://js.arcgis.com/map-components/4.30/assets',
    });

    if (mapRef.current) {
      mapRef.current.addEventListener('arcgisViewReadyChange', (event) => {
        console.log('MapView ready', event);
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.removeEventListener('arcgisViewReadyChange', () => {});
      }
    };
  }, []);

  return (
    <div>
      <arcgis-map ref={mapRef} itemId="d5dda743788a4b0688fe48f43ae7beb9">
        <arcgis-search position="top-right"></arcgis-search>
        <arcgis-legend position="bottom-left"></arcgis-legend>
      </arcgis-map>
    </div>
  );
}
