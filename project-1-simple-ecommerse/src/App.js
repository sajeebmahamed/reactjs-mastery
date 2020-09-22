import React, { createContext, useState } from 'react';
import './App.scss';
import Header from './components/Headers/Header'
import Shop from './components/Shop/Shop'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotMatch from './components/NotMatch/NotMatch';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';

export const LogInContext = createContext()

function App() {
  const [logedInUser, setLogedInUser] = useState({})
  return (
    
    <LogInContext.Provider value={[logedInUser, setLogedInUser]}>
      <h2> from appjs {logedInUser.email} </h2>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/shipment">
            <Shipment></Shipment>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
    </LogInContext.Provider>
  );
}

export default App;
