import React, { Component }from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CharacterCard from "../components/CharacterCard";

const newCharImg = "data:image/png;base64,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"

class AllCharacters extends Component {
    constructor(){
        super()
        this.state = ({
            createdCharactersArray: [],
            class: "hidden",
            newCharacterForm:{
                name: "New Name",
                gender: "New Gender",
                bio: "New Bio"
            },
            newCharacter:{
                name: "New Name",
                gender: "New Gender",
                bio: "New Bio"
            }
        })
    }

    displayAllCharacters = () => {
        if(this.props.allCharactersResults !== undefined){
            return this.props.allCharactersResults.map((character, index) =>  {
                return <CharacterCard key={index} character={character} addCharacter={this.props.addCharacter} addingBtn={this.props.adding} yourTeam={this.props.yourTeam}/>
            })
        }
    }

    createCharacterForm = () => {

    }

    handleClick = () => {
        console.log("new Character")
        if(this.state.class === "hidden"){
          this.setState({
            class: "show"
          })
        } else{
          this.setState({
            class: "hidden"
          })
        }
      }

    handleOnChange = (event) => {
        event.persist()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.newCharacterForm.value
        })
    }

    render(){
        return(
            <div>
                <button><img className="new-char-img" src={newCharImg} onClick={this.handleClick} /></button>
                <form className={this.state.class}>
                    <input name="name" type="text" value={this.state.newCharacterForm.name} onChange={this.handleOnChange} ></input>
                    <input name="gender" type="text" value={this.state.newCharacterForm.gender} onChange={this.handleOnChange}></input>
                    <input name="bio" type="text" value={this.state.newCharacterForm.bio} onChange={this.handleOnChange}></input>
                    <input type="submit" value="Create Character"/>
                </form>
                {this.displayAllCharacters()}
            </div>
        )
    }
}

export default AllCharacters;