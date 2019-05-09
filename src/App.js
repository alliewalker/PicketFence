import React, { Component } from "react";
import "./App.css";
import "././pages/css/main.css";
import "bulma/sass/utilities/_all.sass";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/about";
import Navbar from "./pages/home/navbar";
import Contact from "./pages/contact";
import Footer from "./pages/home/footer";

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

class App extends Component {
  render() {
    return (
      <div className="body">
        <Navbar />
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
        <Footer />
      </div>
    );
  }
}

export default App;
