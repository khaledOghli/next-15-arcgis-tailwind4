import Image from 'next/image';

import { Separator } from '@/components/ui/separator';

export function PageHeader() {
  return (
    <header className='bg-background sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b px-4 shadow-sm'>
      <div className='flex items-center gap-4'>
        {/* Left Logo */}
        <div className='flex items-center gap-2'>
          <Image src='/assets/images/gov-logo-white.svg' alt='Logo' width={108} height={43} />
        </div>
      </div>
      {/* Right Logo */}
      <div className='flex items-center gap-2'>
        <Image src='/assets/images/dh-logo-white.svg' alt='Logo' width={117} height={36} />
        <Separator orientation='vertical' className='bg-border flex !h-[36px]' />
        <Image src='/assets/images/dm-logo-white.svg' alt='Logo' width={155} height={36} />
      </div>
    </header>
  );
}
