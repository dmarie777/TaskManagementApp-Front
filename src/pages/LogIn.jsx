import React, { useState } from "react";
import axios from "axios";

function  LogIn() {
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')

    const state = {};
    state.email = email;
    state.password = password;

    const changeHandlerEmail = (e) => {
        setEmail( e.target.value )
      }
      const changeHandlerPassword = (e) => {
        setPassword( e.target.value )
      }

    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', state )
        .then(res => {
          if (res.status == 200) {
            console.log("succes access")
          }
        })
        .catch((err) => {
          console.log(err)
        })
      }

    return  (
       <div>
            <form onSubmit={submitHandler}>
                <div>
                    <input type='text' name='email' placeholder='Email' value={email} onChange={changeHandlerEmail}/>              
                </div>
                 <div>
                     <input type='password' name='password' placeholder='Password' value={password} onChange={changeHandlerPassword} />
                </div>
                 <div>
                    <button type='submit' >Submit</button>
                 </div>
            </form>
       </div> 
    )
}

export { LogIn }