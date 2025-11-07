import { useEffect, useRef, useState } from 'react';
import Blog from '@/components/Blog';
import BlogDetail from '@/components/BlogDetail';
import Browse from '@/components/Browse';
import CategoryFilters from '@/components/CategoryFilters';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Orders from '@/components/Orders';
import ProductGrid from '@/components/ProductGrid';
import { trackPageView } from '@/utils/analytics';

type Tab = 'Discover' | 'Browse' | 'Blog' | 'Orders';

// Helper function to parse blog detail route from hash
const parseBlogRoute = (hash: string): { tab: Tab; blogId: number | null } => {
    const normalizedHash = hash.toLowerCase();

    // Check for blog detail route: #blog/:id
    const blogDetailMatch = normalizedHash.match(/^blog\/(\d+)$/);
    if (blogDetailMatch) {
        return { tab: 'Blog', blogId: parseInt(blogDetailMatch[1], 10) };
    }

    // Check for regular blog route
    if (normalizedHash === 'blog') {
        return { tab: 'Blog', blogId: null };
    }

    // Check for other tabs
    if (normalizedHash === 'browse' || normalizedHash === 'orders') {
        return {
            tab: (normalizedHash.charAt(0).toUpperCase() + normalizedHash.slice(1)) as Tab,
            blogId: null,
        };
    }

    return { tab: 'Discover', blogId: null };
};

// Helper function to get tab from URL hash
const getTabFromHash = (): Tab => {
    const hash = window.location.hash.slice(1).toLowerCase();
    if (hash === 'browse' || hash === 'blog' || hash === 'orders') {
        return (hash.charAt(0).toUpperCase() + hash.slice(1)) as Tab;
    }
    // Check for blog detail route
    if (hash.startsWith('blog/')) {
        return 'Blog';
    }
    return 'Discover';
};

function App() {
    const [activeTab, setActiveTab] = useState<Tab>(getTabFromHash());
    const [blogPostId, setBlogPostId] = useState<number | null>(null);
    const isInitialMount = useRef(true);
    const isNavigating = useRef(false);

    // Initialize tab from URL hash on mount
    useEffect(() => {
        // Track initial page view
        trackPageView(window.location.pathname);

        // Parse route from hash
        const hash = window.location.hash.slice(1);
        const route = parseBlogRoute(hash);

        setActiveTab(route.tab);
        setBlogPostId(route.blogId);

        // Update URL using replaceState (doesn't add to history)
        let urlHash = '';
        if (route.tab === 'Blog' && route.blogId !== null) {
            urlHash = `#blog/${route.blogId}`;
        } else if (route.tab !== 'Discover') {
            urlHash = `#${route.tab.toLowerCase()}`;
        }

        // Build the new URL
        // Remove category parameter for all tabs (category filters only apply to Discover tab)
        let newUrl = window.location.pathname;
        const params = new URLSearchParams(window.location.search);
        params.delete('category');
        const queryString = params.toString();
        newUrl = window.location.pathname + (queryString ? `?${queryString}` : '') + urlHash;

        // Dispatch event to notify CategoryFilters to update to "All" when on Discover tab
        if (route.tab === 'Discover') {
            window.dispatchEvent(new CustomEvent('categorychange'));
        }

        window.history.replaceState({ tab: route.tab, blogId: route.blogId }, '', newUrl);

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

        let hash = '';
        if (activeTab === 'Blog' && blogPostId !== null) {
            hash = `#blog/${blogPostId}`;
        } else if (activeTab !== 'Discover') {
            hash = `#${activeTab.toLowerCase()}`;
        }

        // Build the new URL
        // Remove category parameter for all tabs (category filters only apply to Discover tab)
        // Preserve other search parameters like 'search'
        let newUrl = window.location.pathname;
        const params = new URLSearchParams(window.location.search);
        params.delete('category');
        const queryString = params.toString();
        newUrl = window.location.pathname + (queryString ? `?${queryString}` : '') + hash;

        // Dispatch event to notify CategoryFilters to update to "All" when switching to Discover tab
        if (activeTab === 'Discover') {
            window.dispatchEvent(new CustomEvent('categorychange'));
        }

        window.history.pushState({ tab: activeTab, blogId: blogPostId }, '', newUrl);
    }, [activeTab, blogPostId]);

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
            let newBlogId: number | null = null;

            // Try to restore tab state from history state
            if (event.state?.tab) {
                newTab = event.state.tab;
                newBlogId = event.state.blogId || null;
            } else {
                // Fall back to reading from URL hash
                const hash = window.location.hash.slice(1);
                const route = parseBlogRoute(hash);
                newTab = route.tab;
                newBlogId = route.blogId;
            }

            // Set flag to prevent tab-change effect from running
            isNavigating.current = true;
            setActiveTab(newTab);
            setBlogPostId(newBlogId);

            // Remove category parameter for all tabs (category filters only apply to Discover tab)
            // Preserve other search parameters like 'search'
            const params = new URLSearchParams(window.location.search);
            if (params.has('category')) {
                params.delete('category');
                const queryString = params.toString();
                const newUrl =
                    window.location.pathname +
                    (queryString ? `?${queryString}` : '') +
                    window.location.hash;
                window.history.replaceState({ tab: newTab, blogId: newBlogId }, '', newUrl);
            }

            // Dispatch event to notify CategoryFilters to update to "All" when navigating to Discover tab
            if (newTab === 'Discover') {
                window.dispatchEvent(new CustomEvent('categorychange'));
            }
        };

        // Listen for hash changes (in case user manually changes URL)
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1);
            const route = parseBlogRoute(hash);

            // Set flag to prevent tab-change effect from running
            isNavigating.current = true;
            setActiveTab(route.tab);
            setBlogPostId(route.blogId);

            // Remove category parameter for all tabs (category filters only apply to Discover tab)
            // Preserve other search parameters like 'search'
            const fullHash = window.location.hash;
            const params = new URLSearchParams(window.location.search);
            params.delete('category');
            const queryString = params.toString();
            const newUrl =
                window.location.pathname + (queryString ? `?${queryString}` : '') + fullHash;

            // Dispatch event to notify CategoryFilters to update to "All" when switching to Discover tab
            if (route.tab === 'Discover') {
                window.dispatchEvent(new CustomEvent('categorychange'));
            }

            window.history.replaceState({ tab: route.tab, blogId: route.blogId }, '', newUrl);
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
                        blogPostId !== null ? (
                            <BlogDetail
                                postId={blogPostId}
                                onBack={() => {
                                    setBlogPostId(null);
                                }}
                                onPostClick={(postId) => {
                                    setBlogPostId(postId);
                                }}
                            />
                        ) : (
                            <Blog
                                onPostClick={(postId) => {
                                    setBlogPostId(postId);
                                }}
                            />
                        )
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
