import React, { Component }from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CharacterCard from "../components/CharacterCard";

class AllCharacters extends Component {
    render(){
        return(
            <div>
                <CharacterCard />
            </div>
        )
    }
}

export default AllCharacters;