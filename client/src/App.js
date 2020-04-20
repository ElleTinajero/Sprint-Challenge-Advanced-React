import React from 'react';
import './App.scss';
import {Players} from "./components/players";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div  className="appContainer">
      <div data-testid="navbar" className="navContainer">
        <Navbar/>
      </div>
      <div>
        <Players/>
      </div>
    </div>
  )
}

export default App;