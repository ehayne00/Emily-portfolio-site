import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectsList";
import Contact from "./components/Contact";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={props => <AboutMe {...props} />} />
        <Route
          exact
          path="/projects"
          render={props => <ProjectList {...props} />}
        />
        <Route exact path="/contact" 
        render={props => <Contact {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
