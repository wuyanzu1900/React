import React from 'react';
// import {} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Collect from './Collect';

function App() {
  return (
    <BrowserRouter >
      header
      <Route path='/' component={Login} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/collect' component={Collect} />
    </BrowserRouter>
  );
}

export default App;
