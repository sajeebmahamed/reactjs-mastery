import React from 'react';

const Product = ({ id, title, brand, price, img_url, addCartItem} ) => {
    return(
        <div className="product">
            <img src={img_url} alt={title}/>
            <div className="title">
                <span> {title} </span>
                <span> {brand} </span>
            </div>
            <div className="actions">
                <span> $ {price} </span>
                <button onClick={() => addCartItem(id)}> Add to cart </button>
            </div>
        </div>
    )
}

const ProductList = ({ products, addCartItem} ) => {
    // console.log(products);
    return (
        <div className="product-list">
            {products.map(product => (
                <Product {...product} addCartItem={addCartItem}></Product>
            ))
            }
        </div>
    );
};

export default ProductList;