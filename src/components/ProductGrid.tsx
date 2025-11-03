import { useCallback, useEffect, useState } from 'react';
import { products } from '@/constants';
import ProductCard from './ProductCard';

function ProductGrid() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter products based on URL category parameter
  const filterProducts = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category');

    if (!categoryParam || categoryParam === 'all') {
      setFilteredProducts(products);
      return;
    }

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
      setFilteredProducts(products.filter((product) => product.isStaffPick === true));
    } else if (categoryName) {
      // Filter by category name
      setFilteredProducts(products.filter((product) => product.category === categoryName));
    } else {
      setFilteredProducts(products);
    }
  }, []);

  // Initial filter on mount
  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  // Listen for URL changes (when category filter changes or browser back/forward)
  useEffect(() => {
    const handleUrlChange = () => {
      filterProducts();
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('categorychange', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('categorychange', handleUrlChange);
    };
  }, [filterProducts]);

  // Show empty state if no products match the filter
  if (filteredProducts.length === 0) {
    return (
      <div className="py-16 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-2">No products found</h2>
          <p className="text-zinc-600 text-sm">
            We couldn't find any products matching your filter. Try selecting a different category
            or browse all products.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* Show More Button */}
      <div className="flex justify-center mb-8">
        <button
          type="button"
          className="px-4 py-2 rounded-full border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 transition-colors duration-200 text-sm font-medium"
        >
          Show More
        </button>
      </div>
    </div>
  );
}

export default ProductGrid;
