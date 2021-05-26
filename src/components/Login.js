import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  handleUsername=(event)=>
  {
    this.setState({
        username:event.target.value
    })
  }

  handlePassword=(event)=>
  {
    this.setState({
        password:event.target.value
    })
  }

  handleSubmit=event=>
  {
      alert(`Username :${this.state.username} : Password : ${this.state.password}`)
      event.preventDefault()
  }
  render() {
    return (
      <div>
        <h2>Login Here</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Username</label>
            <input className='form-control' onChange={this.handleUsername} value={this.state.username} />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input type='password' className='form-control' onChange={this.handlePassword} value={this.state.password} />
          </div>
          <br/>
          <button className='btn btn-success'>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
