import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../Theme/ThemeContext';

const Product = ({ id, title, brand, price, img_url, addCartItem} ) => {
    return(
        <div className="product">
            <Link to={`/product/${id}`}>
                <img src={img_url} alt={title} />
                <div className="title">
                    <span> {title} </span>
                    <span> {brand} </span>
                </div>
            </Link>
            <div className="actions">
                <span> $ {price} </span>
                <button onClick={() => addCartItem(id)}> Add to cart </button>
            </div>
        </div>
    )
}

const ProductList = ({ products, addCartItem} ) => {
    const {dark} = useContext(ThemeContext)
    return (
        <div className={`product-list ${dark ? 'dark' : 'light'}`}>
            {products.map(product => (
                <Product {...product} addCartItem={addCartItem}></Product>
            ))
            }
        </div>
    );
};

export default ProductList;