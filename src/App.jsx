import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import PriceFilter from './components/PriceFilter'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 })
  const [category, setCategory] = useState('all')

  return (
    <div className="app">
      {/* Hero Section */}
      <Hero />
      
      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <SearchBar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          
          <PriceFilter 
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            category={category}
            setCategory={setCategory}
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <ProductGrid 
            searchQuery={searchQuery}
            priceRange={priceRange}
            category={category}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
