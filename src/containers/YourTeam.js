import React, { Component } from 'react';
import CharacterCard from '../components/CharacterCard';

class YourTeam extends Component {
  state= {
    class: "hidden"
  }

  displayYourTeam = () => {
    return this.props.yourTeam.map((character, index) =>  {
        return <CharacterCard key={index} character={character} yourTeam={this.props.yourTeam} removeCharacter={this.props.removeCharacter}/>
    })
  }

  handleClick = () => {
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

  render() {
    return (
      <div>
        <h1 className="team-name">{this.props.teamName} <button className="edit-btn" onClick={this.handleClick}>   ✎</button></h1>
        <form className={this.state.class} onSubmit={this.props.handleSubmit}>
          <input name="formName" type="text" value={this.props.formName} onChange={this.props.handleTeamNameInput}></input>
          <input type="submit" value="Submit"/>
        </form>
 
        {this.displayYourTeam()}
      </div>
    );
  }
}

export default YourTeam;