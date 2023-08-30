import React, { Component} from 'react';
import axios from 'axios';

class Post_data extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email:'',
      username:'',
      password:'',
    }
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:8000/api/signup', this.state)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    const {email, username, password} = this.state

    return (
      <div>
        <form onSubmit={this.submitHandler} >
          <div>
            <input type='text' name='email' placeholder='Email' value={email} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='text' name='username' placeholder='Name' value={username} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='password' name='password' placeholder='Password' value={password} onChange={this.changeHandler} />
          </div>
          <div>
            <button type='submit' >Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export { Post_data }

