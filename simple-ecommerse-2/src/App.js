import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import data from './data'

function App() {

  const [products, setProducts] = useState([...data])
  const [keyword, setKeyword] = useState("")
  console.log(keyword);

  useEffect(() => {
    const results = data.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()))
    setProducts(results)
  },[keyword])

  return (
    <div>
      <Navbar setKeyword= {setKeyword}></Navbar>
      <ProductList products={products}></ProductList>
      <Cart></Cart>
    </div>
  );
}

export default App;
