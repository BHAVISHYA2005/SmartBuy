import React from 'react';
import { Product } from '../types/product';
import ProductCard from './ProductCard';
import '../styles/components/ProductGrid.css';

interface ProductGridProps {
    products: Product[];
    sortBy: string;
    setSortBy: (sort: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, sortBy, setSortBy }) => {
    if (products.length === 0) {
        return (
            <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3>No Products Found</h3>
                <p>Try adjusting your filters or search query</p>
                <button
                    className="btn btn-primary"
                    onClick={() => window.location.reload()}
                >
                    Reset Filters
                </button>
            </div>
        );
    }

    return (
        <div className="product-grid-container">
            <div className="product-grid-header">
                <h2>
                    Found <span className="text-gradient">{products.length}</span> Products
                </h2>
                <div className="sort-controls">
                    <label htmlFor="sort-select">Sort by:</label>
                    <select
                        id="sort-select"
                        className="sort-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="relevance">Relevance</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
