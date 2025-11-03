import CategoryFilters from './components/CategoryFilters';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="bg-zinc-50 text-zinc-900 min-h-screen flex flex-col">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <Header />
        <main>
          <Hero />
          <CategoryFilters />
          <ProductGrid />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
