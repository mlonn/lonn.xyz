import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {browserHistory} from "react-router";
import HomePage from "./Components/HomePage";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import "./App.css";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <NavBar />
              <Route name="home" exact path="/" component={HomePage}/>
              <Route name="projects" exact path="/projects" component={Projects}/>
              <Route name="about" exact path="/about" component={About}/>
              <Route name="contact" exact path="/contact" component={Contact}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
