import React, { useContext, useEffect } from 'react';
import data from '../../data';
import { store } from '../../store';
import useCart from '../../useCart';
import ThemeContext from '../Theme/ThemeContext';
import ListProduct from './ListProduct';



const ProductList = () => {
    const { addCartItem } = useCart()
    const {dark} = useContext(ThemeContext)
    const { state: { keyword, products }, dispatch } = useContext(store)
    useEffect(() => {
        const results = data.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()))
        dispatch({ type: "SET_PRODUCTS", payload: results })
    }, [dispatch, keyword])
    return (
        <div className={`product-list ${dark ? 'dark' : 'light'}`}>
            {products.map(product => (
                <ListProduct {...product} addCartItem={addCartItem}></ListProduct>
            ))
            }
        </div>
    );
};

export default ProductList;