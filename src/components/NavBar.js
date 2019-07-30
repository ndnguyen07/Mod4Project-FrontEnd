import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from '../containers/Login';
import YourTeam from '../containers/YourTeam';

class NavBar extends Component {
    constructor(){
        super()
        this.state = {
            characters: [],
            yourTeam: [],
        }
    }

    componentDidMount(){
        this.fetchCharacters()
    }

    fetchCharacters = () => {
        fetch('http://localhost:3000/characters')
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                characters: json
            })
        })
    }

    addCharacter = (selectedChar) => {
        if (this.state.yourTeam.length < 10){
            this.setState({
                yourTeam: [...this.state.yourTeam,selectedChar]
            })
        }
        else {
            console.log("stop adding char")
        }
    }

    removeCharacter = () => {

    }
    render(){

   
    return(

        <Fragment>
            <ul className="navbar">
                <li><Link to='/' className="nav-link" >Home</Link></li>
                <li><Link to='/login' className="nav-link" >Signup/Login</Link></li>
                <li><Link to='/yourteam' className="nav-link" >Your Team</Link></li>
            </ul>


            <Route exact path="/" render={ (routerProps) => <Home {...routerProps} allCharactersResults={this.state.characters.results} addCharacter={this.addCharacter} /> } />
            <Route path="/login" component={Login} />
            <Route path="/yourteam" render={(routerProps) => <YourTeam {...routerProps} yourTeam={this.state.yourTeam} /> } />
        </Fragment>

    )
    
}}


export default NavBar;