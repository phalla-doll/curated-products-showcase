import type { CartItem, Product } from '@/types';

const CART_STORAGE_KEY = 'product-showcase-cart';

/**
 * Get all cart items from localStorage
 */
export function getCartItems(): CartItem[] {
    if (typeof window === 'undefined') return [];
    
    try {
        const stored = localStorage.getItem(CART_STORAGE_KEY);
        if (!stored) return [];
        return JSON.parse(stored) as CartItem[];
    } catch (error) {
        console.error('Error reading cart from localStorage:', error);
        return [];
    }
}

/**
 * Add a product to the cart or update its quantity if it already exists
 */
export function addToCart(product: Product, quantity: number): void {
    if (typeof window === 'undefined') return;
    
    try {
        const cartItems = getCartItems();
        const existingItemIndex = cartItems.findIndex(
            (item) => item.product.id === product.id
        );

        if (existingItemIndex >= 0) {
            // Product already in cart, update quantity
            cartItems[existingItemIndex].quantity += quantity;
        } else {
            // New product, add to cart
            cartItems.push({ product, quantity });
        }

        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
        
        // Dispatch custom event to notify components of cart update
        window.dispatchEvent(new CustomEvent('cartupdated'));
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
}

/**
 * Remove a product from the cart
 */
export function removeFromCart(productId: number): void {
    if (typeof window === 'undefined') return;
    
    try {
        const cartItems = getCartItems().filter(
            (item) => item.product.id !== productId
        );
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
        
        // Dispatch custom event to notify components of cart update
        window.dispatchEvent(new CustomEvent('cartupdated'));
    } catch (error) {
        console.error('Error removing from cart:', error);
    }
}

/**
 * Update the quantity of a cart item
 */
export function updateCartItemQuantity(productId: number, quantity: number): void {
    if (typeof window === 'undefined') return;
    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    try {
        const cartItems = getCartItems();
        const itemIndex = cartItems.findIndex(
            (item) => item.product.id === productId
        );

        if (itemIndex >= 0) {
            cartItems[itemIndex].quantity = quantity;
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
            
            // Dispatch custom event to notify components of cart update
            window.dispatchEvent(new CustomEvent('cartupdated'));
        }
    } catch (error) {
        console.error('Error updating cart item:', error);
    }
}

/**
 * Clear all items from the cart
 */
export function clearCart(): void {
    if (typeof window === 'undefined') return;
    
    try {
        localStorage.removeItem(CART_STORAGE_KEY);
        
        // Dispatch custom event to notify components of cart update
        window.dispatchEvent(new CustomEvent('cartupdated'));
    } catch (error) {
        console.error('Error clearing cart:', error);
    }
}

/**
 * Get the total number of items in the cart
 */
export function getCartItemCount(): number {
    const cartItems = getCartItems();
    return cartItems.reduce((total, item) => total + item.quantity, 0);
}

/**
 * Get the total price of all items in the cart
 */
export function getCartTotal(): number {
    const cartItems = getCartItems();
    return cartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
    );
}

