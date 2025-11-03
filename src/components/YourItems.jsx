import React from 'react'
import { TopNavigation } from './TopNavigation'
import { useEffect } from 'react';
import { useState } from 'react';

export const YourItems = () => {
  const [items, setItems] = useState("");
  const token = localStorage.getItem("token");
  
  const sendToken = async () => {
      let reqOptions = {
      method:"POST",
      body : JSON.stringify({ token }),
      headers : {
        "Content-Type" : "application/json"
      }
    }
    const JSONData = await fetch("https://e-commerce-website-backend-w2pn.onrender.com/verifytoken", reqOptions);
    const JSOData = await JSONData.json();
    setItems(JSOData.data)   
  }

  useEffect(()=>{
    sendToken()
  },[]);

  return (
    <div>
      <TopNavigation/>
      <div className='card-grid'>
        {
          items.length > 0 ? (
          items.map((item, i) => (
            <div key={i} className="item-card">
                <img
                  src={`https://e-commerce-website-backend-w2pn.onrender.com/${item.itemPicture}`}
                  alt={item.itemName}/>
                <h3>{item.itemName}</h3>
                <p>₹{item.itemCost}</p>
              </div>
          ))
          ) : (
            <p style={{ textAlign: "center" }}>No items found.</p>
          )
        }
      </div>
    </div>
  )
}
