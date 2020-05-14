import React from "react";
import "./App.css";

import { Route, NavLink, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./components/home/Home";
import Intro from "./components/intro/Intro";
import Skill from "./components/skills/Skill";
import Projects from "./components/projects/Projects";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.navRef = React.createRef();

    this.toggleMenu = this.toggleMenu.bind(this);
    this.reportWindowSize = this.reportWindowSize.bind(this);
    this.outOfSight = this.outOfSight.bind(this);
  }

  toggleMenu() {
    let navList = this.navRef.current.classList;
    navList.toggle("menu-active");
  }
  reportWindowSize() {
    let navList = this.navRef.current.classList;
    window.innerWidth > 700 && navList.remove("menu-active");
  }
  outOfSight() {
    let navList = this.navRef.current.classList;
    navList.remove("menu-active");
  }

  componentDidMount() {
    window.addEventListener("resize", this.reportWindowSize);
  }

  render() {
    return (
      <div className="App">
        <div className="toggle-menu" onClick={this.toggleMenu}>
          <div className="toggle-menu-button"></div>
        </div>
        <div className="nav-container" ref={this.navRef}>
          <div className="nav">
            <div className="link-container">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                onClick={this.outOfSight}
              >
                Home
              </NavLink>
            </div>
            <div className="link-container">
              <NavLink
                to="/intro"
                activeClassName="active"
                onClick={this.outOfSight}
              >
                Intro
              </NavLink>
            </div>
            <div className="link-container">
              <NavLink
                to="/skill"
                activeClassName="active"
                onClick={this.outOfSight}
              >
                Skills
              </NavLink>
            </div>
            <div className="link-container">
              <NavLink to="/projects" activeClassName="active" onClick={this.outOfSight}>
                Projects
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
                  <Route path="/projects" component={Projects} />
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
