import { MinusIcon, PlusIcon, XIcon } from '@/components/icons/CoreIcons';
import type { CartItem } from '@/types';

interface CartItemsListProps {
    cartItems: CartItem[];
    cartTotal: number;
    onUpdateQuantity: (productId: number, newQuantity: number) => void;
    onRemoveItem: (productId: number) => void;
}

const CartItemsList = ({
    cartItems,
    cartTotal,
    onUpdateQuantity,
    onRemoveItem,
}: CartItemsListProps) => {
    return (
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
                            <div className="size-24 bg-zinc-100 rounded-lg overflow-hidden flex-shrink-0">
                                <img
                                    src={item.product.imageUrl}
                                    alt={item.product.name}
                                    className="w-full h-full object-contain p-2"
                                />
                            </div>

                            {/* Product Details - Left Side */}
                            <div className="flex-1 min-w-0 flex flex-col justify-between">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-sm font-medium text-zinc-900 truncate">
                                        {item.product.name}
                                    </h3>
                                    <p className="text-xs text-zinc-500">{item.product.brand}</p>
                                </div>

                                {/* Quantity Controls and Remove Button */}
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 border border-zinc-300 rounded-lg overflow-hidden">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                onUpdateQuantity(item.product.id, item.quantity - 1)
                                            }
                                            className="p-1.5 hover:bg-zinc-100 transition-colors duration-200"
                                            aria-label="Decrease quantity"
                                        >
                                            <MinusIcon className="size-3.5 text-zinc-700" />
                                        </button>
                                        <span className="w-8 text-center text-sm font-medium text-zinc-900">
                                            {item.quantity}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                onUpdateQuantity(item.product.id, item.quantity + 1)
                                            }
                                            className="p-1.5 hover:bg-zinc-100 transition-colors duration-200"
                                            aria-label="Increase quantity"
                                        >
                                            <PlusIcon className="size-3.5 text-zinc-700" />
                                        </button>
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                        type="button"
                                        onClick={() => onRemoveItem(item.product.id)}
                                        className="p-1.5 hover:bg-zinc-100 rounded transition-colors duration-200"
                                        aria-label="Remove item"
                                    >
                                        <XIcon className="size-4 text-zinc-500" />
                                    </button>
                                </div>
                            </div>

                            {/* Right Side - Price */}
                            <div className="flex items-start">
                                <p className="text-base font-semibold text-zinc-900">
                                    ${item.product.price.toLocaleString()}
                                </p>
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
    );
};

export default CartItemsList;
