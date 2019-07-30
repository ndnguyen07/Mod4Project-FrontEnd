import React, { Component } from 'react';
import CharacterCard from '../components/CharacterCard';

class YourTeam extends Component {

  displayYourTeam = () => {
    return this.props.yourTeam.map((character, index) =>  {
        return <CharacterCard key={index} character={character} yourTeam={this.props.yourTeam} removeCharacter={this.props.removeCharacter}/>
    })
  }
  render() {
    return (
      <div>
        <h1 className="team-name">My Team <button className="edit-btn">✎</button></h1>
        {this.displayYourTeam()}
      </div>
    );
  }
}

export default YourTeam;