import React, { lazy, Suspense, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ThemeContext from './components/Theme/ThemeContext'
// import ProductDetails from './components/ProductDetails/ProductDetails'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import CheckOut from './components/CheckOut/CheckOut';
// import Home from './components/Home/Home';
import { StateProvider } from './store';
// import Cart from './components/Cart/Cart';

const Home = lazy(() => import('./components/Home/Home'))
const CheckOut = lazy(() => import('./components/CheckOut/CheckOut'))
const ProductDetails = lazy(() => import('./components/ProductDetails/ProductDetails'))
const Cart = lazy(() => import('./components/Cart/Cart'))

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
            <Navbar />
            <Suspense fallback={<div>loading</div>}>
              <Switch>
                <Route path="/checkout" component={CheckOut} />
                <Route path="/product/:productId" component={ProductDetails} />
                <Route path="/" component={Home} />
              </Switch>
              <Cart />
            </Suspense>
          </Router>
        </div>
      </ThemeContext.Provider>
    </StateProvider>
  );
}

export default App;
