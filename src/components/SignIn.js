import React, { Component }from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Login extends Component {
    render(){
        return(
            <div>
                <h1>Login Page</h1>
                <form>
                    <label>Username:<input type='text' name= 'username'></input></label>
                    <label>Password:<input type='password' name= 'password'></input></label>
                </form>
            </div>
        )
    }
}

export default Login;