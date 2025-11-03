import { useEffect, useRef, useState } from "react";
import { SearchIcon, XIcon } from "@/components/icons/CoreIcons";

function Hero() {
    const [searchValue, setSearchValue] = useState("");
    const isInitialMount = useRef(true);

    // Read search param from URL on mount and when URL changes
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const searchParam = params.get("search");
        if (searchParam) {
            setSearchValue(searchParam);
        }
        // Mark initialization as complete after reading from URL
        isInitialMount.current = false;
    }, []);

    // Listen for URL changes (browser back/forward)
    useEffect(() => {
        const handleUrlChange = () => {
            const params = new URLSearchParams(window.location.search);
            const searchParam = params.get("search");
            setSearchValue(searchParam || "");
        };

        window.addEventListener("popstate", handleUrlChange);
        window.addEventListener("searchchange", handleUrlChange);

        return () => {
            window.removeEventListener("popstate", handleUrlChange);
            window.removeEventListener("searchchange", handleUrlChange);
        };
    }, []);

    // Update URL when input value changes (skip on initial mount)
    useEffect(() => {
        // Skip URL update on initial mount to prevent clearing search param
        if (isInitialMount.current) {
            return;
        }

        const params = new URLSearchParams(window.location.search);
        const currentSearchParam = params.get("search") || "";
        const newSearchValue = searchValue.trim();

        // Only update URL if the value actually changed
        if (currentSearchParam === newSearchValue) {
            return;
        }

        if (newSearchValue) {
            params.set("search", newSearchValue);
        } else {
            params.delete("search");
        }

        // Update URL without page reload
        const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ""}`;
        window.history.pushState({}, "", newUrl);

        // Dispatch custom event to notify ProductGrid
        window.dispatchEvent(new CustomEvent("searchchange"));
    }, [searchValue]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const params = new URLSearchParams(window.location.search);
        
        if (searchValue.trim()) {
            params.set("search", searchValue.trim());
        } else {
            params.delete("search");
        }

        // Update URL without page reload
        const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ""}`;
        window.history.pushState({}, "", newUrl);

        // Dispatch custom event to notify ProductGrid
        window.dispatchEvent(new CustomEvent("searchchange"));
    };

    return (
        <section className="text-center py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900 max-w-3xl mx-auto">
                    Discover well-designed, carefully curated products
                </h1>
                <p className="mt-3 max-w-xl mx-auto text-base text-zinc-500">
                    Subscribe for weekly emails featuring timeless, design-led products across home,
                    work, and life.
                </p>
                <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex items-center bg-white border border-zinc-200/80 rounded-full shadow-sm pr-2">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="grow bg-transparent px-5 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none"
                    />
                    {searchValue ? (
                        <button
                            type="button"
                            onClick={() => setSearchValue("")}
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
