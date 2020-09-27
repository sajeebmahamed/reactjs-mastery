import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './components/BookingComponents/Booking';
import HomeComponets from './components/HomeComponets/HomeComponets';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeComponets />
          </Route>
          <Route path="/booking">
              <Booking />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
