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
            createdCharacters: [],
            yourTeam: [],
            teamName: "My Team",
            formName: "My Team",

            newCharacterForm: {
                name: "Name",
                gender: "Gender",
                bio: "Bio",
                image: "Image URL"
            },
            newCharacter: {
                name: "New Name",
                gender: "New Gender",
                bio: "New Bio",
                image: "Image"
            }
        }
    }

    componentDidMount(){
        this.fetchCharacters()
    }

      logout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };

    fetchCharacters = () => {
        fetch('http://localhost:3000/characters')
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                characters: json
            })
        })
    }

    //Handle Team Name Input
    handleTeamNameInput = (event) => {
        event.persist()
        console.log([event.target.name])
        this.setState({
            [event.target.name]: event.target.value //formName: formInput
          })
    }   

    //Handle Team Name Submit
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            teamName: this.state.formName   //teamName: value of formName state
        })
    }

    //Add Character to Team
    addCharacter = (selectedChar) => {
        if (this.state.yourTeam.length < 10 && !this.state.yourTeam.includes(selectedChar)){
            this.setState({
                yourTeam: [...this.state.yourTeam,selectedChar]
            })
            fetch('http://localhost:3000/teams', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json',
                    'Authorization': `Bearer ${localStorage['token']}`
                },
                body: JSON.stringify({
                    team: {
                        user_id: localStorage['user'],
                        name: selectedChar.name,
                        bio: selectedChar.deck,
                        gender: selectedChar.gender,
                        image: selectedChar.image.icon_url
                    }
                })
            })
        }
    }

    //Remove Character from Team
    removeCharacter = (selectedChar) => {
        let newTeamArray = this.state.yourTeam.filter((character) => {
            return character !== selectedChar
        })
        this.setState({
            yourTeam: newTeamArray
        })
    }

    newCharacterOnChange = (event) => {
        event.persist();
        this.setState({
            newCharacterForm: {
                ...this.state.newCharacterForm,
                [event.target.name]: event.target.value
            }
        })
    }

    submitNewCharacter = (event) => {
        event.preventDefault();
        this.setState({
            createdCharacters: [...this.state.createdCharacters, this.state.newCharacterForm]
        })
    }

    logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
 
      };

    render(){

    return(

        <Fragment>
            <ul className="navbar">
                <li><Link to='/' className="nav-link" >Home</Link></li>
                <li><Link to='/yourteam' className="nav-link" >Your Team</Link></li>
                <li><Link to='/login' className="nav-link" >Signup/Login</Link></li>
                <li onClick={this.logout}> <Link to='/' className="nav-link">Logout</Link></li>
            </ul>

            {/* Home Page Route*/}
            <Route exact path="/" render={ (routerProps) => <Home {...routerProps} allCharactersResults={this.state.characters.results} addCharacter={this.addCharacter} yourTeam={this.state.yourTeam} submitNewCharacter={this.submitNewCharacter} newCharacterOnChange={this.newCharacterOnChange} newCharacterForm={this.state.newCharacterForm} createdCharacters={this.state.createdCharacters} /> } />
            {/* Login Route*/}
            <Route path="/login" render={(routerProps) => <Login/>}/>
            {/* Your Team Route*/}
            <Route path="/yourteam" render={(routerProps) => <YourTeam {...routerProps} yourTeam={this.state.yourTeam} removeCharacter={this.removeCharacter} teamName={this.state.teamName} formName={this.state.formName} handleTeamNameInput={this.handleTeamNameInput} handleSubmit={this.handleSubmit}/>} />
        </Fragment>

    )
}}

export default NavBar;