import React from 'react'
import { Link } from 'react-router-dom'

export const TopNavigation = () => {
  const role = localStorage.getItem("role");
  console.log("the role of this user is",role)
  return (
    <nav className='navbar'>
        <div className='logo'>Honey's Boutique</div>
        <ul className='navbar-items'>
            <li><Link to='/'>Home</Link></li>
            {
              !role && (
                <> 
                  <li><Link to='/signup'>Signup</Link></li>
                  <li><Link to='/login'>Login</Link></li>
                </>
              )
            }
            {
              role==="vendor" && (
                <>
                  <li><Link to='/items'>Your items</Link></li>
                  <li><Link to='/logout'>Logout</Link></li>
                </>
              )
            }
            {
              role==="customer" && (
                <>
                  <li><Link to='/cart'>Cart</Link></li>
                  <li><Link to='/orders'>Orders</Link></li>
                  <li><Link to='/profile'>Profile</Link></li>
                  <li><Link to='/logout'>Logout</Link></li>
                </>
              )
            }
        </ul>
    </nav>
  )
}
