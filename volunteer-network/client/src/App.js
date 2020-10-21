import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import VolunteerCategories from './components/VolunteerCategories/VolunteerCategories';
import MenuBar from './components/MenuBar/MenuBar';
import SearchBar from './components/SearchBar/SearchBar';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const LoginContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <LoginContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <MenuBar />
            <SearchBar />
            <VolunteerCategories />
          </Route>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/details">
            <SearchBar></SearchBar>
          </PrivateRoute>
        </Switch>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
