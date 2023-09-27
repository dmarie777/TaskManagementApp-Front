import React, { useState, useEffect } from 'react'
import { LogIn } from './pages/LogIn.jsx'
import { Post_data } from './pages/SignUp.jsx'
import { Home } from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Post_data/>} />
          <Route path='/login' element={<LogIn/>} />
        </Routes>
      </BrowserRouter>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </React.Fragment>
  )
}

export default App
