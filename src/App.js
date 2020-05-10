import React from "react";
import "./App.css";

import { Route, NavLink, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./components/Home";
import Intro from "./components/Intro";
import Skill from "./components/skills/Skill";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/intro" activeClassName="active">
            Intro
          </NavLink>
          <NavLink to="/skill" activeClassName="active">
            Skill
          </NavLink>
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
