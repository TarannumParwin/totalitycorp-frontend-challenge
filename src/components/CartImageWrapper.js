import React from 'react';
import Cart from './Cart';
import cartImage from './cart-148964_1280.webp';

const CartImageWrapper = ({ cartItems, isOpen, onClick, increaseQuantity, decreaseQuantity, removeItem }) => {
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-image-wrapper">
      <img src={cartImage} alt="Cart" onClick={onClick} />
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
      {isOpen && (
        <Cart
          cartItems={cartItems}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />
      )}
    </div>
  );
};

export default CartImageWrapper;
