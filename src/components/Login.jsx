import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginData = async () => {
    const dataToSend = {
      email,
      password
    }
    const reqOptions = {
      body : JSON.stringify(dataToSend),
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      }
    }
    try{
      const JSONData = await fetch("http://localhost:3456/login",reqOptions);
      const JSOData = await JSONData.json();
      console.log("Data received",JSOData.status)
      alert(JSOData.msg);
      if(JSOData.status === "success"){
        navigate("/");
        const token = JSOData.token;
        localStorage.setItem("token", token);
        console.log(JSOData.data)
        localStorage.setItem("role", JSOData.data[0].role)
      }
    }
    catch(err){
      console.log("Data not sent", err)
    }
  }

  // useEffect(()=>{
  //   navigate('/');
  // },[token])

  return (
    <div className='signup-div'>
    <div className='logo'  style={{margin:"20px"}}><Link to='/' style={{color:"#D38204"}}>Honey's Boutique</Link></div>
    <div className='signup'>
      <div style={{fontSize:"17.5px", fontWeight:"600"}}>Login</div>
        <form className='signup-form'>
            <div>
                <label>Email</label>
                <input onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button onClick={()=>loginData()} type='button'>Login</button>
            <span className='signup-span'>Don't have an account? <Link to='/signup' style={{textDecoration:"underline", color:"#00684a"}}>Signup</Link></span>
        </form>
    </div>
    </div>
  )
}
