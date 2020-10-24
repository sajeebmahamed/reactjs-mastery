import { Container, CssBaseline, makeStyles, TextareaAutosize, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    fromRoot: {
        width: '100%'
    },
}))

const AddEvent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString())
    const handleDateChange = (date) => {
        setSelectedDate(date.toDateString());
    };
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container maxWidth="md">
                <form className={classes.fromRoot}>
                    <div style={{ display: 'flex' }}>
                        <TextField variant="standard" id="name" name="name" label="Event Title" />
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
                    </div>
                    <div style={{ display: 'flex' }}>
                        <TextareaAutosize
                            rowsMin="5"
                            cols="100"
                            placeholder="enter description"
                        />
                        <TextField variant="standard" id="name" name="name" label="Event Title" />
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default AddEvent;