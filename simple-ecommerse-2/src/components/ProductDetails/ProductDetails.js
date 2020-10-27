import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data';
import useCart from '../../useCart';
import ListProduct from '../ProductList/ListProduct';

const ProductDetails = () => {
    const { productId } = useParams()
    const { addCartItem } = useCart(data)
    const product = data.find(p => p.id === parseInt(productId))
    console.log(product);
    return (
        <div className="product-details">
            <ListProduct {...product} addCartItem={addCartItem} />
        </div>
    );
};

export default ProductDetails;