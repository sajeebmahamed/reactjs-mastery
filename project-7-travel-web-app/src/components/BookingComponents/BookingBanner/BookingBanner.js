import React, { useContext, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import './BookingBanner.css'
import { PlaceContext } from '../../../App';
import { useForm } from 'react-hook-form';

const BookingBanner = () => {
    let history = useHistory();
    const { register, handleSubmit, watch, errors, control } = useForm();
    const onSubmit = data => {
        history.push('./details')
        console.log(data);
    };
    const [singlePlace] = useContext(PlaceContext)
    console.log(singlePlace);
    return (
        <Container>
            <Row>
                <Col md={4} style={{ color: '#fff' }}>
                    <h1> {singlePlace.name} </h1>
                    <p>
                        {singlePlace.full_des}
                    </p>
                </Col>
                <Col md={8}>
                   <div id="">
                        <Card style={{ width: '24rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    <form id="bookingFrom" onSubmit={handleSubmit(onSubmit)}>
                                        <label htmlFor=""> Origin </label>
                                        <input name="Origin" ref={register({ required: true })} />
                                        {errors.Origin && <span>This field is required</span>}

                                        <label htmlFor=""> Destination </label>
                                        <input defaultValue={singlePlace.name} name="Destination" ref={register({ required: true })} />
                                        {errors.Destination && <span>This field is required</span>}

                                        <label htmlFor=""> From </label>
                                        <input name="from" type="date" ref={register({ required: true })} />
                                        {errors.from && <span>This field is required</span>}

                                        <label htmlFor=""> To </label>
                                        <input name="to" type="date" ref={register({ required: true })} />
                                        {errors.to && <span>This field is required</span>}

                                        <input type="submit" value="Start Booking" />
                                    </form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                   </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BookingBanner;