import { useEffect, useRef, useState } from 'react';
import { SearchIcon, XIcon } from '@/components/icons/CoreIcons';
import { trackSearch } from '@/utils/analytics';

// Helper to get initial search value from URL
function getInitialSearchValue(): string {
    if (typeof window === 'undefined') return '';
    const params = new URLSearchParams(window.location.search);
    return params.get('search') || '';
}

function Hero() {
    // Initialize state directly from URL to avoid race conditions
    const [searchValue, setSearchValue] = useState(getInitialSearchValue);
    const isInitialMount = useRef(true);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Mark initialization as complete after first render
    useEffect(() => {
        isInitialMount.current = false;
    }, []);

    // Listen for URL changes (browser back/forward)
    useEffect(() => {
        const handleUrlChange = () => {
            const params = new URLSearchParams(window.location.search);
            const searchParam = params.get('search');
            setSearchValue(searchParam || '');
        };

        window.addEventListener('popstate', handleUrlChange);
        window.addEventListener('searchchange', handleUrlChange);

        return () => {
            window.removeEventListener('popstate', handleUrlChange);
            window.removeEventListener('searchchange', handleUrlChange);
        };
    }, []);

    // Listen for focus search event from Header
    useEffect(() => {
        const handleFocusSearch = () => {
            // Scroll to Hero section smoothly
            const heroSection = document.querySelector('section');
            if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // Focus the input after a short delay to ensure scroll has started
            setTimeout(() => {
                searchInputRef.current?.focus();
            }, 100);
        };

        window.addEventListener('focussearch', handleFocusSearch);

        return () => {
            window.removeEventListener('focussearch', handleFocusSearch);
        };
    }, []);

    // Update URL when input value changes (skip on initial mount)
    useEffect(() => {
        // Skip URL update on initial mount to prevent clearing search param
        if (isInitialMount.current) {
            return;
        }

        const params = new URLSearchParams(window.location.search);
        const currentSearchParam = params.get('search') || '';
        const newSearchValue = searchValue.trim();

        // Only update URL if the value actually changed
        if (currentSearchParam === newSearchValue) {
            return;
        }

        if (newSearchValue) {
            params.set('search', newSearchValue);
        } else {
            params.delete('search');
        }

        // Update URL without page reload
        const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
        window.history.pushState({}, '', newUrl);

        // Dispatch custom event to notify ProductGrid
        window.dispatchEvent(new CustomEvent('searchchange'));
    }, [searchValue]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmedSearch = searchValue.trim();

        // Track search if there's a search term
        if (trimmedSearch) {
            trackSearch(trimmedSearch);
        }

        const params = new URLSearchParams(window.location.search);

        if (trimmedSearch) {
            params.set('search', trimmedSearch);
        } else {
            params.delete('search');
        }

        // Update URL without page reload
        const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
        window.history.pushState({}, '', newUrl);

        // Dispatch custom event to notify ProductGrid
        window.dispatchEvent(new CustomEvent('searchchange'));
    };

    return (
        <section className="text-center py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900 max-w-3xl mx-auto">
                    Discover well-designed, carefully curated products
                </h1>
                <p className="mt-3 max-w-xl mx-auto text-base text-zinc-500">
                    Explore a curated collection of timeless, design-led products across home, work,
                    and life.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 max-w-md mx-auto flex items-center bg-white border border-zinc-200/80 rounded-full shadow-sm pr-2"
                >
                    <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search products..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="grow bg-transparent px-5 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none"
                    />
                    {searchValue ? (
                        <button
                            type="button"
                            onClick={() => setSearchValue('')}
                            className="px-3 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors"
                            aria-label="Clear search"
                        >
                            <XIcon className="size-5" />
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="px-3 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors"
                            aria-label="Search"
                        >
                            <SearchIcon className="size-5" />
                        </button>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Hero;
