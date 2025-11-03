import React from 'react';
import { products } from '../constants';
import ProductCard from './ProductCard';

function ProductGrid() {
  return (
    <div>
      <div className="pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* Show More Button */}
      <div className="flex justify-center mb-8">
        <button className="px-4 py-2 rounded-full border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 transition-colors duration-200 text-sm font-medium">
          Show More
        </button>
      </div>
    </div>
  );
}

export default ProductGrid;
