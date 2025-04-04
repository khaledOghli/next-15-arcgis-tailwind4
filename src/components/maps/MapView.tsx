'use client';

import dynamic from 'next/dynamic';

import ModeToggle from '@/components/mode-toggle';

const Map = dynamic(() => import('./map'), { ssr: false });

export default function MapView() {
  return (
    <div className='relative flex h-full w-full'>
      <ModeToggle />
      <Map />
    </div>
  );
}
