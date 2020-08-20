import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Comish from "./containers/Comish";
import Gallery from "./containers/Gallery";
import Home from "./containers/Home";
import LinksOut from "./containers/LinksOut";
import Multimedia from "./containers/Multimedia";
import logo from "./name.png";

function App() {
  return (
    <div className="App" style={{backgroundColor: "#3a4052"}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <nav>
        <NavBar />
      </nav>
      <Switch>
      <Route exact path="/">
    <Redirect to="/home" />
</Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Gallery">
          <Gallery />
        </Route>
        <Route path="/Multimedia">
          <Multimedia />
        </Route>
        <Route path="/Comish">
          <Comish />
        </Route>
        <Route path="/LinksOut">
          <LinksOut />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
