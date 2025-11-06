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
    const isNavigating = useRef(false);

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

        // Skip if this change is due to browser navigation (popstate/hashchange)
        // to prevent double history manipulation
        if (isNavigating.current) {
            isNavigating.current = false;
            return;
        }

        const hash = activeTab === 'Discover' ? '' : `#${activeTab.toLowerCase()}`;
        let newUrl = window.location.pathname + hash;

        // When switching to Discover, clear category parameter
        if (activeTab === 'Discover') {
            const params = new URLSearchParams(window.location.search);
            params.delete('category');
            const queryString = params.toString();
            newUrl = window.location.pathname + (queryString ? `?${queryString}` : '') + hash;
            // Dispatch event to notify CategoryFilters to update to "All"
            window.dispatchEvent(new CustomEvent('categorychange'));
        }

        window.history.pushState({ tab: activeTab }, '', newUrl);
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
            let newTab: Tab;
            // Try to restore tab state from history state
            if (event.state?.tab) {
                newTab = event.state.tab;
            } else {
                // Fall back to reading from URL hash
                newTab = getTabFromHash();
            }
            // Set flag to prevent tab-change effect from running
            isNavigating.current = true;
            setActiveTab(newTab);

            // When navigating to Discover, clear category parameter and notify CategoryFilters
            if (newTab === 'Discover') {
                const params = new URLSearchParams(window.location.search);
                if (params.has('category')) {
                    params.delete('category');
                    const queryString = params.toString();
                    const newUrl = window.location.pathname + (queryString ? `?${queryString}` : '');
                    window.history.replaceState({ tab: newTab }, '', newUrl);
                    // Dispatch event to notify CategoryFilters to update to "All"
                    window.dispatchEvent(new CustomEvent('categorychange'));
                }
            }
        };

        // Listen for hash changes (in case user manually changes URL)
        const handleHashChange = () => {
            const newTab = getTabFromHash();
            // Set flag to prevent tab-change effect from running
            isNavigating.current = true;
            setActiveTab(newTab);
            // Clear query parameters, keep only the hash
            const hash = window.location.hash;
            let newUrl = window.location.pathname + hash;

            // When switching to Discover, clear category parameter
            if (newTab === 'Discover') {
                const params = new URLSearchParams(window.location.search);
                params.delete('category');
                const queryString = params.toString();
                newUrl = window.location.pathname + (queryString ? `?${queryString}` : '') + hash;
                // Dispatch event to notify CategoryFilters to update to "All"
                window.dispatchEvent(new CustomEvent('categorychange'));
            }

            window.history.replaceState({ tab: newTab }, '', newUrl);
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
