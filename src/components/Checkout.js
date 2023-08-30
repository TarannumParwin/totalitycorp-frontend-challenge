


import React, { useState } from 'react';

const Checkout = ({ cartItems, total, onClose }) => {
  const [shippingInfo, setShippingInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});

  const handleShippingChange = e => {
    const { name, value } = e.target;
    setShippingInfo(prevShippingInfo => ({
      ...prevShippingInfo,
      [name]: value
    }));
  };

  const handlePaymentChange = e => {
    const { name, value } = e.target;
    setPaymentInfo(prevPaymentInfo => ({
      ...prevPaymentInfo,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Shipping Information:', shippingInfo);
    console.log('Payment Information:', paymentInfo);
    console.log('Cart Items:', cartItems);
    console.log('Total:', total);
    onClose(); // Close the modal after submission
  };

  return (
    <div className="checkout-modal-overlay">
      <div className="checkout-modal-content">
        <span className="checkout-modal-close" onClick={onClose}>
          &times;
        </span>
        <div className="checkout">
          <h2>Checkout</h2>
          <div className="shipping-info">
            <h3>Shipping Information</h3>
            <form>
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" onChange={handleShippingChange} required />
              
             

          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" onChange={handleShippingChange} required />

        

          
              
            </form>
          </div>
          <div className="payment-info">
            <h3>Payment Information</h3>
            <form>
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" name="cardNumber" onChange={handlePaymentChange} required />
              
              

        
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" name="cvv" onChange={handlePaymentChange} required />
              
            </form>
          </div>
          <button className="place-order-button" onClick={handleSubmit}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
