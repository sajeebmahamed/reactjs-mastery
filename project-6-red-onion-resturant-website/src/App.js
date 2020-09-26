import React, { useEffect, useState } from 'react';
import './App.css';
import Banner from './component/Banner/Banner';
import Header from './component/Header/Header';
import MainFoods from './component/MainFoods/MainFoods';
import { foodsData } from './data/foods';

function App() {
  const [foods, setFoods] = useState([])
  useEffect(() => {
    const allFood = foodsData
    setFoods(allFood)
  }, [])
  return (
    <div>
      <Header />
      <Banner />
      <MainFoods foods={foods} />
    </div>
  );
}

export default App;