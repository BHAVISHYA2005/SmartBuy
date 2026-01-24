import { Product, Category, PriceRange } from '../types/product';

/**
 * Filter products based on search query, price range, and category
 */
export const filterProducts = (
    products: Product[],
    searchQuery: string,
    priceRange: PriceRange,
    category: Category
): Product[] => {
    return products.filter((product) => {
        // Category filter
        if (category !== 'all' && product.category !== category) {
            return false;
        }

        // Price filter
        if (product.price < priceRange.min || product.price > priceRange.max) {
            return false;
        }

        // Search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const matchesName = product.name.toLowerCase().includes(query);
            const matchesCategory = product.category.toLowerCase().includes(query);
            const matchesFeatures = product.features.some((f) =>
                f.toLowerCase().includes(query)
            );

            return matchesName || matchesCategory || matchesFeatures;
        }

        return true;
    });
};

/**
 * Sort products based on criteria
 */
export const sortProducts = (
    products: Product[],
    sortBy: string
): Product[] => {
    const sorted = [...products];

    switch (sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        default:
            return sorted;
    }
};
