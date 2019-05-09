import React, { Component } from "react";
import "./App.css";
import "././pages/css/main.css";
import "bulma/sass/utilities/_all.sass";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home/home";
import Navbar from "./pages/home/navbar";
import Contact from "./pages/contact";
import Footer from "./pages/home/footer";

class App extends Component {
  render() {
    return (
      <div className="body">
        <Router>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
        <Navbar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
