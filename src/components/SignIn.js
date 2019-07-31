import React, { Component }from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Login extends Component {
    render(){
        return(
            <div>
                <h1>Login Page</h1>
                <form onSubmit={this.props.loginUser}>
                    <label>Username:<input type='text' name= 'signInName' onChange={this.props.handleSignIn}></input></label>
                    <label>Password:<input type='password' name= 'signInPass' onChange={this.props.handleSignIn}></input></label>
                    <input type="submit" value='login'/>
                </form>
            </div>
        )
    }
}

export default Login;