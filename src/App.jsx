import {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import inicio from './pages/inicio'
 
const App = () => {
 
  const [color] = useState("#89cff0")
  document.body.style.backgroundColor = color
 
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/inicio" element={<Inicio/>} />
      </Routes>
  )
}
 
export default App