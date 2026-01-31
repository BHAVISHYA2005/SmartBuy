import { PricePoint } from '../types/product';

export const getLowestPrice = (history: PricePoint[]): number => {
    if (!history.length) return 0;
    return Math.min(...history.map((p) => p.price));
};

export const getPriceTrend = (history: PricePoint[]): 'up' | 'down' | 'stable' => {
    if (history.length < 2) return 'stable';
    const latest = history[history.length - 1].price;
    const previous = history[history.length - 2].price;

    if (latest < previous) return 'down';
    if (latest > previous) return 'up';
    return 'stable';
};

export const generateSparklinePath = (
    history: PricePoint[],
    width: number,
    height: number,
    padding: number = 2
): string => {
    if (history.length < 2) return '';

    const prices = history.map((p) => p.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange = maxPrice - minPrice || 1;

    const usableHeight = height - padding * 2;
    const usableWidth = width - padding * 2;

    const points = prices.map((price, index) => {
        const x = padding + (index / (prices.length - 1)) * usableWidth;
        // Invert Y because SVG coordinates start from top
        const y = padding + usableHeight - ((price - minPrice) / priceRange) * usableHeight;
        return `${x},${y}`;
    });

    return `M ${points.join(' L ')}`;
};
