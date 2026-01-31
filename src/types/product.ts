export type Category = 'all' | 'mobile' | 'laptop' | 'headphones' | 'watch' | 'camera' | 'tablet';

export type AffiliatePlatform = 'amazon' | 'flipkart';

export interface PricePoint {
    date: string;
    price: number;
}

export interface Product {
    id: number;
    name: string;
    category: Category;
    price: number;
    originalPrice: number;
    image: string;
    rating: number;
    reviews: number;
    features: string[];
    affiliate: AffiliatePlatform;
    productUrl?: string;
    priceHistory?: PricePoint[];
}

export interface PriceRange {
    min: number;
    max: number;
}

export interface ProductFilterState {
    searchQuery: string;
    priceRange: PriceRange;
    category: Category;
}
