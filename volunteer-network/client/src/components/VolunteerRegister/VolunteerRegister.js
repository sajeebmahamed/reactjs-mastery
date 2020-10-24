import React, { useContext, useRef, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Container, CssBaseline, Typography } from '@material-ui/core';
import logo from '../../logos/logo.png'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { useHistory, useParams } from 'react-router-dom';
import { categories } from '../../data/categories';
import { LoginContext } from '../../App';
const axios = require('axios');


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    fromRoot: {
        '& > *': {
            margin: theme.spacing(1),
            width: '65ch',
        },
    },
}))

const VolunteerRegister = () => {
    const [loggedInUser, setLoggedInUser] = useContext(LoginContext)
    const [value, setValue] = useState({})
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString())
    console.log("value", value);
    const handleDateChange = (date) => {
        setSelectedDate(date.toDateString());
    };
    const handleValue = (e) => {
        const newValue = { ...value }
        newValue[e.target.name] = e.target.value
        setValue(newValue)
    }

    let history = useHistory();
    const handleSubmit = () => {
        const finalValue = { ...value }
        finalValue.date = selectedDate
        console.log(finalValue);
        axios.post('/register', finalValue)
            .then(res => console.log('success'))
            .catch(err => console.log(err.message))
            history.push('/events')
        // history.push({
        //     pathname: '/events',
        //     state: { value: value, event: event }
        // })


        // window.location = '/events'
    }
    const { eventId } = useParams()
    const event = categories.find(event => event.id === parseInt(eventId))
    
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            {/* <img width="30%" src={logo} alt="" style={{ textAlign: 'center' }}/> */}
            <Container maxWidth="sm">
                <Card>
                    <CardContent>
                        <Typography variant="h6" align="center"> Register as a Volunteer </Typography>
                        <form className={classes.fromRoot} noValidate autoComplete="off">
                            <TextField onChange={handleValue} id="name" name="name" label="Full Name" />
                            <TextField onChange={handleValue} id="email" name="email" label="Email" />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    disablePast="true"
                                    id="date"
                                    label="Date"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            <TextField onChange={handleValue} id="description" name="description" label="Description" />
                            <TextField  onChange={handleValue} id="event" name="event" label="Event" />
                            <Button onClick={handleSubmit} variant="contained" color="primary">Registration</Button>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </React.Fragment>
    );
};

export default VolunteerRegister;