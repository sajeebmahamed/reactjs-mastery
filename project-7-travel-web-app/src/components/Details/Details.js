import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Hotels from './Hotels/Hotels';

const Details = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Hotels />
                </Col>
            </Row>
        </Container>
    );
};

export default Details;