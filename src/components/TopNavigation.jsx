import React from 'react'
import { Link } from 'react-router-dom'

export const TopNavigation = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>Honey's Boutique</div>
        <ul className='navbar-items'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    </nav>
  )
}
