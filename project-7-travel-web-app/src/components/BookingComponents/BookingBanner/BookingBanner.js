import React, { useContext} from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {useHistory } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import './BookingBanner.css'
import { PlaceContext } from '../../../App';
import { useForm } from 'react-hook-form';

const BookingBanner = () => {
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        history.push('./details')
    };
    const [singlePlace] = useContext(PlaceContext)
    return (
        <Container>
            <Row style={{marginTop:'5rem'}}>
                <Col md={6} style={{ color: '#fff' }}>
                    <h1> {singlePlace.name} </h1>
                    <p>
                        {singlePlace.full_des}
                    </p>
                </Col>
                <Col md={6}>
                   <div id="">
                        <Card style={{ width: '24rem', height:'66vh' }}>
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