import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class SignUp extends Component {
    render(){
        return(
            <div>
                <h1>Sign Up Page</h1>
                <form onSubmit={this.props.createUser}>
                    <label>Create Username:<input type='text' name= 'signUpName' onChange={this.props.handleSignUp}></input></label>
                    <label>Create Password:<input type='password' name= 'signUpPass' onChange={this.props.handleSignUp}></input></label>
                    <input type="submit" value='sign up'/>
                </form>
            </div>
        )
    }
}

export default SignUp;