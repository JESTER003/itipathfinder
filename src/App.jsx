import { useState } from 'react'
import './App.css'
import Navbar from './Components/Header/Navbar'
import Homepage from './Components/Homepage/Homepage'
import Footer from './Components/Footer/Footer'
import Card1 from './Components/Cards/Card1'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
