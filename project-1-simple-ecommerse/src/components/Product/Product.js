import React, { useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = (props) => {
    console.log(props);
    const {name, price, img, stock, seller, key} = props.product
    return(
        <Container>
            <Row>
                <Col xs={12} md={4} lg={4}>
                    <img src={img} alt=""/>
                </Col>
                <Col xs={12} md={8} lg={8}>
                    <h4> <Link to={"/product/"+key}> {name} </Link> </h4>
                    <h4> by {seller} </h4>
                    <h4> Price : {price} </h4>
                    <p> Only {stock} left in stock - order soon </p>
                    {
                        props.showAddToCart &&
                        <Button
                            onClick={() => props.handleAddProduct(props.product)}
                            varient="success"> 
                                Add to Cart
                        </Button>
                    }
                </Col>
            </Row>
        </Container>
    )
}
export default Product