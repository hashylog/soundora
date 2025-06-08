import { AppSidebar } from '@/components/app-sidebar';
import NowPlaying from '@/components/now-playing';
import { SidebarProvider } from '@/components/ui/sidebar';
import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

export default function Home() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <SidebarProvider>
                <AppSidebar/>

                <title>Soundora</title>

                <div className="container mx-auto">
                    <div className="flex items-center justify-center h-screen">
                        <h1 className="text-7xl text-center font-bold">Soundora</h1>
                    </div>
                </div>


                {/* Footer */}
                <NowPlaying/>

            </SidebarProvider>
        </>
    );
}
