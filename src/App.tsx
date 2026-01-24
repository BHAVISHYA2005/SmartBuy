import './styles/App.css'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import PriceFilter from './components/PriceFilter'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import { products } from './data/products'
import { useProductFilter } from './hooks/useProductFilter'

const App: React.FC = () => {
  const {
    filters,
    updateFilters,
    sortBy,
    setSortBy,
    filteredProducts
  } = useProductFilter(products)

  return (
    <div className="app">
      <Hero />

      <section className="search-section">
        <div className="container">
          <SearchBar
            searchQuery={filters.searchQuery}
            setSearchQuery={(q) => updateFilters({ searchQuery: q })}
          />

          <PriceFilter
            priceRange={filters.priceRange}
            setPriceRange={(r) => updateFilters({ priceRange: r })}
            category={filters.category}
            setCategory={(c) => updateFilters({ category: c })}
          />
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <ProductGrid
            products={filteredProducts}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
