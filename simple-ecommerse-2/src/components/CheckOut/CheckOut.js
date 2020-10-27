import React from 'react';
import data from '../../data';
import useCart from '../../useCart';

const CheckOut = () => {
    const {total} = useCart(data)
    return (
        <div>
            <h3> Checkout details {total} </h3>
        </div>
    );
};

export default CheckOut;