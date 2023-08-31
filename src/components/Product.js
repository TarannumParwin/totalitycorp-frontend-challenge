import React from "react";

const Product = ({ product, addToCart }) => {
  const { id, name, image, price } = product;

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
