import { useEffect, useState } from 'react';
import Browse from '@/components/Browse';
import CategoryFilters from '@/components/CategoryFilters';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import { trackPageView } from '@/utils/analytics';

function App() {
    const [activeTab, setActiveTab] = useState<'Discover' | 'Browse' | 'Blog' | 'Orders'>(
        'Discover'
    );

    useEffect(() => {
        // Track initial page view
        trackPageView(window.location.pathname);
        
        // Listen for tab switch events from category cards
        const handleTabSwitch = (event: CustomEvent) => {
            if (event.detail === 'Discover') {
                setActiveTab('Discover');
            }
        };
        
        window.addEventListener('switchtab', handleTabSwitch as EventListener);
        
        return () => {
            window.removeEventListener('switchtab', handleTabSwitch as EventListener);
        };
    }, []);

    return (
        <div className="bg-zinc-50 text-zinc-900 min-h-screen flex flex-col">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
                <Header activeTab={activeTab} setActiveTab={setActiveTab} />
                <main>
                    {activeTab === 'Browse' ? (
                        <Browse />
                    ) : (
                        <>
                            <Hero />
                            <CategoryFilters />
                            <ProductGrid />
                        </>
                    )}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default App;
