import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ThemeContext from './components/Theme/ThemeContext'
import ProductDetails from './components/ProductDetails/ProductDetails'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from './components/CheckOut/CheckOut';
import Home from './components/Home/Home';

function App() {
  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(isDark => !isDark);
  };
  const [keyword, setKeyword] = useState("")

  return (
    <ThemeContext.Provider value={{ dark: dark, toggle: toggleDark }}>
      <div>
        <Router>
          <Navbar setKeyword={setKeyword}></Navbar>
          <Switch>
            <Route path="/checkout" component={CheckOut} />
            <Route path="/product/:productId" component={ProductDetails} />
            <Route path="/" component={() => <Home keyword={keyword} />} />
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
