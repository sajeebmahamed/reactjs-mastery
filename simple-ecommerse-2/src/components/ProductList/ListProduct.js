import React from 'react';
import { Link } from 'react-router-dom';

const ListProduct = ({ id, title, brand, price, img_url, addCartItem }) => {
    return (
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

export default ListProduct;