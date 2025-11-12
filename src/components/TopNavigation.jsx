import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const TopNavigation = () => {
  const role = localStorage.getItem("role");
  console.log("the role of this user is", role);

  const categories = ["all", "kurthis", "lehangas", "tshirts", "jeans", "night wears"];
  const [activeCategory, setActiveCategory] = useState("all");

  const navigate = useNavigate();

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat); // update state locally
    navigate("/", { state: { category: cat } }); // send to Homepage
  };

  return (
    <nav className="navbar">
      <div className="logo">Honey's Boutique</div>
      <ul className="navbar-items">
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
              Categories
              <ul className="dropdown-menu">
                {categories.map((cat, index) => (
                  <li key={index} style={{ cursor: "pointer" }} onClick={() => handleCategoryClick(cat)}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </li>
                ))}
              </ul>
            </li>

        {!role && (
          <>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}

        {role === "vendor" && (
          <>
            <li><Link to="/sell">Sell</Link></li>
            <li><Link to="/youritems">Your items</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </>
        )}

        {role === "customer" && (
          <>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};
