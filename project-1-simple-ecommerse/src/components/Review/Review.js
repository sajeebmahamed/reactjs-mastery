import React, { createFactory, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([])
    const [orderPlaced, setOrderPlaced] = useState(false)

    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedCart[key]
            return product
        })
        setCart(cartProducts)
    }, [])

    const handleRemoveCart = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }
    const handlePlaceOrder = () => {
        setCart([])
        processOrder()
        setOrderPlaced(true)
    }

    return (
        <Container>
            <Row>
                <Col md={8}>
                    {
                        cart.map(pd => <ReviewItem
                            key={pd.key}
                            product={pd}
                            handleRemoveCart={handleRemoveCart}
                        >
                        </ReviewItem>)
                    }
                    {
                        orderPlaced && <h1>Thank You for your order</h1>
                    }
                </Col>
                <Col md={4}>
                    <Cart cart={cart}>
                        <Button onClick={handlePlaceOrder}>
                            <Link style={{textDecoration:'none', color:"#fff"}} to="/shipment"> Procced to checkout </Link>
                        </Button>
                    </Cart>
                </Col>
            </Row>
        </Container>
        
    );
};

export default Review;