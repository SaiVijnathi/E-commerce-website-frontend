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
                src={`https://e-commerce-website-backend-w2pn.onrender.com/${item.itemPicture}`}
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
