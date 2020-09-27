import React from 'react';
import { Container } from 'react-bootstrap';
import Menu from '../HomeComponets/Menu/Menu';
import BookingBanner from './BookingBanner/BookingBanner';

const Booking = () => {
    return (
        <Container fluid id="homeBg">
            <Menu />
            <BookingBanner />
        </Container>
    );
};

export default Booking;