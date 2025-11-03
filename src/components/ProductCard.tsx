import type React from 'react';
import type { Product } from '@/types';
import { ExpandIcon, StaffPickIcon } from './icons/CoreIcons';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="group cursor-pointer">
            <div className="relative bg-zinc-100 rounded-xl overflow-hidden aspect-[4/3]">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                />
                <button
                    type="button"
                    className="absolute top-3 right-3 p-2 bg-white/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="Expand product"
                >
                    <ExpandIcon className="w-4 h-4 text-zinc-800" />
                </button>
                {product.isStaffPick && (
                    <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 bg-white/50 backdrop-blur-sm rounded-full text-xs font-medium text-amber-900">
                        <StaffPickIcon className="w-4 h-4 text-amber-600" />
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
    );
};

export default ProductCard;
