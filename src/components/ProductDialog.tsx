import type React from 'react';
import { useEffect, useState } from 'react';
import { BagIcon, MinusIcon, PlusIcon, StaffPickIcon, XIcon } from '@/components/icons/CoreIcons';
import type { Product } from '@/types';
import { addToCart } from '@/utils/cart';

interface ProductDialogProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
    onAddToCart?: (product: Product, quantity: number) => void;
}

const ProductDialog: React.FC<ProductDialogProps> = ({ product, isOpen, onClose, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // Reset quantity when product changes
        if (product) {
            setQuantity(1);
        }
    }, [product]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity((prev) => Math.max(1, prev - 1));
    };

    const handleAddToCart = () => {
        if (product) {
            // Add to localStorage
            addToCart(product, quantity);

            // Also call the optional callback if provided
            if (onAddToCart) {
                onAddToCart(product, quantity);
            }

            // Close the dialog after adding to cart
            onClose();
        }
    };

    if (!isOpen || !product) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`Product details: ${product.name}`}
        >
            {/* Backdrop */}
            <button
                type="button"
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                onClick={handleBackdropClick}
                aria-label="Close dialog"
                tabIndex={-1}
            />

            {/* Dialog */}
            <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
                    aria-label="Close dialog"
                >
                    <XIcon className="size-5 text-zinc-800" />
                </button>

                {/* Image Block - Left */}
                <div className="bg-zinc-100 flex items-center justify-center p-8 md:p-12 relative">
                    {/* Staff Pick Badge */}
                    {product.isStaffPick && (
                        <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 border border-amber-500/20 bg-amber-50 rounded-full text-xs font-medium text-amber-900">
                            <StaffPickIcon className="w-4 h-4 text-amber-600" />
                            <span>Staff Pick</span>
                        </div>
                    )}
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-contain max-h-[70vh]"
                    />
                </div>

                {/* Info Block - Right */}
                <div className="flex flex-col p-8 md:p-12 overflow-y-auto">
                    <div className="flex-1">
                        {/* Brand & Category */}
                        <p className="text-sm text-zinc-500 mb-2">
                            {product.brand} &middot; {product.category}
                        </p>

                        {/* Product Name */}
                        <h2 className="text-3xl font-semibold text-zinc-900 mb-4">
                            {product.name}
                        </h2>

                        {/* Price */}
                        <div className="mb-6">
                            <p className="text-4xl font-bold text-zinc-900">
                                ${product.price.toLocaleString()}
                            </p>
                        </div>

                        {/* Additional Info Section */}
                        <div className="py-6 border-t border-zinc-200">
                            <h3 className="text-sm font-semibold text-zinc-900 mb-3">
                                Product Details
                            </h3>
                            <div className="space-y-2 text-sm text-zinc-600">
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">Brand:</span>
                                    <span className="font-medium">{product.brand}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">Category:</span>
                                    <span className="font-medium">{product.category}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">Price:</span>
                                    <span className="font-medium">
                                        ${product.price.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-zinc-500">Description:</span>
                                    <span className="font-medium">{product.description}</span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6 border-t border-zinc-200">
                            <div className="flex flex-col gap-6">
                                {/* Quantity Selector */}
                                <div className="flex items-center gap-4">
                                    <label
                                        htmlFor="quantity"
                                        className="text-sm font-medium text-zinc-900"
                                    >
                                        Quantity:
                                    </label>
                                    <div className="flex items-center gap-2 border border-zinc-300 rounded-lg overflow-hidden">
                                        <button
                                            type="button"
                                            onClick={handleDecrement}
                                            disabled={quantity <= 1}
                                            className="p-2 hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                                            aria-label="Decrease quantity"
                                        >
                                            <MinusIcon className="w-4 h-4 text-zinc-700" />
                                        </button>
                                        <span
                                            id="quantity"
                                            className="w-12 text-center text-base font-medium text-zinc-900"
                                            aria-live="polite"
                                        >
                                            {quantity}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={handleIncrement}
                                            className="p-2 hover:bg-zinc-100 transition-colors duration-200"
                                            aria-label="Increase quantity"
                                        >
                                            <PlusIcon className="w-4 h-4 text-zinc-700" />
                                        </button>
                                    </div>
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    type="button"
                                    onClick={handleAddToCart}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors duration-200"
                                >
                                    <BagIcon className="w-5 h-5" />
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDialog;
