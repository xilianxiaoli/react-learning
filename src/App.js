import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router, { routeConfig, routes } from './router'
import {
  Link,
  BrowserRouter,
  HashRouter, NavLink
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header >
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HashRouter >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/page" activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}>page</NavLink>
          </li>
          <li>
            <Link to="/page1">page1</Link>
          </li>
          <li>
            <Link to="/page2">page2</Link>
          </li>
          <li>
            <Link to="/page3">page3</Link>
          </li>
        </ul>
        <Router></Router>
        {/* {routeConfig(routes)} */}
      </HashRouter>
    </div>
  );
}

export default App;
