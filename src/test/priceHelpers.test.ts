import { describe, it, expect } from 'vitest';
import { getLowestPrice, getPriceTrend, generateSparklinePath } from '../utils/priceHelpers';
import { PricePoint } from '../types/product';

describe('priceHelpers', () => {
    const mockHistory: PricePoint[] = [
        { date: '2024-01-01', price: 100 },
        { date: '2024-01-02', price: 90 },
        { date: '2024-01-03', price: 110 },
        { date: '2024-01-04', price: 85 },
    ];

    describe('getLowestPrice', () => {
        it('should return the lowest price from history', () => {
            expect(getLowestPrice(mockHistory)).toBe(85);
        });

        it('should return 0 for empty history', () => {
            expect(getLowestPrice([])).toBe(0);
        });
    });

    describe('getPriceTrend', () => {
        it('should identify a downward trend', () => {
            const downHistory = [
                { date: '1', price: 100 },
                { date: '2', price: 90 }
            ];
            expect(getPriceTrend(downHistory)).toBe('down');
        });

        it('should identify an upward trend', () => {
            const upHistory = [
                { date: '1', price: 100 },
                { date: '2', price: 110 }
            ];
            expect(getPriceTrend(upHistory)).toBe('up');
        });

        it('should return stable for same prices', () => {
            const stableHistory = [
                { date: '1', price: 100 },
                { date: '2', price: 100 }
            ];
            expect(getPriceTrend(stableHistory)).toBe('stable');
        });
    });

    describe('generateSparklinePath', () => {
        it('should generate a valid SVG path string', () => {
            const path = generateSparklinePath(mockHistory, 100, 30);
            expect(path).toContain('M');
            expect(path).toContain('L');
        });

        it('should return empty string for too small history', () => {
            expect(generateSparklinePath([{ date: '1', price: 100 }], 100, 30)).toBe('');
        });
    });
});
