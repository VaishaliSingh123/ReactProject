import React, { Component } from 'react';
import login from './login.css';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props){
  super(props);
  this.state={
    valuee:true
  }
}
  render() {
    return (
      <div>
        <div className="login-form">
            <h1>Login</h1>
            <form onSubmit={this.handleLogin.bind(this)}>
            <div className="form-group ">
              <input type="text" className="form-control" placeholder="Username "  ref="loginUser"/>
              <i className="fa fa-user"></i>
            </div>
            <div className="form-group log-status">
              <input type="password" className="form-control" placeholder="Password" ref="loginPassword" />
              <i className="fa fa-lock"></i>
            </div>
             <span className="alert">Invalid Credentials</span>
             <a className="link" href="#">Lost your password?</a>
            <button type="submit" className="log-btn" >Log in</button>
            </form>
        </div>
     </div>
    );
  }

  handleLogin(event){
    event.preventDefault();
    const loginUser = this.refs.loginUser;
    const user = loginUser.value;
    console.log(user);

    const loginPassword = this.refs.loginPassword;
    const userPass = loginPassword.value;
    console.log(userPass);


    if(user == 'vs'&& userPass == 'vs'){
      const loginRedirect='true';
      console.log("loginRedirect ",loginRedirect);
      this.props.displaylandingPage(loginRedirect);
      // this.props.history.push("/Landing",{loginRedirect: "true"})
    }else{
      const loginRedirect='false';
      console.log(loginRedirect);
      this.props.displaylandingPage(loginRedirect);
    }
      // this.props.history.push("/Login",{loginRedirect: "false"})
  }
}
export default Login;
