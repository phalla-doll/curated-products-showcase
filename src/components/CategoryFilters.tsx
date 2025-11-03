import type React from 'react';
import { useState, useEffect } from 'react';
import { categories } from '../constants';
import type { Category } from '../types';

// FIX: Defined a proper props interface and used React.FC to correctly type the component,
// which resolves the issue with the 'key' prop and improves type safety for the 'category' prop.
interface CategoryButtonProps {
  category: Category;
  isActive: boolean;
  onClick: (id: string) => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, isActive, onClick }) => {
  const Icon = category.icon;
  return (
    <button
      type="button"
      onClick={() => onClick(category.id)}
      className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full transition-colors duration-200 whitespace-nowrap ${
        isActive
          ? 'bg-zinc-900 text-white border-zinc-900'
          : 'bg-white text-zinc-700 border-zinc-200/80 hover:bg-zinc-100 hover:border-zinc-300'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span>{category.name}</span>
      {category.count > 0 && <span className="text-xs text-zinc-400">{category.count}</span>}
    </button>
  );
};

function CategoryFilters() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Read category from URL on mount and when URL changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, []);

  // Listen for popstate events (back/forward button)
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const categoryParam = params.get('category');
      setActiveCategory(categoryParam || 'all');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);

    // Update URL without page reload
    const params = new URLSearchParams(window.location.search);
    if (categoryId === 'all') {
      params.delete('category');
    } else {
      params.set('category', categoryId);
    }

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;

    window.history.pushState({}, '', newUrl);

    // Dispatch custom event to notify ProductGrid of URL change
    window.dispatchEvent(new CustomEvent('categorychange'));
  };

  return (
    <div className="py-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2">
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
        <button
          type="button"
          className="flex-shrink-0 px-4 py-2 text-sm font-medium border rounded-full bg-white text-zinc-700 border-zinc-200/80 hover:bg-zinc-100 hover:border-zinc-300 whitespace-nowrap"
        >
          See More
        </button>
      </div>
    </div>
  );
}

export default CategoryFilters;
