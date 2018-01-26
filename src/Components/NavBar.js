import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
class NavBar extends Component {
    render() {
        return (
            <header>
                <ul id="headerButtons">
                    <li className="navButton"><Link to="">Home</Link></li>
                    <li className="navButton"><Link to="">Projects</Link></li>
                    <li className="navButton"><Link to="">CV</Link></li>
                </ul>
            </header>
        )
    }
}
export default NavBar;