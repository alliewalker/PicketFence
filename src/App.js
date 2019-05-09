import React, { Component } from "react";
import "./App.css";
import "././pages/css/main.css";
import "bulma/sass/utilities/_all.sass";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/about";
import Navbar from "./pages/home/navbar";
import Contact from "./pages/contact";
import Footer from "./pages/home/footer";
import Home from "./pages/home/home";

class App extends Component {
  render() {
    return (
      <div className="body">
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
