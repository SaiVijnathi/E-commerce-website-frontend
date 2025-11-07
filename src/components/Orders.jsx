import React, { useState, useEffect } from "react";
import { TopNavigation } from "./TopNavigation";
import { Footer } from "./Footer";

export const Orders = () => {
  const [orderedItems, setOrderedItems] = useState([]);

  const apiBase = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrderedItems(data);
  }, []);

  return (
    <div>
      <TopNavigation />
      <div className="card-grid">
        {orderedItems.length > 0 ? (
          orderedItems.map((item, i) => (
            <div key={i} className="item-card">
              <img src={`${apiBase}/${item.itemPicture}`} alt={item.itemName} />
              <h3>{item.itemName}</h3>
              <div className="cost-div">
                <p>₹{item.decreasedCost}</p>
                <p  style={{color : "grey", textDecoration : "line-through"}}>₹{item.originalCost}</p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No items in cart.</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};
