import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Comish from "./containers/Comish";
import Gallery from "./containers/Gallery";
import Home from "./containers/Home";
import LinksOut from "./containers/LinksOut";
import Multimedia from "./containers/Multimedia";
import home_0 from "./images/home_0.png";
import logo from "./name.png";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#3a4052" }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <nav>
        <NavBar />
      </nav>
      <img
        src={home_0}
        alt="separator"
        style={{
          marginBottom: "10px",
          marginTop: "40px",
          width: "800px",
          backgroundColor: "#3a4052",
        }}
      />

      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Home}/>          
=======
        <Route
          exact
          path="/"
> <Redirect to="/Home" />;
         <Route />
>>>>>>> b02db558dba92d4e927543b516dc90f2a6ad206b
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
