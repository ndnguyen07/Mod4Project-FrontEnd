import React, { Component }from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CharacterCard from "../components/CharacterCard";

class AllCharacters extends Component {

    displayAllCharacters = () => {
        if(this.props.allCharactersResults !== undefined){
            return this.props.allCharactersResults.map((character, index) =>  {
                return <CharacterCard key={index} character={character} />
            })
        }
    }

    render(){
        return(
            <div>
                {this.displayAllCharacters()}
            </div>
        )
    }
}

export default AllCharacters;