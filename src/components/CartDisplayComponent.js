// CartDisplayComponent.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function CartDisplayComponent() {
  const { cartItems, total } = useContext(CartContext);

  return (
    <div>
      {/* List cart items */}
      {cartItems.map(item => (
        <div key={item.id}>
          {/* Display item details */}
        </div>
      ))}
      <p>Total: ${total.toFixed(2)}</p>
      <p>Item: {cartItems.CartContext}</p>
      {/* Add checkout button or other features */}
    </div>
  );
}

export default CartDisplayComponent;
