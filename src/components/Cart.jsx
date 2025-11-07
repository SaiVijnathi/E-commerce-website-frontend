// import React, { useState, useEffect } from "react";
// import { TopNavigation } from "./TopNavigation";
// import { Footer } from "./Footer";
// import { useNavigate } from "react-router-dom";

// export const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, []);

//   const checkout = () => {
//     navigate('/checkout')
//   }

//   const apiBase = import.meta.env.VITE_API_URL;

//   return (
//     <div>
//       <TopNavigation />
//       <div className="card-grid" onClick={()=>checkout()}>
//         {cartItems.length > 0 ? (
//           cartItems.map((item, i) => (
//             <div key={i} className="item-card">
//               <img src={`${apiBase}/${item.itemPicture}`} alt={item.itemName} />
//               <h3>{item.itemName}</h3>
//               <div className="cost-div">
//                 <p>₹{item.decreasedCost}</p>
//                 <p  style={{color : "grey", textDecoration : "line-through"}}>₹{item.originalCost}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p style={{ textAlign: "center" }}>No items in cart.</p>
//         )}
//       </div>
//       <Footer/>
//     </div>
//   );
// };










//checkout
import React, { useState } from "react";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Red T-Shirt",
      price: 499,
      qty: 1,
      size: "M",
      img: "https://via.placeholder.com/80",
      checked: true,
    },
    {
      id: 2,
      name: "Blue Jeans",
      price: 999,
      qty: 1,
      size: "L",
      img: "https://via.placeholder.com/80",
      checked: true,
    },
  ]);

  const handleCheck = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleQtyChange = (id, value) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, qty: parseInt(value) } : item
      )
    );
  };

  const handleSizeChange = (id, value) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, size: value } : item
      )
    );
  };

  const totalAmount = cartItems
    .filter((item) => item.checked)
    .reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return (
    <div className="checkout-container">
      {/* Left Section */}
      <div className="cart-section">
        <h2>Your Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <img src={item.img} alt={item.name} />
            <div className="item-info">
              <h4>{item.name}</h4>
              <div className="item-controls">
                <label>
                  Qty:
                  <select
                    value={item.qty}
                    onChange={(e) => handleQtyChange(item.id, e.target.value)}
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Size:
                  <select
                    value={item.size}
                    onChange={(e) => handleSizeChange(item.id, e.target.value)}
                  >
                    {["S", "M", "L", "XL"].map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <p className="item-price">₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="summary-section">
        <h2>Order Summary</h2>
        <p>Total Items: {cartItems.filter((i) => i.checked).length}</p>
        <h3>Total Amount: ₹{totalAmount}</h3>
        <button className="place-order-btn">Place Order</button>
      </div>
    </div>
  );
};
