import React, { useState } from 'react';
import { Product } from '../types/product';
import { useAffiliateLinks } from '../hooks/useAffiliateLinks';
import PriceSparkline from './PriceSparkline';
import { getLowestPrice, getPriceTrend } from '../utils/priceHelpers';
import '../styles/components/ProductCard.css';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const { handleAffiliateClick } = useAffiliateLinks();

    const hasHistory = product.priceHistory && product.priceHistory.length > 0;
    const lowestPrice = hasHistory ? getLowestPrice(product.priceHistory!) : null;
    const trend = hasHistory ? getPriceTrend(product.priceHistory!) : null;
    const isLowest = lowestPrice && product.price <= lowestPrice;

    return (
        <div className="product-card">
            <div className="product-image-container">
                {!imageLoaded && <div className="image-skeleton animate-pulse" />}
                <img
                    src={product.image}
                    alt={product.name}
                    className={`product-image ${imageLoaded ? 'loaded' : ''}`}
                    onLoad={() => setImageLoaded(true)}
                    loading="lazy"
                />
                {isLowest && (
                    <span className="badge badge-success">Historic Low</span>
                )}
            </div>

            <div className="product-content">
                <div className="product-header">
                    <span className="category-tag">{product.category}</span>
                    <div className="rating">
                        <span className="star">★</span>
                        <span>{product.rating}</span>
                        <span className="review-count">({product.reviews.toLocaleString()})</span>
                    </div>
                </div>

                <h3 className="product-title">{product.name}</h3>

                <div className="price-section">
                    <div className="price-info">
                        <span className="current-price">₹{product.price.toLocaleString()}</span>
                        <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                    </div>
                    {hasHistory && (
                        <PriceSparkline history={product.priceHistory!} />
                    )}
                </div>

                <ul className="feature-list">
                    {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>

                <div className="card-footer">
                    <div className="affiliate-info">
                        <span className={`platform-icon icon-${product.affiliate}`}></span>
                        <span>Available on {product.affiliate}</span>
                    </div>
                    {hasHistory && trend === 'down' && (
                        <div className="trend-insight">
                            🔥 Price is dropping!
                        </div>
                    )}
                </div>

                <button
                    className="btn btn-primary btn-block"
                    onClick={() => handleAffiliateClick(product)}
                >
                    View Deal
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
