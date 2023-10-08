import React, { useState } from 'react';
import axios from 'axios';

function Register() {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false)

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
      url: 'http://localhost:8000/api/signup',
      data: {
        username,
        email,
        password,
      }
    }  
    axios(configuration)
      .then(res => {
        setRegister(true)
      })
      .catch(err => {
        console.log(err);
      })
  }
    return (
      <div>
        <form onSubmit={submitHandler} >
          <div>
            <input type='text' name='email' placeholder='Email' value={email} onChange={changeHandlerEmail} />
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
        {register ? (
              <p>You Are Registered Successfully</p>
            ): (
              <p>You Are Not Registered</p>
            )
        }
      </div>
    )
}

export { Register }