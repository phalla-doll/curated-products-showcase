import { useCallback, useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/constants';

function ProductGrid() {
    const [filteredProducts, setFilteredProducts] = useState(products);

    // Filter products based on URL category and search parameters
    const filterProducts = useCallback(() => {
        const params = new URLSearchParams(window.location.search);
        const categoryParam = params.get('category');
        const searchParam = params.get('search');

        let filtered = products;

        // Apply category filter
        if (categoryParam && categoryParam !== 'all') {
            // Map category IDs to category names (handle special cases)
            const categoryMap: Record<string, string> = {
                tech: 'Tech',
                workspace: 'Workspace',
                home: 'Home',
                carry: 'Carry',
                books: 'Books',
                lifestyle: 'Lifestyle',
                picks: 'Picks', // Filter by isStaffPick
                new: 'New', // You might want to add a date field for this
            };

            const categoryName = categoryMap[categoryParam];

            if (categoryParam === 'picks') {
                // Filter by staff picks
                filtered = filtered.filter((product) => product.isStaffPick === true);
            } else if (categoryName) {
                // Filter by category name
                filtered = filtered.filter((product) => product.category === categoryName);
            }
        }

        // Apply search filter
        if (searchParam?.trim()) {
            const searchLower = searchParam.toLowerCase().trim();
            filtered = filtered.filter((product) => {
                const brandMatch = product.brand.toLowerCase().includes(searchLower);
                const nameMatch = product.name.toLowerCase().includes(searchLower);
                const categoryMatch = product.category.toLowerCase().includes(searchLower);
                const descriptionMatch = product.description?.toLowerCase().includes(searchLower);
                return brandMatch || nameMatch || categoryMatch || descriptionMatch;
            });
        }

        setFilteredProducts(filtered);
    }, []);

    // Initial filter on mount
    useEffect(() => {
        filterProducts();
    }, [filterProducts]);

    // Listen for URL changes (when category filter changes, search changes, or browser back/forward)
    useEffect(() => {
        const handleUrlChange = () => {
            filterProducts();
        };

        window.addEventListener('popstate', handleUrlChange);
        window.addEventListener('categorychange', handleUrlChange);
        window.addEventListener('searchchange', handleUrlChange);

        return () => {
            window.removeEventListener('popstate', handleUrlChange);
            window.removeEventListener('categorychange', handleUrlChange);
            window.removeEventListener('searchchange', handleUrlChange);
        };
    }, [filterProducts]);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
                {filteredProducts.length === 0 ? (
                    <div className="col-span-full flex items-center justify-center py-16">
                        <div className="max-w-md mx-auto text-center">
                            <h2 className="text-xl font-semibold text-zinc-900 tracking-tight mb-2">
                                No products found
                            </h2>
                            <p className="text-zinc-600 text-sm">
                                We couldn't find any products matching your filter. Try selecting a
                                different category or browse all products.
                            </p>
                        </div>
                    </div>
                ) : (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                )}
            </div>
            {/* Show More Button */}
            {/* <div className="flex justify-center mb-8">
                <button
                    type="button"
                    className="px-4 py-2 rounded-full border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 transition-colors duration-200 text-sm font-medium"
                >
                    Show More
                </button>
            </div> */}
        </div>
    );
}

export default ProductGrid;
