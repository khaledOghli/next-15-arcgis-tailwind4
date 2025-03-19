'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./map'), { ssr: false });

export default function MapView() {
  return (
    <div className="flex h-full w-full">
      <Map />
    </div>
  );
}
