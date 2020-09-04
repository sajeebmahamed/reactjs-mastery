import React from 'react'
import { Container, Col, Row, Toast } from 'react-bootstrap'
const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, product) => total + product.price , 0)
    let shippingCost = 0
    if(total > 30) {
        shippingCost = 0
    }
    else if(total > 15) {
        shippingCost = 4.99
    }
    else if(total > 0) {
        shippingCost = 12.99
    }
    const tax = total/10

    const formatNum = num => {
        const precision = num.toFixed(2)
        return Number(precision)
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h4> Order Summary </h4>
                    <p> Items Ordered <strong> {cart.length} </strong> </p>
                    <p> Shipping Cost <strong> {shippingCost} </strong> </p>
                    <p> Tax <strong> {formatNum(tax)} </strong> </p>
                    <p> Total <strong> {formatNum(total + shippingCost + tax)} </strong> </p>
                </Col>
            </Row>
        </Container>
    )
}
export default Cart