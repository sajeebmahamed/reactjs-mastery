import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Product = (props) => {
    console.log(props);
    const {name, price, img, stock, seller} = props.product
    return(
        <Container>
            <Row>
                <Col xs={12} md={4} lg={4}>
                    <img src={img} alt=""/>
                </Col>
                <Col xs={12} md={8} lg={8}>
                    <h4> {name} </h4>
                    <h4> by {seller} </h4>
                    <h4> Price : {price} </h4>
                    <p> Only {stock} left in stock - order soon </p>
                    <Button onClick={() => props.handleAddProduct(props.product)} varient="success"> Add to Cart </Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Product