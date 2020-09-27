import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';

const BookingBanner = () => {
    // const [startDate, setStartDate] = useState(new Date("2020/02/08"));
    // const [endDate, setEndDate] = useState(new Date("2020/02/10"));
    // console.log("start", startDate);
    // console.log("end", endDate);
    const { register, handleSubmit, watch, errors, control } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container>
            <Row>
                <Col md={4} style={{ color: '#fff' }}>
                    <h1> Cox's bazar </h1>
                    <p>
                        Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
                    </p>
                </Col>
                <Col md={8}>
                   <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input name="Origin" ref={register({ required: true })} />
                            {errors.Origin && <span>This field is required</span>}

                            <input name="Destination" ref={register({ required: true })} />
                            {errors.Destination && <span>This field is required</span>}

                            <input name="from" type="date" ref={register({ required: true })} />
                            {errors.from && <span>This field is required</span>}

                            <input name="to" type="date" ref={register({ required: true })} />
                            {errors.to && <span>This field is required</span>}
                            
                            <input type="submit" />
                        </form>
                    
                        {/* <form onSubmit={startBooking}>
                            <input type="text" name="origin" onBlur={handleChange} placeholder="Origin" />
                            <input type="text" name="destination" onBlur={handleChange} placeholder="Destination "/>
                            <input name="date" onBlur={handleChange} type="date" />
                            <DatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                            />
                            <DatePicker
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                            />
                            
                            <input type="submit" value="submit" /> 
                        </form>  */}
                   </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BookingBanner;