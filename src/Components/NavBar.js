import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";
class NavBar extends Component {
  render() {
    return (
      <header>
        <h1>Mikael Lönn</h1>
        <ul className="nav">
          <li className="navItem">
            <Link className="link" to="">Home</Link>
          </li>
          <li className="navItem">
            <Link className="link" to="/projects">Projects</Link>
          </li>
          <li className="navItem">
            <Link className="link" to="/about">About</Link>
          </li>
          <li className="navItem">
            <Link className="link" to="/contact">Contact</Link>
          </li>
          <li className="navItem">
            <Link className="link" to="/cv">CV</Link>
          </li>
        </ul>
      </header>
    )
  }
}
export default NavBar;