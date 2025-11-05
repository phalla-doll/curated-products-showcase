import type { CartItem, Product } from '@/types';

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface OrderItem {
    product: Product;
    quantity: number;
    price: number; // Price at time of order
}

export interface Order {
    id: string;
    orderNumber: string;
    items: OrderItem[];
    total: number;
    status: OrderStatus;
    createdAt: string; // ISO date string
    estimatedDelivery?: string; // ISO date string
    deliveredAt?: string; // ISO date string
}

const ORDERS_STORAGE_KEY = 'product-showcase-orders';

/**
 * Get all orders from localStorage
 */
export function getOrders(): Order[] {
    if (typeof window === 'undefined') return [];

    try {
        const stored = localStorage.getItem(ORDERS_STORAGE_KEY);
        if (!stored) return [];
        return JSON.parse(stored) as Order[];
    } catch (error) {
        console.error('Error reading orders from localStorage:', error);
        return [];
    }
}

/**
 * Create a new order from cart items
 */
export function createOrder(cartItems: CartItem[]): Order {
    if (typeof window === 'undefined') {
        throw new Error('Cannot create order on server');
    }

    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const orderNumber = `#${Date.now().toString().slice(-8)}`;
    const createdAt = new Date().toISOString();
    
    // Estimate delivery date (3-7 business days)
    const estimatedDeliveryDate = new Date();
    estimatedDeliveryDate.setDate(estimatedDeliveryDate.getDate() + Math.floor(Math.random() * 5) + 3);
    const estimatedDelivery = estimatedDeliveryDate.toISOString();

    const items: OrderItem[] = cartItems.map((item) => ({
        product: item.product,
        quantity: item.quantity,
        price: item.product.price,
    }));

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Determine initial status - randomly assign some as shipped/delivered for demo
    const statusOptions: OrderStatus[] = ['pending', 'processing', 'shipped', 'delivered'];
    const randomStatus = statusOptions[Math.floor(Math.random() * statusOptions.length)];
    
    const order: Order = {
        id: orderId,
        orderNumber,
        items,
        total,
        status: randomStatus,
        createdAt,
        estimatedDelivery,
    };

    // If status is delivered, add deliveredAt
    if (randomStatus === 'delivered') {
        const deliveredDate = new Date(createdAt);
        deliveredDate.setDate(deliveredDate.getDate() + Math.floor(Math.random() * 5) + 2);
        order.deliveredAt = deliveredDate.toISOString();
    }

    const orders = getOrders();
    orders.unshift(order); // Add to beginning of array
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));

    // Dispatch custom event to notify components of order update
    window.dispatchEvent(new CustomEvent('orderupdated'));

    return order;
}

/**
 * Get active orders (not delivered or cancelled)
 */
export function getActiveOrders(): Order[] {
    const orders = getOrders();
    return orders.filter(
        (order) => order.status !== 'delivered' && order.status !== 'cancelled'
    );
}

/**
 * Get order history (delivered or cancelled orders)
 */
export function getOrderHistory(): Order[] {
    const orders = getOrders();
    return orders.filter(
        (order) => order.status === 'delivered' || order.status === 'cancelled'
    );
}

/**
 * Get order by ID
 */
export function getOrderById(orderId: string): Order | null {
    const orders = getOrders();
    return orders.find((order) => order.id === orderId) || null;
}

/**
 * Update order status
 */
export function updateOrderStatus(orderId: string, status: OrderStatus): void {
    if (typeof window === 'undefined') return;

    try {
        const orders = getOrders();
        const orderIndex = orders.findIndex((order) => order.id === orderId);

        if (orderIndex >= 0) {
            orders[orderIndex].status = status;
            
            // If status is delivered, add deliveredAt
            if (status === 'delivered' && !orders[orderIndex].deliveredAt) {
                orders[orderIndex].deliveredAt = new Date().toISOString();
            }

            localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));

            // Dispatch custom event to notify components of order update
            window.dispatchEvent(new CustomEvent('orderupdated'));
        }
    } catch (error) {
        console.error('Error updating order status:', error);
    }
}

/**
 * Format date for display
 */
export function formatOrderDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

/**
 * Get status badge color
 */
export function getStatusColor(status: OrderStatus): string {
    switch (status) {
        case 'pending':
            return 'bg-yellow-100 text-yellow-800';
        case 'processing':
            return 'bg-blue-100 text-blue-800';
        case 'shipped':
            return 'bg-purple-100 text-purple-800';
        case 'delivered':
            return 'bg-green-100 text-green-800';
        case 'cancelled':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-zinc-100 text-zinc-800';
    }
}
