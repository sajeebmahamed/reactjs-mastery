import React, { useEffect, useState } from 'react';
import data from '../../data';
import Cart from '../Cart/Cart';
import ProductList from '../ProductList/ProductList';
import useCart from '../../useCart'

const Home = ({keyword}) => {
    const [products, setProducts] = useState([...data])
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