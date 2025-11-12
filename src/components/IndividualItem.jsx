import React from "react";
import { useLocation } from "react-router-dom";
import { TopNavigation } from "./TopNavigation";
// import { useState } from "react";
// import { useEffect } from "react";
import { Footer } from "./Footer";

export const IndividualItem = () => {
  const location = useLocation();
  const { item } = location.state || {};

  // const [role, setRole] = useState("");

  if (!item) return <p>No item details found.</p>;

  // useEffect(() => {
  //   const userRole = localStorage.getItem("role");
  //   if (userRole) {
  //     setRole(userRole);
  //   }
  // }, []);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
  };

  const apiBase = import.meta.env.VITE_API_URL;

  const buyNow = async () => {
    const reqOptions = {
      method: "POST",
      body: JSON.stringify({ id: item._id }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${apiBase}/buynow`, reqOptions);
    const result = await response.json();
    console.log(result.item);
    alert(result.msg);

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(item);
    localStorage.setItem("orders", JSON.stringify(orders));
  };

  return (
    <div>
      <TopNavigation />
      <div className="individual-item-grid">
        <img src={`${apiBase}/${item.itemPicture}`} alt={item.itemName} />
        <div className="details-div">
          <h2 style={{ margin: "5px", fontSize:"23px", fontWeight:"600"}}>{item.itemName}</h2>
          <p style={{color:"#3b3b3bff", fontSize:"18px", fontWeight:"300"}}>{item.itemDesc}</p>
          <hr style={{ width: "100%", borderTop: "1px solid #cccacaff)", margin: "10px 0" }} />
          <p style={{ margin: "5px", color: "red", fontSize:"15px" }}>
            Only {item.itemCount} items left
          </p>
          <div className="cost-div">
            <p style={{fontSize:"19px", fontWeight:"600"}}>₹{item.decreasedCost}</p>
            <p style={{fontSize:"19px", color : "grey", fontWeight:"300"}}>MRP</p>
            <p  style={{color : "grey", textDecoration : "line-through", fontSize:"19px", fontWeight:"300"}}>₹{item.originalCost}</p>
          </div>
          <p style={{color:"#037c58ff", fontSize:"14px", fontWeight:"500", letterSpacing:"0", marginTop:"0px"}}>inclusive of all taxes</p>
          <div className="size-bts">
            <p>Select Size</p>
            <div className="size-bts-div">
              <button>S</button>
              <button>M</button>
              <button>L</button>
            </div>
          </div>
            <div id="buttons">
              <button onClick={() => (addToCart())}>🛒 Add to Cart</button>
              <button onClick={() => buyNow()}>⚡ Buy Now</button>
            </div>
            <div style={{fontSize:"14px"}}>
              <p>100% Original Products</p>
              <p>Pay on delivery might be available</p>
              <p>Easy 7 days returns and exchanges</p>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
