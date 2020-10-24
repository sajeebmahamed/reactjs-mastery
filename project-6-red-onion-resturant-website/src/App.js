import React, { useEffect, useState } from 'react';
import './App.css';
import Banner from './component/Banner/Banner';
import Header from './component/Header/Header';
import MainFoods from './component/MainFoods/MainFoods';
import { foodsData } from './data/foods';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import FoodDetails from './component/FoodDetails/FoodDetails';

function App() {
  const [foods, setFoods] = useState([])
  useEffect(() => {
    const allFood = foodsData
    setFoods(allFood)
  }, [])
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Banner />
            <MainFoods foods={foods} />
          </Route>
          <Route path="/item/:id">
            <FoodDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
