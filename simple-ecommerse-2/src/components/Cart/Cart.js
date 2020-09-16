import React from 'react';

const CartItems = ({ title, price, quantity}) => {
    return(
        <div className="cart-item">
            <button>x</button>
            <div className="info">
                <span> {title} X {quantity} </span>
                <span> {price} </span>
            </div>
        </div>
    )
}

const Cart = ({cartItems}) => {
    const total = cartItems.reduce((sum,cur) => sum + cur.price, 0)
    return (
        (<div className="cart">
            <h4> Cart Items </h4>
            <div className="cart-items">
                {
                    cartItems.map(item => (
                        <CartItems {...item}></CartItems>
                    ))
                }
                <div className="cart-item">
                    <button>x</button>
                    <div className="info">
                        <span> Total </span>
                        <span> $ {total} </span>
                    </div>
                </div>
            </div>
        </div>)
    );
};

export default Cart;