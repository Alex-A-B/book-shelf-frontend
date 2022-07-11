import React, { useEffect } from 'react';
import logo from './logo.svg';
import BookSearch from './features/books/BookSearch'
import Bookshelf from './features/bookshelf/Bookshelf'
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
    // eslint-disable-next-line
  }, [])

  if (currentUser) {
    return (
      <div className="App">
        <header className="App-header">
        <Logout />
        </header>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/searchBooks" element={<BookSearch />} />
          <Route exact path="/myBooks" element={<Bookshelf />} />
          {/* my books 
          my comments 
          my ratings */}
          <Route exact path="/*" element={<Navigate to="dashboard" />} /> 
        </Routes>
        <img src={logo} className="App-logo" alt="logo" />
          {/* <Login />
          <Books />  */}    
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
