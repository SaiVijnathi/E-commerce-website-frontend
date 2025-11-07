import React from "react";
import { TopNavigation } from "./TopNavigation";
import { useEffect } from "react";
import { useState } from "react";
import { Footer } from "./Footer";

export const YourItems = () => {
  const [items, setItems] = useState("");
  const token = localStorage.getItem("token");

  const apiBase = import.meta.env.VITE_API_URL;

  const sendToken = async () => {
    let reqOptions = {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const JSONData = await fetch(`${apiBase}/verifytoken`, reqOptions);
    const JSOData = await JSONData.json();
    setItems(JSOData.data);
  };

  useEffect(() => {
    sendToken();
  }, []);

  return (
    <div>
      <TopNavigation />
      <div className="card-grid">
        {items.length > 0 ? (
          items.map((item, i) => (
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
          <p style={{ textAlign: "center" }}>No items found.</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};
