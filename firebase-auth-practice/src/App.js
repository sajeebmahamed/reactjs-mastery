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
          <Route path="/">
            <Header />
            <Banner />
            <Login />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
