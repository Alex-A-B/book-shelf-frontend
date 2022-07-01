import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import Books from './features/books/Books'
import Login from './features/authorisation/Login';
import Logout from './features/authorisation/Logout';
import './App.css';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
        <Logout />
        {/* <Counter /> */}
        <Books />
      </header>
    </div>
  );
}

export default App;
