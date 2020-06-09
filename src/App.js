import React from 'react';
import logo from './logo.svg';
import Assignment from './assignment1'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Assignment No="1" sirName="Amir Pinger" />       
      </header>
    </div>
  );
}

export default App;
