import React, { useState } from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart }) => {
  const [sortOption, setSortOption] = useState('default');

  const handleSortChange = e => {
    setSortOption(e.target.value);
  };

  const sortedProducts = [...products];

  if (sortOption === 'priceLowToHigh') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'priceHighToLow') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'ratings') {
    sortedProducts.sort((a, b) => b.ratings - a.ratings);
  }

  return (
    <div className="product-list">
      
      <div style={styles.products}>
        {sortedProducts.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  filter: {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    marginRight: '10px',
  },
  select: {
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  products: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '20px',
  },
};

export default ProductList;
