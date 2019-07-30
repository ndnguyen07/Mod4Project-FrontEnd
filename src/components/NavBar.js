import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import YourTeam from '../containers/YourTeam';

const NavBar = () => {
    return(
        <Router>
        <div>
            <ul className="navbar">
                <li><Link to='/' className="nav-link" >Home</Link></li>
                <li><Link to='/signup' className="nav-link" >Signup/Login</Link></li>
                <li><Link to='/yourteam' className="nav-link" >Your Team</Link></li>
            </ul>


            <Route exact path="/" component={Home}/>
            <Route path="/signup" component={SignUp} />
            <Route path="/yourteam" component={YourTeam} />
        </div>
        </Router>
    )
}

export default NavBar;