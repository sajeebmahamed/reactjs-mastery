import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from './Banner/Banner';
import './HomeComponets.css'
import Menu from './Menu/Menu';
const HomeComponets = () => {
    return (
        <Container fluid id="homeBg">
            <Menu />
            <Banner />
        </Container>
    );
};

export default HomeComponets;