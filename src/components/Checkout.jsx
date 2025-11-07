import React, { useEffect, useState } from "react";
import { TopNavigation } from "./TopNavigation";
import { Footer } from "./Footer";

export const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [total, setTotal] = useState(0);

  const apiBase = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    const totalAmount = storedCart.reduce(
      (sum, item) => sum + Number(item.decreasedCost || 0),
      0
    );
    setTotal(totalAmount);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill in all the details.");
      return;
    }

    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    window.location.href = "/"; // redirect to home or success page
  };

  return (
    <div>
      <TopNavigation />
      <div className="checkout-container">
        <h2 style={{ textAlign: "center", margin: "20px 0" }}>Checkout</h2>

        <div className="checkout-content">
          {/* Left side: Form */}
          <div className="checkout-form">
            <h3>Shipping Details</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Right side: Cart Summary */}
          <div className="checkout-summary">
            <h3>Order Summary</h3>
            {cartItems.length > 0 ? (
              <div>
                {cartItems.map((item, i) => (
                  <div key={i} className="summary-item">
                    <img
                      src={`${apiBase}/${item.itemPicture}`}
                      alt={item.itemName}
                    />
                    <div>
                      <p>{item.itemName}</p>
                      <p>₹{item.decreasedCost}</p>
                    </div>
                  </div>
                ))}
                <hr />
                <h4>Total: ₹{total}</h4>
                <button className="place-order-btn" onClick={handlePlaceOrder}>
                  Place Order
                </button>
              </div>
            ) : (
              <p>No items in cart.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
