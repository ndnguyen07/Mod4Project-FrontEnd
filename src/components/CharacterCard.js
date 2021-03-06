import React, { Component } from 'react';

class CharacterCard extends Component {
  handleClick = (character) => {
    if(this.props.addCharacter){
      this.props.addCharacter(character)
    } else if(this.props.removeCharacter){
      this.props.removeCharacter(character)
    }
    
  }

  //Pass yourTeam as Props down to here to be used
  //for Conditional Logic
  //This checks if yourTeam has that character
  isSelected = () => {
    return this.props.yourTeam.includes(this.props.character)
  }

  checkGender = (gender) => {
    let setGender = "Gender: "
    if(gender === 0){
      setGender += "Non-Binary"
    } else if(gender === 1){
      setGender += "Male"
    } else if(gender === 2){
      setGender += "Female"
    }
    return setGender
  }

  render() {
    return (
      <div>
        <div className="character-card">
          <img className="character-img" src={this.props.character.image.icon_url} alt={"No IMG"}/>
          <button className="characterBtn" onClick={() => this.handleClick(this.props.character)}>{this.isSelected() ? '-' : '+'}</button>
          <h4 className="character-name"><b>{this.props.character.name}</b></h4>
          <p className="character-gender"> {this.checkGender(this.props.character.gender)}</p>
          <p className="character-bio">Bio: {this.props.character.deck} </p>
          
        </div>
      </div>
    );
  }
}

export default CharacterCard;