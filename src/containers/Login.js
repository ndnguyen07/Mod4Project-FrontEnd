import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"

class User extends Component {
    render(){
        return(
            <Fragment>
                <SignIn />
                <SignUp />
            </Fragment>
        )
    }
}

export default User;