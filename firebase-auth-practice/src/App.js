import React, { createContext, useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import './App.css'
import { firebaseConfig } from './firebase.config';
import Login from './components/Login/Login';
import LoginMySelft from './components/LoginMySelft/LoginMySelft';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Dashboard/Dashboard';
import Blog from './components/Blog/Blog';
import Shipment from './components/Shipment/Shipment';
import Menu from './components/Menu/Menu';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
      <UserContext.Provider value = {[loggedInUser, setLoggedInUser]} >
    <div className="App">
      {loggedInUser.email}
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Header />
            <Banner />
            <Login />
          </Route>
          <Route path="/myself">
            <LoginMySelft />
          </Route>
          <Route path="/shipment">
            <Shipment />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
      </UserContext.Provider>
  );
}

export default App;
