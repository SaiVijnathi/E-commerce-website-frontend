import React from 'react'
import { TopNavigation } from './TopNavigation'
import { useEffect } from 'react';
import { useState } from 'react';

export const YourItems = () => {
  const [email, setEmail] = useState("");
  const token = localStorage.getItem("token");
  
  const sendToken = async () => {
      let reqOptions = {
      method:"POST",
      body : JSON.stringify({ token }),
      headers : {
        "Content-Type" : "application/json"
      }
    }
    const JSONData = await fetch("http://localhost:3456/verifytoken", reqOptions);
    const JSOData = await JSONData.json();
    setEmail(JSOData.data.email)   
  }

  // const getItems = async () => {

  // }

  useEffect(()=>{
    sendToken()
  },[])
  return (
    <div>
      <TopNavigation/>
    </div>
  )
}
