import React from 'react';
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
const firebase = require("firebase/app");
require("firebase/auth");

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Banner />
            <Login />
          </Route>
          <Route path="/myself">
            <LoginMySelft />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
