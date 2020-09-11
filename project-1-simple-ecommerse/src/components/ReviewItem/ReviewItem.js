import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ReviewItem = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h4> Name : {props.product.name} </h4>
                    <h4> Quantity : {props.product.quantity} </h4>
                    <button onClick={() => props.handleRemoveCart(props.product.key)}>Remove Item</button>
                </Col>
            </Row>
        </Container>
    );
};

export default ReviewItem;