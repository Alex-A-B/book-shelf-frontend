import React, { useEffect } from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import Books from './features/books/Books'
import Login from './features/auth/Login';
import Logout from './features/auth/Logout';
import Signup from './features/auth/Signup';
import Dashboard from './features/user/Dashboard';
import {useSelector, useDispatch} from "react-redux";
import { fetchCurrentUserAsync } from './features/auth/loginSlice';
import {Routes, Route, Navigate} from "react-router-dom";
import './App.css';


function App() {

  const currentUser = useSelector(state => state.login.currentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrentUserAsync())
}, [])


if (currentUser) {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/searchBooks" element={<Books />} />
        {/* my books 
        my comments 
        my ratings */}
        <Route exact path="/*" element={<Navigate to="Dashboard" />} /> 
        {/* maybe switch to a user dashboard landing page */}
      </Routes>
      <img src={logo} className="App-logo" alt="logo" />
        {/* <Login />
        <Books />  */}
        <Logout />
    </div>
  )} else {
    return (
      <div className='App'>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
  )}
}

export default App;
