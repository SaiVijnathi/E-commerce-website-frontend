import React from 'react'
import { useLocation } from "react-router-dom";
import { TopNavigation } from './TopNavigation';
import { useState } from 'react';
import { useEffect } from 'react';

export const IndividualItem = () => {
  const location = useLocation();
  const { item } = location.state || {};

  const [role, setRole] = useState("");

    if (!item) return <p>No item details found.</p>;

    useEffect(() => {
        const userRole = localStorage.getItem("role");
        if(userRole){
            setRole(userRole)};
    }, []);

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Item added to cart!");
    };

    const buyNow = async () => {
        const reqOptions = {
            method: "POST",
            body: JSON.stringify({ id: item._id }),
            headers: { 
                "Content-Type": "application/json"
            }
        }
        const response = await fetch("http://localhost:3456/buynow", reqOptions);
        const result = await response.json();
        console.log(result.item);
        alert(result.msg);
    }

  return (
    <div>
        <TopNavigation/>
        <div className='individual-item-grid'>
            <img src={`http://localhost:3456/${item.itemPicture}`} alt={item.itemName}/>
            <div className='details-div'>
                <h2 style={{margin : "5px"}}>{item.itemName}</h2>
                <p style={{margin : "5px", color : "red"}}>Only {item.itemCount} items left</p>
                <p style={{margin : "5px", fontWeight : "500"}}>₹{item.itemCost}</p>
                {
                    role === "customer" ? (
                      <div id='buttons'>
                        <button onClick={()=>addToCart()}>🛒 Add to Cart</button>
                        <button onClick={()=>buyNow()}>⚡ Buy Now</button>
                      </div>
                    ):(
                        <></>
                    )
                }
                
            </div>
        </div>
    </div>
  );
}
