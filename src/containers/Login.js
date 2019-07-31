import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"

class Login extends Component {
    
    state = {
        signInName: "",
        signInPass: "",
        signUpName: "",
        signUpPass: ""
    }

    handleSignUp = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    

    createUser = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: this.state.signUpName,
                    password: this.state.signUpPass
                }
            })
        })
        .then(res => res.json())
        .then(json => {
            localStorage['token'] = json.jwt
        })
    }

    handleSignIn = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginUser = (event) => {
        let token = localStorage.getItem('token')
        event.preventDefault();
        fetch('http://localhost:3000/profile', {
            headers: {
            'Authorization': 'Bearer ' + token
        }
        })
        .then(res=>res.json())
        .then(json=> {
            this.setState({user: json.user})
        })
    }
    
    render(){
        return(
            <Fragment>
                <SignIn handleSignIn={this.handleSignIn} loginUser={this.loginUser}/>
                <SignUp handleSignUp={this.handleSignUp} createUser={this.createUser}/>
            </Fragment>
        )
    }
}

export default Login;