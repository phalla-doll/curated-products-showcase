import type React from 'react';
import { useEffect, useState } from 'react';
import Drawer from '@/components/Drawer';
import {
    AsteriskIcon,
    BagIcon,
    MinusIcon,
    PlusIcon,
    SearchIcon,
    XIcon,
} from '@/components/icons/CoreIcons';
import type { CartItem } from '@/types';
import { getCartItems, getCartTotal, removeFromCart, updateCartItemQuantity } from '@/utils/cart';

// FIX: Extracted props to a dedicated interface to resolve potential type inference issues with inline types.
interface NavLinkProps {
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
}

const NavLink = ({ children, active = false, onClick }: NavLinkProps) => (
    <button
        type="button"
        onClick={onClick}
        className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            active ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'
        }`}
    >
        {children}
    </button>
);

function Header() {
    const [activeTab, setActiveTab] = useState<'Discover' | 'Browse' | 'Blog' | 'Info'>('Discover');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Load cart items from localStorage
    useEffect(() => {
        const loadCart = () => {
            setCartItems(getCartItems());
        };

        loadCart();

        // Listen for cart updates
        window.addEventListener('cartupdated', loadCart);

        return () => {
            window.removeEventListener('cartupdated', loadCart);
        };
    }, []);

    const handleRemoveItem = (productId: number) => {
        removeFromCart(productId);
        setCartItems(getCartItems());
    };

    const handleUpdateQuantity = (productId: number, newQuantity: number) => {
        if (newQuantity <= 0) {
            handleRemoveItem(productId);
        } else {
            updateCartItemQuantity(productId, newQuantity);
            setCartItems(getCartItems());
        }
    };

    const cartTotal = getCartTotal();

    return (
        <>
            <header className="py-6">
                <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-x-2 justify-between">
                        <div className="flex-1 flex items-center justify-start">
                            <AsteriskIcon className="size-6 text-zinc-900 min-w-[36px]" />
                        </div>

                        <div className="shrink-0">
                            <div className="flex items-center bg-white border border-zinc-200/80 rounded-full shadow-sm p-1">
                                <NavLink
                                    active={activeTab === 'Discover'}
                                    onClick={() => setActiveTab('Discover')}
                                >
                                    Discover
                                </NavLink>
                                <NavLink
                                    active={activeTab === 'Browse'}
                                    onClick={() => setActiveTab('Browse')}
                                >
                                    Browse
                                </NavLink>
                                <NavLink
                                    active={activeTab === 'Blog'}
                                    onClick={() => setActiveTab('Blog')}
                                >
                                    Blog
                                </NavLink>
                                <NavLink
                                    active={activeTab === 'Info'}
                                    onClick={() => setActiveTab('Info')}
                                >
                                    Info
                                </NavLink>
                            </div>
                        </div>

                        <div className="flex-1 flex items-center justify-end gap-0.5 sm:gap-2">
                            <button
                                type="button"
                                onClick={() => {
                                    // Dispatch custom event to focus search input in Hero
                                    window.dispatchEvent(new CustomEvent('focussearch'));
                                }}
                                className="p-2 rounded-full hover:bg-zinc-100 transition-colors duration-200"
                                aria-label="Search"
                            >
                                <SearchIcon className="size-5 text-zinc-500" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsDrawerOpen(true)}
                                className="relative p-2 rounded-full hover:bg-zinc-100 transition-colors duration-200"
                                aria-label="Open bag"
                            >
                                <BagIcon className="size-5 text-zinc-500" />
                                {cartItems.length > 0 && (
                                    <span className="absolute top-0 right-0 flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-zinc-900 text-white text-[10px] font-semibold rounded-full">
                                        {cartItems.reduce(
                                            (total, item) => total + item.quantity,
                                            0
                                        )}
                                    </span>
                                )}
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            <Drawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                title="Bag"
                ariaLabel="Bag drawer"
            >
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-zinc-500 p-6">
                        <BagIcon className="size-16 mb-4 text-zinc-300" />
                        <p className="text-base font-medium text-center mb-2">Your bag is empty.</p>
                        <p className="text-sm text-center">
                            Start browsing our collection to add items to your cart.
                        </p>
                        <button
                            onClick={() => setIsDrawerOpen(false)}
                            type="button"
                            className="mt-4 px-4 py-2 bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm font-medium rounded-lg"
                        >
                            Browse Collection
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Cart Items List - Scrollable */}
                        <div className="flex-1 overflow-y-auto p-6">
                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.product.id}
                                        className="flex gap-4 p-4 border border-zinc-200 rounded-lg"
                                    >
                                        {/* Product Image */}
                                        <div className="w-20 h-20 bg-zinc-100 rounded-lg overflow-hidden flex-shrink-0">
                                            <img
                                                src={item.product.imageUrl}
                                                alt={item.product.name}
                                                className="w-full h-full object-contain p-2"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm font-medium text-zinc-900 truncate">
                                                {item.product.name}
                                            </h3>
                                            <p className="text-xs text-zinc-500 mt-1">
                                                {item.product.brand}
                                            </p>
                                            <p className="text-base font-semibold text-zinc-900 mt-2">
                                                ${item.product.price.toLocaleString()}
                                            </p>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-3 mt-3">
                                                <div className="flex items-center gap-2 border border-zinc-300 rounded-lg overflow-hidden">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleUpdateQuantity(
                                                                item.product.id,
                                                                item.quantity - 1
                                                            )
                                                        }
                                                        className="p-1.5 hover:bg-zinc-100 transition-colors duration-200"
                                                        aria-label="Decrease quantity"
                                                    >
                                                        <MinusIcon className="w-3.5 h-3.5 text-zinc-700" />
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-medium text-zinc-900">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleUpdateQuantity(
                                                                item.product.id,
                                                                item.quantity + 1
                                                            )
                                                        }
                                                        className="p-1.5 hover:bg-zinc-100 transition-colors duration-200"
                                                        aria-label="Increase quantity"
                                                    >
                                                        <PlusIcon className="w-3.5 h-3.5 text-zinc-700" />
                                                    </button>
                                                </div>

                                                {/* Remove Button */}
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleRemoveItem(item.product.id)
                                                    }
                                                    className="p-1.5 hover:bg-zinc-100 rounded transition-colors duration-200"
                                                    aria-label="Remove item"
                                                >
                                                    <XIcon className="w-4 h-4 text-zinc-500" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cart Footer with Total - Fixed at bottom */}
                        <div className="border-t border-zinc-200 p-6 bg-white">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-semibold text-zinc-900">Total</span>
                                <span className="text-xl font-bold text-zinc-900">
                                    ${cartTotal.toLocaleString()}
                                </span>
                            </div>
                            <button
                                type="button"
                                className="w-full px-6 py-3 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors duration-200"
                            >
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </Drawer>
        </>
    );
}

export default Header;
