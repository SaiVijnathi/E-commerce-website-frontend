import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { Homepage } from './components/Homepage'
import { Logout } from './components/Logout'
import { Sell } from './components/Sell'
import { YourItems } from './components/YourItems'

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
      </Routes>
    </>
  )
}

export default App
