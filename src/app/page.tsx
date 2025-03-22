import { AppSidebar } from '@/components/layout/app-sidebar';
import { SiteHeader } from '@/components/layout/site-header';
import MapView from '@/components/maps/MapView';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar variant='inset' />
      <SidebarInset>
        <SiteHeader />
        <div className='flex flex-1 flex-col'>
          <div className='@container-[size] flex flex-1 flex-col gap-2'>
            <MapView />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
