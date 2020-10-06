import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data';
import ListProduct from '../ProductList/ListProduct';

const ProductDetails = () => {
    const { productId } = useParams()
    const product = data.find(p => p.id === parseInt(productId))
    console.log(product);
    return (
        <div className="product-details">
            <ListProduct {...product} />
        </div>
    );
};

export default ProductDetails;