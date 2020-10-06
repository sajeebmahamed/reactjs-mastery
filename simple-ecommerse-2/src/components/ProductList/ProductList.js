import React, { useContext } from 'react';
import ThemeContext from '../Theme/ThemeContext';
import ListProduct from './ListProduct';



const ProductList = ({ products, addCartItem} ) => {
    const {dark} = useContext(ThemeContext)
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