import React, { useState, useEffect } from 'react'
import { LogIn } from './pages/LogIn.jsx'
import { Register } from './pages/SignUp.jsx'
import { Home } from './pages/Home.jsx'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import FreeComponent from './components/FreeComponent.jsx'
import AuthComponent from './components/AuthComponent.jsx'
import ProtectedRoute from './components/ProtectedRoutes.jsx'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
  }, [])
      
  return (
    <React.Fragment>
      <h1>{message}</h1>

      <BrowserRouter> 
        <div className = "links">
          <Link to="/" >home</Link>
          <Link to="/signup" >Sign up</Link>
          <Link to="/login" >Login</Link>
          <Link to="/free" >Free</Link>

        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Register/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/free' element={<FreeComponent/>} />
          <Route 
            path='/auth' 
            element={
              <ProtectedRoute >
                <AuthComponent/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
