import React, { Component }from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AllCharacters from '../containers/AllCharacters';

class Home extends Component {

    constructor(){
        super()
        this.state = {
            characters: [],
            yourTeam: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/characters')
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                characters: json
            })
        })
    }

    addCharacter = () => {

    }

    removeCharacter = () => {

    }


    render(){
            {/* <div className="image-container">
          <img className="image-style" src="https://challenging.events/wp-content/uploads/2017/03/superhero-pow-signs.jpeg"></img>
            </div> */}
        return(  
            <div className="title">
            Battle Verse POW!
            <AllCharacters allCharactersResults={this.state.characters.results}/>
            
            </div>
        )
            
            
    }
}

export default Home;