import React, { Component } from 'react';

class CharacterCard extends Component {
  render() {
    return (
      <div>
        Insert Character Card Here
        <div className="character-card">
          <img className="character-img" src="" alt="Character Image"/>
          <h4 className="character-name"><b>Character Name</b></h4>
          <p className="character-gender">Character Gender: </p>
          <p className="character-bio">Character Bio: </p>
          <button className="characterBtn">Click Me</button>
        </div>
      </div>
    );
  }
}

export default CharacterCard;