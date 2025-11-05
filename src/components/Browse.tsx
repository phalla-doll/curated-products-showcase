import type React from 'react';
import { useState } from 'react';
import { ExpandIcon } from '@/components/icons/CoreIcons';
import ProductDialog from '@/components/ProductDialog';
import { categories, products } from '@/constants';
import type { Product } from '@/types';
import { trackProductClick } from '@/utils/analytics';

// Get representative product for each category
const getCategoryRepresentative = (categoryName: string): Product | null => {
    // Filter out special categories
    const excludedCategories = ['all', 'new', 'picks'];
    const category = categories.find((cat) => cat.name === categoryName);
    
    if (!category || excludedCategories.includes(category.id)) {
        return null;
    }

    // Find the first product in this category
    const categoryProduct = products.find((product) => product.category === categoryName);
    return categoryProduct || null;
};

// Get all categories with their representative products
const getCategoryCards = () => {
    return categories
        .filter((category) => {
            // Exclude special categories that don't have actual products
            return !['all', 'new', 'picks'].includes(category.id);
        })
        .map((category) => {
            const representativeProduct = getCategoryRepresentative(category.name);
            return {
                category,
                product: representativeProduct,
            };
        })
        .filter((item) => item.product !== null); // Only include categories with products
};

interface CategoryCardProps {
    category: typeof categories[0];
    product: Product;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, product }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleClick = () => {
        trackProductClick(product.name, product.category);
        setIsDialogOpen(true);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            trackProductClick(product.name, product.category);
            setIsDialogOpen(true);
        }
    };

    return (
        <>
            {/* biome-ignore lint/a11y/useSemanticElements: Card needs to be clickable but contains nested content */}
            <div
                className="group cursor-pointer focus-visible:outline-none"
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0}
                aria-label={`Browse ${category.name} category`}
            >
                <div className="relative bg-zinc-100 rounded-xl overflow-hidden aspect-[4/3]">
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div
                        className="absolute top-3 right-3 p-2 bg-white/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        aria-hidden="true"
                    >
                        <ExpandIcon className="w-4 h-4 text-zinc-800" />
                    </div>
                    <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 bg-white/50 backdrop-blur-sm rounded-full text-xs font-medium text-zinc-900">
                        <category.icon className="w-4 h-4 text-zinc-700" />
                        <span>{category.name}</span>
                    </div>
                </div>
                <div className="pt-4">
                    <p className="text-sm text-zinc-500">
                        {category.name} &middot; {category.count} {category.count === 1 ? 'item' : 'items'}
                    </p>
                    <h3 className="text-base font-medium text-zinc-900">{category.name}</h3>
                </div>
            </div>
            <ProductDialog
                product={product}
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
            />
        </>
    );
};

function Browse() {
    const categoryCards = getCategoryCards();

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-zinc-900 tracking-tight mb-2">Browse by Category</h1>
                <p className="text-zinc-600">Explore our curated collection organized by category</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
                {categoryCards.map(({ category, product }) => (
                    <CategoryCard key={category.id} category={category} product={product!} />
                ))}
            </div>
        </div>
    );
}

export default Browse;

