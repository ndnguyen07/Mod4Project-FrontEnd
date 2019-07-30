import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class SignUp extends Component {
    render(){
        return(
            <div>
                <h1>Sign Up Page</h1>
                <form>
                    <label>Create Username:<input type='text' name= 'username'></input></label>
                    <label>Create Password:<input type='password' name= 'password'></input></label>
                </form>
            </div>
        )
    }
}

export default SignUp;