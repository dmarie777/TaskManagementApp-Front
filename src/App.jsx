import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { LogIn } from './pages/LogIn'
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
      <LogIn/>
      <h1>{message}</h1>
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
