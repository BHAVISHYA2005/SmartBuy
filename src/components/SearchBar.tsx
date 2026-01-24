import React, { useState } from 'react';
import '../styles/components/SearchBar.css';

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
    const [isFocused, setIsFocused] = useState(false);

    const popularSearches = [
        'iPhone under 50k',
        'Laptop under 40k',
        'Headphones under 5k',
        'Smart Watch under 10k',
    ];

    return (
        <div className="search-bar-container">
            <div className={`search-bar ${isFocused ? 'focused' : ''}`}>
                <div className="search-icon">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                </div>

                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for products... (e.g., 'mobile under 20k')"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                />

                {searchQuery && (
                    <button
                        className="search-clear"
                        onClick={() => setSearchQuery('')}
                        aria-label="Clear search"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                )}

                <button className="search-button">
                    <span>Search</span>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </button>
            </div>

            <div className="popular-searches">
                <span className="popular-label">Popular:</span>
                {popularSearches.map((search, index) => (
                    <button
                        key={index}
                        className="popular-tag"
                        onClick={() => setSearchQuery(search)}
                    >
                        {search}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
