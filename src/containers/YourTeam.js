import React, { Component } from 'react';
import TeamCharacters from './TeamCharacters';

class YourTeam extends Component {
  render() {
    return (
      <div>
        <h1 className="team-name">My Team <button className="edit-btn">✎</button></h1>
        {/*Put Your Team Component */}
      </div>
    );
  }
}

export default YourTeam;