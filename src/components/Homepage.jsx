import React, { useState, useEffect } from "react";
import { TopNavigation } from "./TopNavigation";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("kurthis");
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3456/getItemData");
      const result = await response.json();
      console.log(result);

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

  const handleClick = (item) => {
    navigate("/individualItem", { state: { item } });
  };

  // Filter by category
  const filteredItems = items.filter((item) => item.modelName === activeCategory);

  return (
    <>
      <TopNavigation />
      <div>
        <div className="menu-div">
          <ul>
            <li onClick={() => setActiveCategory("kurthis")}>Kurthis</li>
            <li onClick={() => setActiveCategory("lehangas")}>Lehangas</li>
            <li onClick={() => setActiveCategory("tshirts")}>Tshirts</li>
            <li onClick={() => setActiveCategory("jeans")}>Jeans</li>
            <li onClick={() => setActiveCategory("night wears")}>Night Wears</li>
          </ul>
        </div>

        <div className="card-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, i) => (
              <div key={i} className="item-card" onClick={() => handleClick(item)} >
                <img
                  src={`http://localhost:3456/${item.itemPicture}`}
                  alt={item.itemName}/>
                <h3>{item.itemName}</h3>
                <p>₹{item.itemCost}</p>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>No items found.</p>
          )}
        </div>
      </div>
    </>
  );
};
