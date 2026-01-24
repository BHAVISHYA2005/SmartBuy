import { products, filterProducts, generateAffiliateLink } from '../data/products'
import ProductCard from './ProductCard'
import './ProductGrid.css'

function ProductGrid({ searchQuery, priceRange, category }) {
    const filteredProducts = filterProducts(products, searchQuery, priceRange, category)

    if (filteredProducts.length === 0) {
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
        )
    }

    return (
        <div className="product-grid-container">
            <div className="product-grid-header">
                <h2>
                    Found <span className="text-gradient">{filteredProducts.length}</span> Products
                </h2>
                <div className="sort-controls">
                    <label>Sort by:</label>
                    <select className="sort-select">
                        <option value="relevance">Relevance</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Rating</option>
                        <option value="popularity">Popularity</option>
                    </select>
                </div>
            </div>

            <div className="product-grid">
                {filteredProducts.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        affiliateLink={generateAffiliateLink(product)}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductGrid
