import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Character from './pages/Character';

import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Routes,
  Route  
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path='/home' component={Home} ></Route>
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
