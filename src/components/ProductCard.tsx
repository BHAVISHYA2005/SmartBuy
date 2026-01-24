import React, { useState } from 'react';
import { Product } from '../types/product';
import { useAffiliateLinks } from '../hooks/useAffiliateLinks';
import '../styles/components/ProductCard.css';

interface ProductCardProps {
    product: Product;
    index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const { handleAffiliateClick } = useAffiliateLinks();

    const discount = Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
    );

    return (
        <div
            className="product-card animate-fade-in"
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            {discount > 0 && <div className="discount-badge">{discount}% OFF</div>}

            <div className="product-image-container">
                {!imageLoaded && <div className="image-skeleton animate-pulse" />}
                <img
                    src={product.image}
                    alt={product.name}
                    className={`product-image ${imageLoaded ? 'loaded' : ''}`}
                    onLoad={() => setImageLoaded(true)}
                    loading="lazy"
                />
            </div>

            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>

                <div className="product-rating">
                    <div className="stars">
                        {[...Array(5)].map((_, i) => (
                            <span
                                key={i}
                                className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <span className="rating-text">
                        {product.rating} ({product.reviews.toLocaleString()})
                    </span>
                </div>

                <div className="product-features">
                    {product.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="feature-tag">
                            {feature}
                        </span>
                    ))}
                </div>

                <div className="product-pricing">
                    <div className="price-row">
                        <span className="current-price">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice > product.price && (
                            <span className="original-price">
                                ₹{product.originalPrice.toLocaleString()}
                            </span>
                        )}
                    </div>
                    <div className="savings-text">
                        Save ₹{(product.originalPrice - product.price).toLocaleString()}
                    </div>
                </div>

                <div className="product-actions">
                    <button
                        className="btn btn-primary btn-buy"
                        onClick={() => handleAffiliateClick(product)}
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                        Buy Now
                    </button>
                    <button className="btn-icon" aria-label="Add to wishlist">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                    </button>
                </div>

                <div className="platform-badge">
                    Available on{' '}
                    <strong>{product.affiliate === 'amazon' ? 'Amazon' : 'Flipkart'}</strong>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
