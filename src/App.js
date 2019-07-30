import React, { Component } from 'react';
import './App.css';
import './style.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

/* HOME PAGE */

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        {/* Signup/Login Component*/}
        {/* AllCharacters Component */}
      </div>
    );
  }
}

export default App;
