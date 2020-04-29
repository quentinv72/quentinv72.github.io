import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import Projects from "./components/Projects/Projects";
import Interests from "./components/Interests/Interests";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <NavBar />
          <Home />
          <Footer />
        </Route>
        <Route path='/projects'>
          <NavBar />
          <Projects />
          <Footer />
        </Route>
        <Route path='/interests'>
          <NavBar />
          <Interests />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
