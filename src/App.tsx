import { useEffect, useRef, useState } from 'react';
import Blog from '@/components/Blog';
import Browse from '@/components/Browse';
import CategoryFilters from '@/components/CategoryFilters';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Orders from '@/components/Orders';
import ProductGrid from '@/components/ProductGrid';
import { trackPageView } from '@/utils/analytics';

type Tab = 'Discover' | 'Browse' | 'Blog' | 'Orders';

// Helper function to get tab from URL hash
const getTabFromHash = (): Tab => {
    const hash = window.location.hash.slice(1).toLowerCase();
    if (hash === 'browse' || hash === 'blog' || hash === 'orders') {
        return (hash.charAt(0).toUpperCase() + hash.slice(1)) as Tab;
    }
    return 'Discover';
};

function App() {
    const [activeTab, setActiveTab] = useState<Tab>(getTabFromHash());
    const isInitialMount = useRef(true);

    // Initialize tab from URL hash on mount
    useEffect(() => {
        // Track initial page view
        trackPageView(window.location.pathname);

        // Initialize tab from URL hash and update URL using replaceState (doesn't add to history)
        const initialTab = getTabFromHash();
        const hash = initialTab === 'Discover' ? '' : `#${initialTab.toLowerCase()}`;
        window.history.replaceState({ tab: initialTab }, '', hash || window.location.pathname);

        // Mark as no longer initial mount
        isInitialMount.current = false;
    }, []);

    // Handle tab changes and update URL
    useEffect(() => {
        // Skip on initial mount to avoid duplicate history entry
        if (isInitialMount.current) {
            return;
        }

        const hash = activeTab === 'Discover' ? '' : `#${activeTab.toLowerCase()}`;
        window.history.pushState({ tab: activeTab }, '', hash || window.location.pathname);
    }, [activeTab]);

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
                // Fall back to reading from URL hash
                setActiveTab(getTabFromHash());
            }
        };

        // Listen for hash changes (in case user manually changes URL)
        const handleHashChange = () => {
            setActiveTab(getTabFromHash());
        };

        window.addEventListener('switchtab', handleTabSwitch as EventListener);
        window.addEventListener('popstate', handlePopState);
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('switchtab', handleTabSwitch as EventListener);
            window.removeEventListener('popstate', handlePopState);
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div className="bg-zinc-50 text-zinc-900 min-h-screen flex flex-col">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1">
                <Header activeTab={activeTab} setActiveTab={setActiveTab} />
                <main>
                    {activeTab === 'Browse' ? (
                        <Browse />
                    ) : activeTab === 'Blog' ? (
                        <Blog />
                    ) : activeTab === 'Orders' ? (
                        <Orders />
                    ) : (
                        <div className="max-w-screen-xl mx-auto">
                            <Hero />
                            <CategoryFilters />
                            <ProductGrid />
                        </div>
                    )}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default App;
