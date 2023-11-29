// Cart.js
import React from 'react';

const Cart = ({ cartItems }) => {
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        )}
      </div>
      <p>Total: ${cartTotal.toFixed(2)}</p>
      {/* Add checkout, clear cart buttons, etc. */}
    </div>
  );
};

export default Cart;
