import React from 'react';
import { products } from '../constants';
import ProductCard from './ProductCard';

function ProductGrid() {
  return (
    <div className="pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
