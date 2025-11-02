import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilters from './components/CategoryFilters';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="bg-zinc-50 text-zinc-900 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main>
          <Hero />
          <CategoryFilters />
          <ProductGrid />
        </main>
      </div>
    </div>
  );
}

export default App;
