import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class SignUp extends Component {

    // showCreatedName = () => {
    //     if(this.props.hidden)
    // }

    render(){
        return(
            <div className="sign-up-container">
                <h1>Sign Up</h1>
                <h3>{this.props.username}</h3>
                <form onSubmit={this.props.createUser}>
                    <label>Create Username:<input type='text' name= 'signUpName' onChange={this.props.handleSignUp}></input></label><br></br>
                    <label>Create Password:<input type='password' name= 'signUpPass' onChange={this.props.handleSignUp}></input></label>
                    <input type="submit" value='sign up'/>
                </form>
            </div>
        )
    }
}

export default SignUp;