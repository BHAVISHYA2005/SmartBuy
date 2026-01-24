import './PriceFilter.css'

function PriceFilter({ priceRange, setPriceRange, category, setCategory }) {
    const priceRanges = [
        { label: 'All Prices', min: 0, max: 100000 },
        { label: 'Under ₹5,000', min: 0, max: 5000 },
        { label: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
        { label: '₹10,000 - ₹20,000', min: 10000, max: 20000 },
        { label: '₹20,000 - ₹50,000', min: 20000, max: 50000 },
        { label: 'Above ₹50,000', min: 50000, max: 100000 }
    ]

    const categories = [
        { value: 'all', label: '📱 All Categories', icon: '🛍️' },
        { value: 'mobile', label: 'Mobile Phones', icon: '📱' },
        { value: 'laptop', label: 'Laptops', icon: '💻' },
        { value: 'headphones', label: 'Headphones', icon: '🎧' },
        { value: 'watch', label: 'Smart Watches', icon: '⌚' },
        { value: 'camera', label: 'Cameras', icon: '📷' },
        { value: 'tablet', label: 'Tablets', icon: '📱' }
    ]

    return (
        <div className="price-filter-container">
            {/* Category Filter */}
            <div className="filter-section">
                <h3 className="filter-title">Categories</h3>
                <div className="category-grid">
                    {categories.map((cat) => (
                        <button
                            key={cat.value}
                            className={`category-btn ${category === cat.value ? 'active' : ''}`}
                            onClick={() => setCategory(cat.value)}
                        >
                            <span className="category-icon">{cat.icon}</span>
                            <span className="category-label">{cat.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Price Range Filter */}
            <div className="filter-section">
                <h3 className="filter-title">Price Range</h3>
                <div className="price-range-grid">
                    {priceRanges.map((range, index) => (
                        <button
                            key={index}
                            className={`price-range-btn ${priceRange.min === range.min && priceRange.max === range.max ? 'active' : ''
                                }`}
                            onClick={() => setPriceRange({ min: range.min, max: range.max })}
                        >
                            {range.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Custom Price Range */}
            <div className="filter-section">
                <h3 className="filter-title">Custom Range</h3>
                <div className="custom-range">
                    <div className="range-input-group">
                        <label className="range-label">Min Price</label>
                        <input
                            type="number"
                            className="range-input"
                            placeholder="₹0"
                            value={priceRange.min}
                            onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) || 0 })}
                        />
                    </div>
                    <div className="range-separator">—</div>
                    <div className="range-input-group">
                        <label className="range-label">Max Price</label>
                        <input
                            type="number"
                            className="range-input"
                            placeholder="₹100,000"
                            value={priceRange.max}
                            onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) || 100000 })}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceFilter
