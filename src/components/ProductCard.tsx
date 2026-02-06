import { Maximize01Icon, StarIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import type React from 'react';
import { useState } from 'react';
import ProductDialog from '@/components/ProductDialog';
import type { Product } from '@/types';
import { trackProductClick } from '@/utils/analytics';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
                aria-label={`View details for ${product.name}`}
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
                        <HugeiconsIcon icon={Maximize01Icon} size={16} className="text-zinc-800" />
                    </div>
                    {product.isStaffPick && (
                        <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 bg-white/50 backdrop-blur-sm rounded-full text-xs font-medium text-amber-900">
                            <HugeiconsIcon
                                icon={StarIcon}
                                size={16}
                                className="text-amber-600"
                                type="solid"
                            />
                            <span>Staff Pick</span>
                        </div>
                    )}
                    <p className="absolute bottom-3 right-3 px-3 py-1.5 bg-white/50 backdrop-blur-sm rounded-full text-sm font-semibold text-zinc-900">
                        ${product.price.toLocaleString()}
                    </p>
                </div>
                <div className="pt-4">
                    <p className="text-sm text-zinc-500">
                        {product.brand} &middot; {product.category}
                    </p>
                    <h3 className="text-base font-medium text-zinc-900">{product.name}</h3>
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

export default ProductCard;
