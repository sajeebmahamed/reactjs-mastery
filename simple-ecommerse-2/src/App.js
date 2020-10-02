import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import data from './data'
import useCart from './useCart'
import ThemeContext from './components/Theme/ThemeContext'
import ProductDetails from './components/ProductDetails/ProductDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CheckOut from './components/CheckOut/CheckOut';


function App() {

  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(isDark => !isDark);
  };

  const [products, setProducts] = useState([...data])
  const [keyword, setKeyword] = useState("")
  const {
    cartItems,
    addCartItem,
    removeCartItems,
    clearCart
  } = useCart([], products)

  useEffect(() => {
    const results = data.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()))
    setProducts(results)
  }, [keyword])

  const Home = () => (
    <>
      <ProductList products={products} addCartItem={addCartItem}></ProductList>
      <Cart cartItems={cartItems} removeCartItems={removeCartItems} clearCart={clearCart}></Cart>
    </>
  )

  return (

    <ThemeContext.Provider value={{ dark: dark, toggle: toggleDark }}>
      <div>
        <Router>
          <Navbar setKeyword={setKeyword}></Navbar>
          <Switch>
            <Route path="/checkout">
              <CheckOut />
            </Route>
            <Route path="/product/:productId">
              <ProductDetails />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
