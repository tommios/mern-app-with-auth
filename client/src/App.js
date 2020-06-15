import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Landing />
      </div>
    </BrowserRouter>
  );
}

export default App;
