import React, { useState, useEffect } from 'react';
import { TopNavigation } from './TopNavigation';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  return (
    <div>
      <TopNavigation />
      <div className='card-grid'>
        {cartItems.length > 0 ? (
          cartItems.map((item, i) => (
            <div key={i} className="item-card">
              <img
                src={`http://localhost:3456/${item.itemPicture}`}
                alt={item.itemName}
              />
              <h3>{item.itemName}</h3>
              <p>₹{item.itemCost}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No items in cart.</p>
        )}
      </div>
    </div>
  );
};
