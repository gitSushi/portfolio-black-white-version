import React from "react";
import "./App.css";

import { Route, NavLink, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./components/home/Home";
import Intro from "./components/intro/Intro";
import Skill from "./components/skills/Skill";

class App extends React.Component {
  toggleMenu() {
    const nav = document.querySelector(".nav-container");
    nav.classList.toggle("menu-active");
  }
  render() {
    return (
      <div className="App">
        <div className="toggle-menu" onClick={this.toggleMenu}>
          <div className="toggle-menu-button"></div>
        </div>
        <div className="nav-container">
          <div className="nav">
            <div className="link-container">
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </div>
            <div className="link-container">
              <NavLink to="/intro" activeClassName="active">
                Intro
              </NavLink>
            </div>
            <div className="link-container">
              <NavLink to="/skill" activeClassName="active">
                Skill
              </NavLink>
            </div>
          </div>
        </div>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/intro" component={Intro} />
                  <Route path="/skill" component={Skill} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
