import React, { Component }from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AllCharacters from '../containers/AllCharacters';

class Home extends Component {
    render(){
            {/* <div className="image-container">
          <img className="image-style" src="https://challenging.events/wp-content/uploads/2017/03/superhero-pow-signs.jpeg"></img>
            </div> */}
        return(  
            <div className="title">
            Battle Verse POW!
            <AllCharacters allCharactersResults={this.props.allCharactersResults} addCharacter={this.props.addCharacter} yourTeam={this.props.yourTeam}/>
            </div>
        )
            
            
    }
}

export default Home;