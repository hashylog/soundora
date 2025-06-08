import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar"

export default function Discover() {
    return (
        <>
            <SidebarProvider>
                <title>Soundora</title>
                <AppSidebar/>

                <div className="container mx-auto h-screen">
                    {/* Search Bar */}
                    <div className="w-full max-w-md mx-auto p-5">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
                        />
                    </div>
                    
                </div>

            </SidebarProvider>
        </>
    );
}