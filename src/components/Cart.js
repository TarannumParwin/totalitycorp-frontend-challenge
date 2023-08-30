

import React, { useState } from 'react';
import Checkout from './Checkout';

const Cart = ({ cartItems, increaseQuantity, decreaseQuantity, removeItem }) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const openCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  // Calculate the total based on cartItems
  const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <div className="cart-item-quantity">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p>Total Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
            <p>Total Cost: ${total.toFixed(2)}</p>
            <button
              className="checkout-button"
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                padding: '5px 10px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
                transition: 'background-color 0.3s ease',
              }}
              onClick={openCheckout}
            >
              Continue to Checkout
            </button>
          </div>
          {isCheckoutOpen && <Checkout onClose={closeCheckout} cartItems={cartItems} total={total} />}
        </>
      )}
    </div>
  );
};

export default Cart;

