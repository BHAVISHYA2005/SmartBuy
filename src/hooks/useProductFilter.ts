import { useState, useMemo } from 'react';
import { Product, ProductFilterState } from '../types/product';
import { filterProducts, sortProducts } from '../utils/productUtils';

export const useProductFilter = (initialProducts: Product[]) => {
    const [filters, setFilters] = useState<ProductFilterState>({
        searchQuery: '',
        priceRange: { min: 0, max: 100000 },
        category: 'all',
    });
    const [sortBy, setSortBy] = useState('relevance');

    const filteredProducts = useMemo(() => {
        const filtered = filterProducts(
            initialProducts,
            filters.searchQuery,
            filters.priceRange,
            filters.category
        );
        return sortProducts(filtered, sortBy);
    }, [initialProducts, filters, sortBy]);

    const updateFilters = (newFilters: Partial<ProductFilterState>) => {
        setFilters((prev) => ({ ...prev, ...newFilters }));
    };

    return {
        filters,
        updateFilters,
        sortBy,
        setSortBy,
        filteredProducts,
    };
};
