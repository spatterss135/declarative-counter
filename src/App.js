import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useState } from 'react'

function App() {
  let [counter, changeMyDiaper] = useState(1)
  window.counter = counter
  window.changeCounter = changeMyDiaper
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>The counter is at {counter}</div>
        <p>
          Edit <code>src/App.js</code> and save to reload. Or not what do I care.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <span>The counter is at {counter}</span>
    </div>
  );
}

export default App;
