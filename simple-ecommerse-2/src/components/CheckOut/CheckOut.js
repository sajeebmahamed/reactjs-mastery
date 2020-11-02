import React, { useState } from 'react';
import data from '../../data';
import useCart from '../../useCart';

const CheckOut = () => {
    const {total, clearCart} = useCart(data)
    const [address, setAddress] = useState("")
    const handleChange = (e) => {
        setAddress(e.target.value)
    }
    return (
        <div className="checkout">
            <h3> Checkout total {total} </h3>
            <div>
                <div className="cart-item">
                    <div className="info">
                        <input type="text" placeholder="checkout" onChange={handleChange} />
                        <span> <button
                            style={{ backgroundColor: !address ? 'gray' : 'green' }}
                            disabled={!address}
                            onClick={clearCart}
                        >

                            Checkout
                                </button> </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;