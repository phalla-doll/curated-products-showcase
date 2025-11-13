import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import {
    BagIcon,
    BookmarkIcon,
    CheckIcon,
    MinusIcon,
    PlusIcon,
    ShareIcon,
    StaffPickIcon,
    StarIcon,
    XIcon,
} from '@/components/icons/CoreIcons';
import type { Product } from '@/types';
import { trackAddToCart, trackProductView } from '@/utils/analytics';
import { addToCart } from '@/utils/cart';

interface ProductDialogProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
    onAddToCart?: (product: Product, quantity: number) => void;
}

const ProductDialog: React.FC<ProductDialogProps> = ({ product, isOpen, onClose, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [isLinkCopied, setIsLinkCopied] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const shareTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const addToCartTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const addToCartProductRef = useRef<Product | null>(null);
    const addToCartQuantityRef = useRef<number>(1);
    const currentProductRef = useRef<Product | null>(null);

    useEffect(() => {
        // Capture the previous product value before updating the ref
        // This allows cleanup to detect product changes
        const previousProduct = currentProductRef.current;
        // Update currentProductRef synchronously at the start
        currentProductRef.current = product;

        // Reset quantity and added state when dialog opens or product changes
        if (isOpen && product) {
            setQuantity(1);
            setIsAddedToCart(false);
            setIsLinkCopied(false);
            // Check if product is bookmarked (from localStorage)
            const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
            setIsBookmarked(bookmarks.some((b: Product) => b.id === product.id));
            // Track product view when dialog opens
            trackProductView(product.name, product.category);
        }

        // Cleanup: Clear timeouts appropriately
        return () => {
            // Always clear share timeout
            if (shareTimeoutRef.current) {
                clearTimeout(shareTimeoutRef.current);
                shareTimeoutRef.current = null;
            }

            // Clear add-to-cart timeout if product changed to a different product
            // (not if dialog is just closing - product becomes null)
            // This prevents stale product data from being added when switching products quickly
            // We compare addToCartProductRef (product that was clicked) with previousProduct
            // (the product that was displayed before this effect ran)
            // If they're different, it means the user switched products, so cancel the pending add-to-cart
            if (
                addToCartTimeoutRef.current &&
                addToCartProductRef.current &&
                previousProduct !== null && // Only clear if there was a previous product (not initial mount)
                previousProduct !== product && // Product changed (previousProduct is old, product is new)
                addToCartProductRef.current !== product // Clicked product is different from new product
            ) {
                clearTimeout(addToCartTimeoutRef.current);
                addToCartTimeoutRef.current = null;
                addToCartProductRef.current = null;
            }
            // If product matches or is null (dialog closing), let the timeout complete
        };
    }, [isOpen, product]);

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

    const handleShare = async () => {
        if (product) {
            // Clear any existing timeout before creating a new one
            if (shareTimeoutRef.current) {
                clearTimeout(shareTimeoutRef.current);
                shareTimeoutRef.current = null;
            }

            // Create shareable URL with product name as search query
            const searchQuery = product.name.replace(/\s+/g, '+');
            const shareUrl = `${window.location.origin}${window.location.pathname}?search=${searchQuery}`;

            try {
                // Copy to clipboard
                await navigator.clipboard.writeText(shareUrl);

                // Update button state to show check icon
                setIsLinkCopied(true);

                // Reset back to share icon after 2 seconds
                shareTimeoutRef.current = setTimeout(() => {
                    setIsLinkCopied(false);
                    shareTimeoutRef.current = null;
                }, 2000);
            } catch (err) {
                // Fallback for browsers that don't support clipboard API
                console.error('Failed to copy link:', err);
            }
        }
    };

    const handleBookmark = () => {
        if (product) {
            const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
            const isCurrentlyBookmarked = bookmarks.some((b: Product) => b.id === product.id);

            if (isCurrentlyBookmarked) {
                // Remove bookmark
                const updatedBookmarks = bookmarks.filter((b: Product) => b.id !== product.id);
                localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
                setIsBookmarked(false);
            } else {
                // Add bookmark
                bookmarks.push(product);
                localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                setIsBookmarked(true);
            }

            // Dispatch custom event to notify ProductGrid of bookmark change
            window.dispatchEvent(new CustomEvent('bookmarkchange'));
        }
    };

    const handleAddToCart = () => {
        if (product) {
            // Clear any existing timeout before creating a new one
            if (addToCartTimeoutRef.current) {
                clearTimeout(addToCartTimeoutRef.current);
                addToCartTimeoutRef.current = null;
            }

            // Track add to cart event
            trackAddToCart(product.name, product.category, product.price * quantity);

            // Update button state immediately
            setIsAddedToCart(true);

            // Store the product and quantity in refs for the timeout callback
            // This ensures we use the correct values even if product changes
            addToCartProductRef.current = product;
            addToCartQuantityRef.current = quantity;

            // Wait 500ms before actually adding to cart
            // Note: This timeout is NOT cleared when dialog closes (to ensure product is added),
            // but IS cleared when product changes (to prevent stale product data)
            addToCartTimeoutRef.current = setTimeout(() => {
                // Get the product and quantity from refs (these are the values when button was clicked)
                const productToAdd = addToCartProductRef.current;
                const quantityToAdd = addToCartQuantityRef.current;

                // Verify we still have valid product data
                if (!productToAdd) {
                    addToCartTimeoutRef.current = null;
                    addToCartProductRef.current = null;
                    return;
                }

                // Add to localStorage
                addToCart(productToAdd, quantityToAdd);

                // Also call the optional callback if provided
                if (onAddToCart) {
                    onAddToCart(productToAdd, quantityToAdd);
                }

                // Close the dialog after adding to cart
                // Safe to call even if dialog was already closed manually (idempotent)
                onClose();

                // Clear the refs after timeout completes
                addToCartTimeoutRef.current = null;
                addToCartProductRef.current = null;
            }, 500);
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
            <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto md:overflow-hidden grid grid-cols-1 md:grid-cols-2">
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="p-2 bg-white squircle rounded-full hover:bg-zinc-100 text-zinc-600 hover:text-zinc-800 transition-colors duration-200"
                        aria-label="Close dialog"
                    >
                        <XIcon className="size-5" />
                    </button>
                </div>

                {/* Image Block - Left */}
                <div className="bg-zinc-100 flex items-center justify-center p-8 md:p-12 relative">
                    {/* Staff Pick Badge */}
                    {product.isStaffPick && (
                        <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 border border-amber-500/20 bg-amber-50 rounded-full text-xs font-medium text-amber-900">
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
                <div className="flex flex-col p-8 md:p-12 md:overflow-y-auto">
                    <div className="flex-1">
                        {/* Brand & Category */}
                        <p className="text-sm text-zinc-500 mb-2">
                            {product.brand} &middot; {product.category}
                        </p>

                        {/* Product Name */}
                        <h2 className="text-3xl font-semibold text-zinc-900 mb-4 tracking-tight">
                            {product.name}
                        </h2>

                        {/* Price */}
                        <div className="mb-6">
                            <p className="text-4xl font-bold text-zinc-900 tracking-tight">
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
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-500">Reviews:</span>
                                    <div className="flex items-center gap-1">
                                        <button
                                            type="button"
                                            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 underline-offset-2 hover:underline transition-colors flex items-center gap-1"
                                            onClick={() => {
                                                // Handle view all reviews
                                                console.log('View all reviews');
                                            }}
                                        >
                                            <StarIcon className="size-3.5 text-zinc-500/80" />
                                            <span>4.6</span>
                                            <span className="text-zinc-500">(58.2K)</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-zinc-500">Description:</span>
                                    <span className="font-medium">{product.description}</span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6 border-t border-zinc-200">
                            <div className="flex flex-col gap-6">
                                <div className="flex justify-between gap-2">
                                    {/* Quantity Selector */}
                                    <div className="flex items-center gap-4">
                                        <label
                                            htmlFor="quantity"
                                            className="text-sm font-medium text-zinc-900"
                                        >
                                            Quantity:
                                        </label>
                                        <div className="flex items-center gap-2 border border-zinc-300 rounded-lg squircle overflow-hidden">
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
                                                <PlusIcon className="size-4 text-zinc-700" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        {/* Bookmark Button */}
                                        <button
                                            type="button"
                                            onClick={handleBookmark}
                                            className={`p-2 squircle rounded-full transition-colors duration-200 ${
                                                isBookmarked
                                                    ? 'bg-white text-amber-600 hover:bg-amber-100'
                                                    : 'bg-white hover:bg-zinc-100 text-zinc-600 hover:text-zinc-800'
                                            }`}
                                            aria-label={
                                                isBookmarked ? 'Remove bookmark' : 'Add bookmark'
                                            }
                                        >
                                            <BookmarkIcon
                                                className={`size-5 ${isBookmarked ? 'fill-current' : ''}`}
                                            />
                                        </button>

                                        {/* Share Button */}
                                        <button
                                            type="button"
                                            onClick={handleShare}
                                            className="p-2 bg-white squircle rounded-full hover:bg-zinc-100 text-zinc-600 hover:text-zinc-800 transition-colors duration-200"
                                            aria-label={
                                                isLinkCopied
                                                    ? 'Link copied to clipboard'
                                                    : 'Share product'
                                            }
                                        >
                                            {isLinkCopied ? (
                                                <CheckIcon className="size-5" />
                                            ) : (
                                                <ShareIcon className="size-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    type="button"
                                    onClick={handleAddToCart}
                                    disabled={isAddedToCart}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white font-medium squircle rounded-lg hover:bg-zinc-800 transition-colors duration-200 disabled:opacity-75 disabled:cursor-not-allowed"
                                >
                                    {isAddedToCart ? (
                                        <>
                                            <CheckIcon className="size-5" />
                                            <span>Added to Cart</span>
                                        </>
                                    ) : (
                                        <>
                                            <BagIcon className="size-5" />
                                            <span>Add to Cart</span>
                                        </>
                                    )}
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
