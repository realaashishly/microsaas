import Sidebar from '@/components/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='relative h-screen flex flex-col md:flex-row overflow-hidden'>
            <aside className='hidden md:block max-w-56 border-r border-[#4c37ef]/10 bg-[#d2f8e7]/5 py-6 h-full relative z-10'>
                <Sidebar />
            </aside>

            <div className='flex-1 flex flex-col overflow-hidden'>
                <main className='flex-1 overflow-y-auto relative z-10'>
                    <div className='relative min-h-full flex flex-col p-6'>
                        <div className='h-full flex flex-col flex-1 space-y-6'>
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
