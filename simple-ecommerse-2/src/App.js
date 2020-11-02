import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ThemeContext from './components/Theme/ThemeContext'
import ProductDetails from './components/ProductDetails/ProductDetails'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from './components/CheckOut/CheckOut';
import Home from './components/Home/Home';
import { StateProvider } from './store';
import Cart from './components/Cart/Cart';

function App() {
  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(isDark => !isDark);
  };

  return (
    <StateProvider>
      <ThemeContext.Provider value={{ dark: dark, toggle: toggleDark }}>
        <div>
          <Router>
            <Navbar></Navbar>
            <Switch>
              <Route path="/checkout" component={CheckOut} />
              <Route path="/product/:productId" component={ProductDetails} />
              <Route path="/" component={Home} />
            </Switch>
            <Cart />
          </Router>
        </div>
      </ThemeContext.Provider>
    </StateProvider>
  );
}

export default App;
