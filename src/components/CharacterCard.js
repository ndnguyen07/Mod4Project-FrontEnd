import React, { Component } from 'react';

class CharacterCard extends Component {
  render() {
    return (
      <div>
        Insert Character Card Here
        <div className="character-card">
          <img className="character-img" src="" alt="Character"/>
          <h4><b>Character Name</b></h4>
          <p>Character Bio</p>
        </div>
      </div>
    );
  }
}

export default CharacterCard;