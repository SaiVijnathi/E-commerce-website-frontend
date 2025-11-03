import React, { useState, useEffect } from 'react';
import { TopNavigation } from './TopNavigation';

export const Orders = () => {
  const [orderedItems, setOrderedItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrderedItems(data);
  }, []);

  return (
    <div>
      <TopNavigation />
      <div className='card-grid'>
        {orderedItems.length > 0 ? (
          orderedItems.map((item, i) => (
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
