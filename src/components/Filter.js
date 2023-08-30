import React, { useState } from 'react';

const Filter = ({ applyFilters }) => {
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleApplyFilters = () => {
    applyFilters({ category, minPrice, maxPrice });
  };

  return (
    <div className="filter-section">
      <div className="filter-group">
        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Category A">Category A</option>
          <option value="Category B">Category B</option>
          {/* ... add other categories */}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          id="minPrice"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <button className="apply-filters-button" onClick={handleApplyFilters}>
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
