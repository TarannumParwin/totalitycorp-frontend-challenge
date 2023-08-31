import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import CartImageWrapper from "./components/CartImageWrapper";
import "./style.css";

const App = () => {
  const initialProducts = [
    { id: 1, name: "Product 1", image: "product1.jpg", price: 10.99 },
    { id: 2, name: "Product 2", image: "product2.jpg", price: 15.99 },
    { id: 3, name: "Product 3", image: "product3.jpg", price: 8.99 },
    { id: 4, name: "Product 4", image: "product4.jpg", price: 12.99 },
    { id: 5, name: "Product 5", image: "product5.jpg", price: 19.99 },
    { id: 6, name: "Product 6", image: "product6.jpg", price: 20.99 },
    { id: 7, name: "Product 7", image: "product7.jpg", price: 25.99 },
    { id: 8, name: "Product 8", image: "product8.jpg", price: 28.99 },
    { id: 9, name: "Product 9", image: "product9.jpg", price: 32.99 },
    { id: 10, name: "Product 10", image: "product10.jpg", price: 39.99 },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    if (selectedProduct) {
      const existingCartItem = cartItems.find((item) => item.id === productId);
      if (existingCartItem) {
        const updatedCart = cartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCartItems(updatedCart);
      } else {
        setCartItems([...cartItems, { ...selectedProduct, quantity: 1 }]);
      }
    }
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
        : item
    );
    setCartItems(updatedCart);
  };

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <ProductList products={products} addToCart={addToCart} />
      <div className="app">
        <CartImageWrapper
          cartItems={cartItems}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
          isOpen={isCartOpen}
          onClick={toggleCart}
        />
      </div>
    </>
  );
};

export default App;
