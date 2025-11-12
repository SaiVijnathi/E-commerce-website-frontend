import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { TopNavigation } from "./TopNavigation";

export const Homepage = () => {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const navigate = useNavigate();
  const location = useLocation();
  const apiBase = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
    }
  }, [location.state]);

  const getData = async () => {
    try {
      const response = await fetch(`${apiBase}/getItemData`);
      const result = await response.json();
      if (result.status === "success") {
        setItems(result.data);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((i) => i.modelName === activeCategory);

  const handleClick = (item) => {
    navigate("/individualItem", { state: { item } });
  };

  return (
    <>
      <TopNavigation />
      <div className="card-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, i) => (
            <div key={i} className="item-card" onClick={() => handleClick(item)}>
              <img src={`${apiBase}/${item.itemPicture}`} alt={item.itemName} />
              <h3>{item.itemName}</h3>
              <div className="cost-div">
                <p>₹{item.decreasedCost}</p>
                <p style={{ color: "grey", textDecoration: "line-through" }}>
                  ₹{item.originalCost}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No items found.</p>
        )}
      </div>
      <Footer />
    </>
  );
};
