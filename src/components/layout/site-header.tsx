import { ModeToggle } from '@/components/theme/theme-toggle';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function SiteHeader() {
  return (
    <header className='flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12'>
      <div className='flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6'>
        <div className='flex flex-1 items-center gap-1'>
          <SidebarTrigger className='-ml-1' />
          <Separator orientation='vertical' className='mx-2 data-[orientation=vertical]:h-4' />
          <h1 className='text-base font-medium'>Home</h1>
        </div>
        <Separator orientation='vertical' className='mx-2 data-[orientation=vertical]:h-4' />
        <ModeToggle />
      </div>
    </header>
  );
}
