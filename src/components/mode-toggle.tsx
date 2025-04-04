'use client';
import { Layers } from 'lucide-react';
import { useState } from 'react';

import { MapLayersDrawer } from '@/components/map-layers-drawer';
import { Button } from '@/components/ui/button';
import { ViewModeToggle } from '@/components/view-mode-toggle';
import { useCounterStore } from '@/providers/map-store-provider';

export default function ModeToggle() {
  const [viewMode, setViewMode] = useState<'2D' | '3D'>('2D');
  const [open, setOpen] = useState(false);
  const { count, incrementCount, decrementCount } = useCounterStore((state) => state);

  return (
    <>
      {/* Map placeholder */}

      <div className='relative flex-1'>
        {/* 3D-2D Toggle - moved to left side */}
        <div className='absolute top-4 left-4 z-10'>
          {count}
          <ViewModeToggle value={viewMode} onChange={setViewMode} />
          <Button
            variant='outline'
            size='icon'
            className='top-4 right-4 z-10 bg-white shadow-md hover:bg-white/90'
            onClick={() => setOpen(true)}
          >
            <Layers className='h-5 w-5 text-[#5ecfc0]' />
          </Button>
        </div>
        {/* Layers drawer */}
      </div>
      <div className='absolute flex h-full w-full overflow-hidden rounded-b-md'>
        <MapLayersDrawer open={open} onOpenChange={setOpen} />
      </div>
    </>
  );
}
