import "date-fns";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";

const Appoitments = () => {
    const [data, setData] = useState({})
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleEndDate = (date) => {
        setEndDate(date);
    };


    const handleChange = (e) => {
        e.preventDefault()
        const newData = { ...data }
        newData[e.target.name] = e.target.value
        setData(newData)
    }
    const handleSubmit = (e) => {

        const mainData = {
            selectedDate, endDate, ...data
        }
        console.log(mainData);

        e.preventDefault()
    }
    return (
        <form onClick={handleSubmit}>
            <input type="text" name="origin" onBlur={handleChange} placeholder="Origin" />
            <input type="text" name="destination" onBlur={handleChange} placeholder="Destination" />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="From"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            "aria-label": "change date"
                        }}
                    />

                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="To"
                        value={selectedDate}
                        onChange={handleEndDate}
                        KeyboardButtonProps={{
                            "aria-label": "change date"
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            <input type="submit" />
        </form>
    );
};

export default Appoitments;