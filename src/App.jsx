import React, { useState, useEffect } from 'react'
//import { Link, Route, Swich } from 'react-router-dom'
//import { Home } from './pages/Home'
//import { Secret } from './Secret'
import { LogIn } from './pages/LogIn.jsx'
import { Post_data } from './pages/SignUp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
  }, [])
      
  return (
    <React.Fragment>
      <h1>{message}</h1>
      <h2>Sign Up</h2>
      <Post_data/>
      <h2>LogIn</h2>
      <LogIn/>
    </React.Fragment>
  )
}

export default App
