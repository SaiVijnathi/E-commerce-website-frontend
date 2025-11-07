import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { Homepage } from './components/Homepage'
import { Logout } from './components/Logout'
import { Sell } from './components/Sell'
import { YourItems } from './components/YourItems'
import { IndividualItem } from './components/IndividualItem'
import { Cart } from './components/Cart'
import { Orders } from './components/Orders'
import { Footer } from './components/Footer'
import { Checkout } from './components/Checkout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/sell' element={<Sell/>}/>
        <Route path='/youritems' element={<YourItems/>}/>
        <Route path='/individualItem' element={<IndividualItem/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </>
  )
}

export default App
