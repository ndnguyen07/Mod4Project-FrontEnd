import React, { Component }from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AllCharacters from '../containers/AllCharacters';

class Home extends Component {

    constructor(){
        super()
        this.state = {
            characters: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/characters')
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                characters: json
            })
        })
    }


    render(){
            {/* <div className="image-container">
          <img className="image-style" src="https://challenging.events/wp-content/uploads/2017/03/superhero-pow-signs.jpeg"></img>
            </div> */}
        return(  
            <div className="title">
            {/* <NavBar /> */}
            Super POW!!
            <AllCharacters />
            
            </div>
        )
            
            
    }
}

export default Home;