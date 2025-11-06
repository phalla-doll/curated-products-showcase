import type React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { BagIcon, ClockIcon } from '@/components/icons/CoreIcons';
import {
    formatOrderDate,
    getActiveOrders,
    getOrderHistory,
    getStatusColor,
    type Order,
} from '@/utils/orders';

interface OrderCardProps {
    order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
    const itemCount = order.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="bg-white rounded-xl border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
            <div className="p-6 flex flex-col flex-1 min-h-0">
                {/* Order Header */}
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-lg font-semibold text-zinc-900 mb-1">
                            {order.orderNumber}
                        </h3>
                        <p className="text-sm text-zinc-500">{formatOrderDate(order.createdAt)}</p>
                    </div>
                    <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
                            order.status
                        )}`}
                    >
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                </div>

                {/* Order Items Preview */}
                <div className="mb-4 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                        <BagIcon className="w-4 h-4 text-zinc-500" />
                        <span className="text-sm font-medium text-zinc-700">
                            {itemCount} {itemCount === 1 ? 'item' : 'items'}
                        </span>
                    </div>
                    <div className="space-y-2">
                        {order.items.slice(0, 3).map((item, index) => (
                            <div
                                key={`${order.id}-${item.product.id}-${index}`}
                                className="flex items-center justify-between text-sm"
                            >
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <img
                                        src={item.product.imageUrl}
                                        alt={item.product.name}
                                        className="w-12 h-12 object-contain rounded bg-zinc-100 flex-shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-zinc-900 truncate">
                                            {item.product.name}
                                        </p>
                                        <p className="text-zinc-500 text-xs">
                                            {item.product.brand} &middot; Qty: {item.quantity}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-zinc-900 font-medium ml-2">
                                    ${(item.price * item.quantity).toLocaleString()}
                                </span>
                            </div>
                        ))}
                        {order.items.length > 3 && (
                            <p className="text-xs text-zinc-500 pt-1">
                                +{order.items.length - 3} more{' '}
                                {order.items.length - 3 === 1 ? 'item' : 'items'}
                            </p>
                        )}
                    </div>
                </div>

                {/* Order Footer */}
                <div className="pt-4 border-t border-zinc-100 mt-auto">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-zinc-700">Total</span>
                        <span className="text-lg font-bold text-zinc-900">
                            ${order.total.toLocaleString()}
                        </span>
                    </div>
                    {order.estimatedDelivery && order.status !== 'delivered' && (
                        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                            <ClockIcon className="size-3.5" />
                            <span>Est. delivery: {formatOrderDate(order.estimatedDelivery)}</span>
                        </div>
                    )}
                    {order.deliveredAt && (
                        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                            <ClockIcon className="size-3.5" />
                            <span>Delivered: {formatOrderDate(order.deliveredAt)}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

function Orders() {
    const [activeOrders, setActiveOrders] = useState<Order[]>([]);
    const [orderHistory, setOrderHistory] = useState<Order[]>([]);
    const [activeTab, setActiveTab] = useState<'active' | 'history'>('active');

    const loadOrders = useCallback(() => {
        setActiveOrders(getActiveOrders());
        setOrderHistory(getOrderHistory());
    }, []);

    useEffect(() => {
        loadOrders();

        // Listen for order updates
        window.addEventListener('orderupdated', loadOrders);

        return () => {
            window.removeEventListener('orderupdated', loadOrders);
        };
    }, [loadOrders]);

    const allOrders = activeTab === 'active' ? activeOrders : orderHistory;

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-screen-xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-zinc-900 tracking-tight mb-2">Orders</h1>
                <p className="text-zinc-600">Track your orders and view order history</p>
            </div>

            {/* Tabs */}
            <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-white border border-zinc-200/80 rounded-full shadow-sm p-1">
                    <button
                        type="button"
                        onClick={() => setActiveTab('active')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                            activeTab === 'active'
                                ? 'bg-zinc-100 text-zinc-900'
                                : 'text-zinc-500 hover:text-zinc-900'
                        }`}
                    >
                        Active ({activeOrders.length})
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab('history')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                            activeTab === 'history'
                                ? 'bg-zinc-100 text-zinc-900'
                                : 'text-zinc-500 hover:text-zinc-900'
                        }`}
                    >
                        History ({orderHistory.length})
                    </button>
                </div>
            </div>

            {/* Orders List */}
            {allOrders.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-zinc-500">
                    <BagIcon className="size-16 mb-4 text-zinc-300" />
                    <p className="text-xl text-zinc-900 font-semibold text-center mb-1">
                        {activeTab === 'active' ? 'No active orders' : 'No order history'}
                    </p>
                    <p className="text-sm text-center">
                        {activeTab === 'active'
                            ? 'Your active orders will appear here once you place an order.'
                            : 'Your completed orders will appear here.'}
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[400px]">
                    {allOrders.map((order) => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Orders;
