import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import data from './data'
import useCart from './useCart'
import ThemeContext from './components/Theme/ThemeContext'


function App() {

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



  return (
 
      <ThemeContext.Provider value={{ dark: false }}>
    <div>
      <Navbar setKeyword={setKeyword}></Navbar>
      <ProductList products={products} addCartItem={addCartItem}></ProductList>
      <Cart cartItems={cartItems} removeCartItems={removeCartItems} clearCart={clearCart}></Cart>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
