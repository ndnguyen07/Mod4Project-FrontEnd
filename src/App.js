import React, { Component } from 'react';
import './App.css';
import './style.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* HOME PAGE */

class App extends Component {
  render() {
    return (
      <div>

        <NavBar />
        <Home />
        {/* Signup/Login Component*/}
        {/* AllCharacters Component */}
      </div>
    );
  }
}

export default App;
