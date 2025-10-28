import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='signup-div'>
    <div className='logo'  style={{margin:"20px"}}><Link to='/' style={{color:"#D38204"}}>Honey's Boutique</Link></div>
    <div className='signup'>
      <div style={{fontSize:"17.5px", fontWeight:"600"}}>Login</div>
        <form className='signup-form'>
            <div>
                <label>Email</label>
                <input/>
            </div>
            <div>
                <label>Password</label>
                <input/>
            </div>
            <button>Login</button>
            <span className='signup-span'>Don't have an account? <Link to='/signup' style={{textDecoration:"underline", color:"#00684a"}}>Signup</Link></span>
        </form>
    </div>
    </div>
  )
}
