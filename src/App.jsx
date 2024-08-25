import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Header/Navbar'
import Homepage from './Components/Homepage/Homepage'
import Footer from './Components/Footer/Footer'
import Card1 from './Components/Cards/Card1'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'

function App() {

  // return (
  //   <>
  //     <Navbar />
  //     <Outlet />
  //     <Footer />
  //   </>
  // )

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // If the user is not authenticated, redirect them to the login page
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      {/* Render Navbar and Footer only if the user is authenticated */}
      {isAuthenticated && <Navbar />}

      {/* Outlet will render the appropriate component based on the current route */}
      <Outlet context={[isAuthenticated, setIsAuthenticated]} />

      {isAuthenticated && <Footer />}
    </div>
  );
}

// is authenticated system code ::
export default App
