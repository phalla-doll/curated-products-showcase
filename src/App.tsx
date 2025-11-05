import { useEffect, useState } from 'react';
import Blog from '@/components/Blog';
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

    // Initialize history state with current tab on mount
    useEffect(() => {
        // Track initial page view
        trackPageView(window.location.pathname);

        // Initialize history state with current tab if not already set
        if (!window.history.state?.tab) {
            window.history.replaceState({ tab: 'Discover' }, '', window.location.href);
        }
    }, []); // Only run on mount - 'Discover' is the initial state value

    useEffect(() => {
        // Listen for tab switch events from category cards
        const handleTabSwitch = (event: CustomEvent) => {
            if (event.detail === 'Discover') {
                setActiveTab('Discover');
            }
        };

        // Listen for browser back/forward navigation to sync activeTab with URL
        const handlePopState = (event: PopStateEvent) => {
            // Try to restore tab state from history state
            if (event.state?.tab) {
                setActiveTab(event.state.tab);
            } else {
                // If no state stored, default to Discover (most common case)
                // This ensures the UI stays in sync with URL changes
                setActiveTab('Discover');
            }
        };

        window.addEventListener('switchtab', handleTabSwitch as EventListener);
        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('switchtab', handleTabSwitch as EventListener);
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    return (
        <div className="bg-zinc-50 text-zinc-900 min-h-screen flex flex-col">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
                <Header activeTab={activeTab} setActiveTab={setActiveTab} />
                <main>
                    {activeTab === 'Browse' ? (
                        <Browse />
                    ) : activeTab === 'Blog' ? (
                        <Blog />
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
