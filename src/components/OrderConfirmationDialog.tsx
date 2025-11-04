import type React from 'react';
import { useEffect } from 'react';
import { XIcon } from '@/components/icons/CoreIcons';

interface OrderConfirmationDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const OrderConfirmationDialog: React.FC<OrderConfirmationDialogProps> = ({
    isOpen,
    onClose,
}) => {
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

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Order confirmation"
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
            <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full p-8">
                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 transition-colors duration-200"
                    aria-label="Close dialog"
                >
                    <XIcon className="size-5 text-zinc-500" />
                </button>

                {/* Content */}
                <div className="text-center">
                    <div className="mb-6">
                        <div className="mx-auto flex items-center justify-center size-16 bg-green-100 rounded-full mb-4">
                            <svg
                                className="size-8 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label="Order confirmed"
                            >
                                <title>Order confirmed</title>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-2">
                            Order Placed!
                        </h2>
                        <p className="text-base text-zinc-600">
                            Thank you for your order. We appreciate your business and look forward to
                            serving you again!
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full px-6 py-3 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors duration-200"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmationDialog;

