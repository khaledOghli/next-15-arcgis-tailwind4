import { PageHeader } from '@/components/layout/fluid-sidebar/page-header';
import { AppSidebar } from '@/components/layout/fluid-sidebar/sidebar';
import { SiteHeader } from '@/components/layout/site-header';
import MapView from '@/components/maps/MapView';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { sidebarPresets } from '@/lib/sidebar-config';
export default function Home() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className='flex min-h-screen w-full flex-col'>
        {/* Full-width header at the top - now inside SidebarProvider */}
        <PageHeader />
        {/* Main content area with sidebar and content */}
        <div className='flex flex-1 overflow-hidden'>
          <AppSidebar config={sidebarPresets.dramatic} />
          <SidebarInset className='flex flex-col p-3'>
            <SiteHeader />
            <div className='flex flex-1 flex-col'>
              <div className='@container-[size] flex flex-1 flex-col gap-2'>
                <MapView />
              </div>
            </div>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>

    // <SidebarProvider defaultOpen={true}>
    //   <AppSidebar variant='inset' />
    //   <SidebarInset>
    //     <SiteHeader />
    //     <div className='flex flex-1 flex-col'>
    //       <div className='@container-[size] flex flex-1 flex-col gap-2'>
    //         <MapView />
    //       </div>
    //     </div>
    //   </SidebarInset>
    // </SidebarProvider>
  );
}
