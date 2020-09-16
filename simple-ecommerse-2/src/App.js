import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import data from './data'

function App() {

  const [products, setProducts] = useState([...data])
  const [cartItems, setCartItems] = useState([])
  const [keyword, setKeyword] = useState("")
  console.log(cartItems);

  useEffect(() => {
    const results = data.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()))
    setProducts(results)
  }, [keyword])

  const addCartItem = (id) => {
    const item = products.find(product => product.id === id)
    setCartItems(items => {
      const itemIndex = items.findIndex(currentItem => currentItem.id === id)
      if(itemIndex === -1) {
        return [
          ...items,
          {
            ...item, 
            quantity: 1
          }
        ];
      } else {
        return items.map(currentItem => 
          currentItem.id === id
           ? {
            ...item,
            quantity: parseInt(item.quantity + 1)
        }
        : currentItem
        
        );
      }
    })
    // setCartItems([...cartItems, item])
  }
  const removeCartItems = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    const res = window.confirm("Are you sure to perform the action?")
    if(res === true) {
      setCartItems([])
    }
  }

  return (
    <div>
      <Navbar setKeyword={setKeyword}></Navbar>
      <ProductList products={products} addCartItem={addCartItem}></ProductList>
      <Cart cartItems={cartItems} removeCartItems={removeCartItems} clearCart={clearCart}></Cart>
    </div>
  );
}

export default App;
