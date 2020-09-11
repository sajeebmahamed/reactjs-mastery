import React from 'react';
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
function App() {
  return (
    <Router>
    <Header></Header>
      <div>
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
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
