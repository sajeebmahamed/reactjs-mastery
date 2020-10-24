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
import VolunteerRegister from './components/VolunteerRegister/VolunteerRegister';
import EventTask from './components/EventTask/EventTask';
import Dashboard from './components/Admin/Dashboard';
import AddEvent from './components/Admin/pages/AddEvent';

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
          <Route path="/register/:eventId">
            <MenuBar />
            <VolunteerRegister />
          </Route>
          <Route path="/login">
             <MenuBar />
             <Login />
          </Route>
          <Route path="/events">
            <MenuBar />
            <EventTask />
          </Route>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/addEvents" component={AddEvent} />
        </Switch>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
