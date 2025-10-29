import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signupData = async () => {
        const dataToSend = {
            name,
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
            const JSONData = await fetch("http://localhost:3456/signup", reqOptions);
            const JSOData = await JSONData.json();
            console.log(JSOData.status)
            console.log("name", name)
            console.log("email", email)
            console.log("password", password)
            console.log("Response Data",JSOData);
            console.log("JSON Data", JSONData.status);
            alert(JSOData.status)
        }catch(err){
            console.log("Data is not sent or received", err)
        }
    }

  return (
    <div className='signup-div'>
    <div className='logo'  style={{margin:"20px"}}><Link to='/' style={{color:"#D38204"}}>Honey's Boutique</Link></div>
        <div className='signup'>
        <div style={{fontSize:"17.5px", fontWeight:"600"}}>Signup</div>
            <form className='signup-form'>
                <div>
                    <label>Name</label>
                    <input onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <label>Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button onClick={()=>signupData()} type='button'>Signup</button>
                <span className='signup-span'>Already have an account? <Link to='/login' style={{textDecoration:"underline", color:"#00684a"}}>Login</Link></span>
            </form>
        </div>
    </div>
  )
}
