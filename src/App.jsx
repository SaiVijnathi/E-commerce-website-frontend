import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { Homepage } from './components/Homepage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
