import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './components/BookingComponents/Booking';
import Details from './components/Details/Details';
import HomeComponets from './components/HomeComponets/HomeComponets';
import Menu from './components/HomeComponets/Menu/Menu';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()
export const PlaceContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [singlePlace, setsinglePlace] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <PlaceContext.Provider value={[singlePlace, setsinglePlace]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomeComponets />
            </Route>
            <Route path="/booking">
              <Booking />
            </Route>
            <PrivateRoute path="/details">
              <Menu />
              <Details />
            </PrivateRoute>
            <Route to="/login">
              <Menu />
              <Login />
            </Route>
          </Switch>
        </Router>
      </PlaceContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
