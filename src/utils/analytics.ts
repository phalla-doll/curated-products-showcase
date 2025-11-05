// Google Analytics 4 utility functions

declare global {
    interface Window {
        gtag: (command: string, targetId: string | Date, config?: Record<string, unknown>) => void;
        dataLayer: unknown[];
    }
}

const GA_MEASUREMENT_ID = 'G-C76ELSS284';

/**
 * Track a page view
 */
export const trackPageView = (path: string): void => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: path,
        });
    }
};

/**
 * Track a custom event
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, unknown>): void => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, eventParams);
    }
};

/**
 * Track product view
 */
export const trackProductView = (productName: string, category?: string): void => {
    trackEvent('view_item', {
        item_name: productName,
        item_category: category,
    });
};

/**
 * Track product click
 */
export const trackProductClick = (productName: string, category?: string): void => {
    trackEvent('select_item', {
        item_name: productName,
        item_category: category,
    });
};

/**
 * Track add to cart
 */
export const trackAddToCart = (productName: string, category?: string, price?: number): void => {
    trackEvent('add_to_cart', {
        item_name: productName,
        item_category: category,
        value: price,
        currency: 'USD',
    });
};

/**
 * Track remove from cart
 */
export const trackRemoveFromCart = (productName: string, category?: string): void => {
    trackEvent('remove_from_cart', {
        item_name: productName,
        item_category: category,
    });
};

/**
 * Track checkout initiation
 */
export const trackBeginCheckout = (value?: number, items?: number): void => {
    trackEvent('begin_checkout', {
        value,
        currency: 'USD',
        items,
    });
};

/**
 * Track purchase completion
 */
export const trackPurchase = (
    transactionId: string,
    value: number,
    items: Array<{ item_name: string; item_category?: string; price?: number }>
): void => {
    trackEvent('purchase', {
        transaction_id: transactionId,
        value,
        currency: 'USD',
        items,
    });
};

/**
 * Track category filter selection
 */
export const trackCategoryFilter = (category: string): void => {
    trackEvent('select_content', {
        content_type: 'category',
        content_id: category,
    });
};

/**
 * Track search query
 */
export const trackSearch = (searchTerm: string): void => {
    trackEvent('search', {
        search_term: searchTerm,
    });
};
