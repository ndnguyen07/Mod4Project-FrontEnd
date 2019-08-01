import React, { Component }from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class SignIn extends Component {
    render(){
        return(
            <div className="sign-in-container">
                <h1>Login</h1>
                <form onSubmit={this.props.loginUser}>
                    <label>Username:<input type='text' name= 'signInName' onChange={this.props.handleSignIn}></input></label><br></br>
                    <label>Password:<input type='password' name= 'signInPass' onChange={this.props.handleSignIn}></input></label>
                    <input type="submit" value='login'/>
                </form>
            </div>
        )
    }
}

export default SignIn;