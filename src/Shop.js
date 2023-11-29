// ShopPage.js
import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import './App.css';

const Shop = () => {
    const [cartItems, setCartItems] = useState([]);
    const [products] = useState([
    {
      id: 1,
      name: 'Product 1',
      image: 'https://thumbs.dreamstime.com/b/coffee-cup-vector-collection-illustration-40689298.jpg',
      price: 20.99,
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://thumbs.dreamstime.com/b/coffee-cup-vector-collection-illustration-40689298.jpg',
      price: 25.49,
    },
    // Add more products as needed
  ]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="shop-page">
      <h2>Shop</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={() => addToCart(product)} />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default Shop;
