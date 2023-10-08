import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function  LogIn() {
  const [email, setEmail ] = useState('')
  const [username, setUsername ] = useState('')
  const [password, setPassword ] = useState('')
  const [login, setLogin] = useState(false)


  const changeHandlerEmail = (e) => {
    setEmail( e.target.value )
  }
  const changeHandlerUsername = (e) => {
    setUsername( e.target.value )
  }
  const changeHandlerPassword = (e) => {
    setPassword( e.target.value )
  }

  const submitHandler = e => {
    e.preventDefault()
    const configuration = {
      method: "post",
      url: 'http://localhost:8000/api/login',
      data: {
        username,
        email,
        password,
      }
    }  
    axios(configuration)
      .then(res => {
      setLogin(true)
        cookies.set("TOKEN", res.data.token, {
        path: "/",
        });
        window.location.href = "/auth";
      })
      .catch(err => {
          console.error(err);
      })
  }

  return  (
       <div>
            <form onSubmit={submitHandler}>
                <div>
                    <input type='text' name='email' placeholder='Email' value={email} onChange={changeHandlerEmail}/>              
                </div>
                <div>
                    <input type='text' name='username' placeholder='Name' value={username} onChange={changeHandlerUsername} />
                 </div>
                 <div>
                     <input type='password' name='password' placeholder='Password' value={password} onChange={changeHandlerPassword} />
                </div>
                 <div>
                    <button type='submit' >Submit</button>
                 </div>
            </form>
            {login ? (
              <p>You are Logged</p>
            ): (
              <p>You are not Logged</p>
            ) }
       </div> 
    )
}

export { LogIn }