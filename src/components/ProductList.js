import React, { useState } from "react";
import Product from "./Product";

const ProductList = ({ products, addToCart }) => {
  const [sortOption, setSortOption] = useState("default");

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = [...products];

  if (sortOption === "priceLowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHighToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "ratings") {
    sortedProducts.sort((a, b) => b.ratings - a.ratings);
  }

  return (
    <div>
      <div className="header">
        <h2>Product List</h2>
        <div className="filter">
          <label className="label">Sort by:</label>
          <select className="select" onChange={handleSortChange}>
            <option value="default">Default</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="ratings">Ratings</option>
          </select>
        </div>
      </div>

      <div className="products">
        {sortedProducts.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
