import React, { useState } from "react";
import { TopNavigation } from "./TopNavigation";
import emptyImage from "../assets/images/empty-image.jpg";
import { Footer } from "./Footer";

export const Sell = () => {
  const [imgFile, setImgFile] = useState();
  const [imgPreview, setImgPreview] = useState(emptyImage);
  const [itemName, setItemName] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [modelName, setModelName] = useState("");
  const [itemCount, setItemCount] = useState("");
  const [originalCost, setOriginalCost] = useState();
  const [decreasedCost, setDecreasedCost] = useState();

  const token = localStorage.getItem("token");

  const apiBase = import.meta.env.VITE_API_URL;

  const sellItems = async () => {
    const dataToSend = new FormData();
    dataToSend.append("image", imgFile);
    dataToSend.append("itemName", itemName);
    dataToSend.append("itemDesc", itemDesc);
    dataToSend.append("modelName", modelName);
    dataToSend.append("itemCount", itemCount);
    dataToSend.append("originalCost", originalCost);
    dataToSend.append("decreasedCost", decreasedCost);
    dataToSend.append("token", token);
    console.log("data to send", dataToSend);
    const reqOptions = {
      method: "POST",
      body: dataToSend,
    };
    try {
      const response = await fetch(`${apiBase}/sellitems`, reqOptions);
      console.log("data sent successfully - sell items");
      let result = await response.json();
      if (result.status === "success") {
        console.log("response received", response);
        alert(result.msg);
      }
    } catch (err) {
      console.log("data is not sent", err);
    }
  };

  return (
    <div>
      <TopNavigation />
      <span id="sell-items-span">Fill this to sell your items</span>
      <form className="sell-items">
        <div>
          <img src={imgPreview} alt="imgURL" id="image"></img>
        </div>
        <div>
          <label style={{ lineHeight: "25px" }}>Upload item picture</label>
          <input
            type="file"
            onChange={(e) => {
              setImgFile(e.target.files[0]);
              let selectedImage = URL.createObjectURL(e.target.files[0]);
              setImgPreview(selectedImage);
            }}
          />
        </div>
        <div>
          <label>Item Name</label>
          <input onChange={(e) => setItemName(e.target.value)} />
        </div>
        <div>
          <label>Item Description</label>
          <input onChange={(e) => setItemDesc(e.target.value)} />
        </div>
        <div>
          <label>Model Name</label>
          <select onChange={(e) => setModelName(e.target.value)}>
            <option value="">select one</option>
            <option value="kurthis">Kurthis</option>
            <option value="lehangas">Lehangas</option>
            <option value="jeans">Jeans</option>
            <option value="tshirts">Tshirts</option>
            <option value="night wears">Night Wears</option>
          </select>
        </div>
        <div>
          <label>Item Count</label>
          <select onChange={(e) => setItemCount(e.target.value)}>
            <option value="">select one</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
        <div>
          <label>Original Cost</label>
          <input onChange={(e) => setOriginalCost(e.target.value)} />
        </div>
        <div>
          <label>Decreased Cost</label>
          <input onChange={(e) => setDecreasedCost(e.target.value)} />
        </div>
        <button type="button" onClick={() => sellItems()}>
          Sell
        </button>
      </form>
      <Footer/>
    </div>
  );
};
