// CartDisplayComponent.js
import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';

function CartDisplayComponent() {
    const { cartItems, total, removeFromCart } = useContext(CartContext);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownVisible(!isDropdownVisible);
    };
  return (
    <div className="cart-dropdown relative">
      <FaShoppingCart 
        size="1.5em" 
        className="text-white cursor-pointer" 
        onClick={toggleDropdown}
      />

      {cartItems.length > 0 && (
        <span className="cart-item-count absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-2 py-1">
          {cartItems.length}
        </span>
      )}

      {isDropdownVisible && (
        <div className="cart-dropdown-content absolute right-0 bg-white p-4 w-72 shadow-xl rounded mt-2 z-10">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item flex items-center justify-between border-b last:border-b-0 py-2">
            <div className="flex items-center">
              <img src={item.src} alt={item.name} className="cart-item-image w-12 h-12 object-cover mr-3"/>
              <div>
                <h4 className="text-sm font-semibold">{item.name}</h4>
                <p className="text-xs text-gray-600">{item.price}</p>
              </div>
            </div>
            <FaTimes
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 cursor-pointer"
              title="Remove item"
            />
          </div>
        ))}
        <div className="cart-dropdown-footer mt-3 text-right">
          <div className="cart-total text-lg">
            <strong>Total:</strong> ${total.toFixed(2)}
          </div>
          <button className="proceed-checkout-btn bg-blue-600 text-white py-2 px-4 mt-3 rounded hover:bg-blue-700 transition duration-200">
            Proceed to Checkout
          </button>
        </div>
      </div>
        )}
    </div>
  );
}

export default CartDisplayComponent;
