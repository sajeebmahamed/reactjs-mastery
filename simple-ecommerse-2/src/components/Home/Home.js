import React, { useEffect, useState } from 'react';
import data from '../../data';
import Cart from '../Cart/Cart';
import ProductList from '../ProductList/ProductList';
import useCart from '../../useCart'
import { useContext } from 'react';
import { store } from '../../store';

const Home = () => {
    const {state: {keyword, products}, dispatch} = useContext(store)
    const {
        cartItems,
        addCartItem,
        removeCartItems,
        clearCart
    } = useCart()
    useEffect(() => {
        const results = data.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()))
        dispatch({ type: "SET_PRODUCTS", payload: results })
    }, [dispatch, keyword])
    return (
        <>
            <ProductList products={products} addCartItem={addCartItem}></ProductList>
            <Cart
                cartItems={cartItems}
                removeCartItems={removeCartItems}
                clearCart={clearCart}>
            </Cart>
        </>
    )
}

export default Home;