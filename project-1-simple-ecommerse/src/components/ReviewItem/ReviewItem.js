import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ReviewItem = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h6> Name : {props.product.name} </h6>
                    <p> Quantity : {props.product.quantity} </p>
                    <p> Price: {props.product.price} </p>
                    <button onClick={() => props.handleRemoveCart(props.product.key)}>Remove Item</button>
                </Col>
            </Row>
        </Container>
    );
};

export default ReviewItem;