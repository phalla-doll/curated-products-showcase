import type React from 'react';
import { useEffect } from 'react';
import { XIcon } from '@/components/icons/CoreIcons';
import type { CartItem } from '@/types';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    ariaLabel?: string;
    cartItems: CartItem[];
}

function Drawer({ isOpen, onClose, title, children, ariaLabel, cartItems }: DrawerProps) {
    const getCartItemsCount = (items: CartItem[]): string => {
        return items.reduce((total, item) => total + item.quantity, 0).toLocaleString();
    };

    // Handle Escape key to close drawer
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when drawer is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    const handleBackdropClick = () => {
        onClose();
    };

    const handleBackdropKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape' || e.key === 'Enter') {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel || title}
        >
            {/* Backdrop */}
            <button
                type="button"
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                onClick={handleBackdropClick}
                onKeyDown={handleBackdropKeyDown}
                aria-label="Close drawer"
                tabIndex={-1}
            />

            {/* Drawer */}
            <section
                aria-label={`${title} drawer content`}
                className="absolute right-4 left-4 top-0 bottom-0 w-auto sm:left-auto sm:w-96 h-[calc(100vh-4rem)] sm:h-[calc(100vh-2rem)] my-4 bg-white rounded-lg shadow-2xl transform overflow-hidden"
                style={{
                    animation: 'slideInRight 0.3s ease-out',
                }}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                        onClose();
                    }
                }}
                tabIndex={-1}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200">
                    <h2 className="text-xl font-semibold text-zinc-900">
                        {title}{' '}
                        <span className="text-zinc-500 text-base font-normal">
                            [{getCartItemsCount(cartItems)}]
                        </span>
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="squircle p-1.5 rounded-full hover:bg-zinc-100 transition-colors duration-200"
                        aria-label="Close drawer"
                    >
                        <XIcon className="size-5 text-zinc-500" />
                    </button>
                </div>

                {/* Drawer Content */}
                <div className="flex flex-col h-[calc(100%-5rem)] overflow-hidden">{children}</div>
            </section>
        </div>
    );
}

export default Drawer;
