import React, { useState } from 'react';
import axios from 'axios';

function Post_data() {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const state = {};
  state.username = username;
  state.email = email;
  state.password = password;

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
    console.log(state)
    axios.post('http://localhost:8000/api/signup', state)
      .then(res => {
        console.log(res);
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
      </div>
    )
}

export { Post_data }