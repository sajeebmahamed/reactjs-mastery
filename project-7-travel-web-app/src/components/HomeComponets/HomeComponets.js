import React from 'react';
import { Container } from 'react-bootstrap';
import './HomeComponets.css'
import Menu from './Menu/Menu';
const HomeComponets = () => {
    return (
        <Container fluid id="homeBg">
            <Menu />
        </Container>
    );
};

export default HomeComponets;