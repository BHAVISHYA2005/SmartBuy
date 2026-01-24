import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-pattern"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-badge animate-fade-in">
                    <span className="badge badge-primary">
                        🚀 Find Best Deals • Track Prices • Save Money
                    </span>
                </div>

                <h1 className="hero-title animate-fade-in">
                    Discover Products at
                    <br />
                    <span className="text-gradient">Unbeatable Prices</span>
                </h1>

                <p className="hero-description animate-fade-in">
                    Search thousands of products, compare prices, and find the best deals.
                    <br />
                    Your smart shopping companion for finding products within your budget.
                </p>

                <div className="hero-stats animate-fade-in">
                    <div className="stat-item">
                        <div className="stat-number">10K+</div>
                        <div className="stat-label">Products</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Categories</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number">24/7</div>
                        <div className="stat-label">Price Updates</div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    )
}

export default Hero
