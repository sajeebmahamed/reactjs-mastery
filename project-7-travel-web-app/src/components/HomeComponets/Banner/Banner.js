import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sreemongol from '../../../Image/Sreemongol.png'
import './Banner.css'
const Banner = () => {
    return (
        <Container>
            <Row>
                <Col md={4} style={{color: '#fff'}}>
                    <h1> Cox's bazar </h1>
                    <p> Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ... </p>
                    <Link to="/booking">
                        <Button>Booking</Button>
                    </Link>
                </Col>
                <Col md={8}>
                    <div>
                        <div className="sundorbon">
                            <h1>Sreemangal</h1>
                            <img src={sreemongol} alt="sreemongol"/>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;