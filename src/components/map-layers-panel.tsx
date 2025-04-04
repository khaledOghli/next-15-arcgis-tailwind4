'use client';

import { Layers, Navigation } from 'lucide-react';
import { useState } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

export default function MapLayersPanel() {
  const [activeTab, setActiveTab] = useState('layers');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLayers, setSelectedLayers] = useState({
    'Public Makani Data': true,
    'Public Data': true,
  });

  const handleLayerToggle = (layerName: string) => {
    setSelectedLayers((prev) => ({
      ...prev,
      [layerName]: !prev[layerName],
    }));
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-[#f5f3ee]'>
      <div className='w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-lg'>
        <div className='px-6 pt-4 pb-0'>
          <div className='mb-2 flex items-center justify-between'>
            <button onClick={() => setActiveTab('layers')} className='p-2'>
              <Layers className='h-6 w-6 text-[#5ecfc0]' />
            </button>
            <button onClick={() => setActiveTab('navigation')} className='p-2'>
              <Navigation className='h-6 w-6 text-gray-400' />
            </button>
          </div>
          <div className='mb-4 h-1 rounded-full bg-gray-100'>
            <div
              className='h-full rounded-full bg-[#5ecfc0]'
              style={{
                width: activeTab === 'layers' ? '50%' : '100%',
                marginLeft: activeTab === 'layers' ? '0' : '50%',
              }}
            />
          </div>
          <div className='mb-4'>
            <Input
              type='text'
              placeholder='Search Layers'
              className='w-full rounded-full border-gray-200 text-gray-500 placeholder:text-gray-400'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className='rounded-t-3xl bg-gray-50 px-6 pb-6'>
          <div className='space-y-3 pt-4'>
            {Object.entries(selectedLayers).map(([layerName, isSelected]) => (
              <div key={layerName} className='flex items-center space-x-3'>
                <Checkbox
                  id={layerName}
                  checked={isSelected}
                  onCheckedChange={() => handleLayerToggle(layerName)}
                  className='border-gray-300 data-[state=checked]:border-gray-300 data-[state=checked]:bg-white'
                />
                <div className='flex h-4 w-4 items-center justify-center'>
                  <div className='h-0 w-0 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-[#5ecfc0]' />
                </div>
                <label htmlFor={layerName} className='text-base font-medium text-gray-500'>
                  {layerName}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
