import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Technologies from "./components/Technologies/Technologies";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Technologies />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
