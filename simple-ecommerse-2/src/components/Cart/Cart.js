import React, { useState } from 'react';

const CartItems = ({id,title, price, quantity, removeCartItems}) => {
    return(
        <div className="cart-item">
            <button onClick={() => removeCartItems(id)}>x</button>
            <div className="info">
                <span> {title} X {quantity} </span>
                <span> {price} </span>
            </div>
        </div>
    )
}

const Cart = ({ cartItems, removeCartItems, clearCart}) => {
    const [checkoutOpen, setcheckoutOpen] = useState(false)
    const [address, setAddress] = useState("")
    const toggleCheckout = () => {
        setcheckoutOpen(status => !status)
    }
    const handleChange = (e) => {
        setAddress(e.target.value)
    }
    const total = cartItems.reduce((sum,cur) => sum + cur.price * cur.quantity, 0)
    return (
        (<div className="cart">
            <h4> Cart Items </h4>
            <div className="cart-items">
                {
                    cartItems.map(item => (
                        <CartItems {...item} price={item.price * item.quantity} removeCartItems={removeCartItems}></CartItems>
                    ))
                }
                <div className="cart-item">
                    <button>x</button>
                    <div className="info">
                        <span> Total </span>
                        <span> $ {total} </span>
                    </div>
                    <div className="info">
                        <span> <button onClick={clearCart}>Cancel</button> </span>
                        <span> <button  onClick={toggleCheckout}>
                            {checkoutOpen ? 'Hide' : 'Checkout'} 
                            </button> </span>
                    </div>
                    {
                        checkoutOpen && 
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
                    }
                </div>
            </div>
        </div>)
    );
};

export default Cart;