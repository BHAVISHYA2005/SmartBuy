import { describe, it, expect } from 'vitest';
import { filterProducts, sortProducts } from '../utils/productUtils';
import { Product } from '../types/product';

const mockProducts: Product[] = [
    {
        id: 1,
        name: 'iPhone 13',
        category: 'mobile',
        price: 50000,
        originalPrice: 60000,
        image: 'test.jpg',
        rating: 4.5,
        reviews: 100,
        features: ['5G', 'A15'],
        affiliate: 'amazon',
    },
    {
        id: 2,
        name: 'Samsung TV',
        category: 'all', // Using all to test edge case if needed, but categories should be specific
        price: 30000,
        originalPrice: 35000,
        image: 'test2.jpg',
        rating: 4.0,
        reviews: 50,
        features: ['4K', 'Smart'],
        affiliate: 'flipkart',
    },
];

describe('productUtils', () => {
    describe('filterProducts', () => {
        it('filters by category', () => {
            const result = filterProducts(
                mockProducts,
                '',
                { min: 0, max: 100000 },
                'mobile'
            );
            expect(result).toHaveLength(1);
            expect(result[0].name).toBe('iPhone 13');
        });

        it('filters by price range', () => {
            const result = filterProducts(
                mockProducts,
                '',
                { min: 40000, max: 60000 },
                'all'
            );
            expect(result).toHaveLength(1);
            expect(result[0].name).toBe('iPhone 13');
        });

        it('filters by search query', () => {
            const result = filterProducts(
                mockProducts,
                'Samsung',
                { min: 0, max: 100000 },
                'all'
            );
            expect(result).toHaveLength(1);
            expect(result[0].name).toBe('Samsung TV');
        });
    });

    describe('sortProducts', () => {
        it('sorts by price low to high', () => {
            const result = sortProducts(mockProducts, 'price-low');
            expect(result[0].price).toBe(30000);
            expect(result[1].price).toBe(50000);
        });

        it('sorts by price high to low', () => {
            const result = sortProducts(mockProducts, 'price-high');
            expect(result[0].price).toBe(50000);
            expect(result[1].price).toBe(30000);
        });
    });
});
