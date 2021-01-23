import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Interests from "./components/Interests/Interests";
import Secret from "./components/Secret/Secret";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact>
          <NavBar />
          <Home />
          <Footer />
          <Link id='secret' to='/secret' style={{ visibility: "hidden" }}>Let's hope they don't find this secret page!</Link>
        </Route>
        <Route path='/secret' exact>
          <Secret />
        </Route>
        {/* <Route path='/projects'>
          <NavBar />
          <Projects />
          <Footer /> */}
        {/* </Route> */}
        <Route path='/interests'>
          <NavBar />
          <Interests />
          <Footer />
        </Route>
      </Switch>
    </HashRouter >
  );
}

export default App;
