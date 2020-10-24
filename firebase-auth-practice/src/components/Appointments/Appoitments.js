import "date-fns";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';

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
    // const { register, handleSubmit, errors } = useForm();
    // const onSubmit = data => {
    //     console.log(data);
    // }
    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    const [currentPosition, setCurrentPosition] = useState({});
    console.log(currentPosition);
    // console.log(currentPosition.lat, currentPosition.lng);
    const success = position => {
        const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
    };
  
    async function loadData() {
        // const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyD2YCfY5IwyfITrZo01zPtwDXG__X66A2A')
        const response = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyD2YCfY5IwyfITrZo01zPtwDXG__X66A2A')
        const data = await response();
        console.log(data);
    }
    loadData()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    }, [])

    const [pop, setPop] = useState({})
    const onSelect = (pos) => {
        setPop(pos)
    }
    let api = 'AIzaSyD2YCfY5IwyfITrZo01zPtwDXG__X66A2A'
    return (
        <div>
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
            <div>
                <LoadScript
            googleMapsApiKey={api}
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={currentPosition}
            >
                {
                    currentPosition &&
                    <Marker
                        position={currentPosition}
                        onClick={() => {
                            onSelect(currentPosition)
                        }}
                    >
                        {
                            (pop.lat & pop.lng) &&
                            (
                                <InfoWindow
                                    position={pop}
                                    clickable={true}
                                    onCloseClick={() => setPop({})}
                                >
                                    <div>
                                        {/* <form className="userInfo" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="">
                                                {errors.lat && <li> Lat is required</li>}
                                                {errors.lng && <li>Lng is required</li>}
                                                {errors.userName && <li>User Name is required</li>}
                                                <div className="d-flex">
                                                    <input defaultValue={pop.lat} name="lat" className="mr-2" ref={register({ required: true })} placeholder="Please Enter Lat" />
                                                    <input defaultValue={pop.lng} name="lng" ref={register({ required: true })} placeholder="Please Enter Lng" />
                                                </div>
                                                <br />
                                                <input name="userName" ref={register({ required: true })} placeholder="Please Enter Your Name" />

                                                <br />
                                                <input value="Check Now" type="submit" />
                                            </div>
                                        </form> */}

                                    </div>
                                </InfoWindow>
                            )
                        }
                    </Marker>
                }
            </GoogleMap>

        </LoadScript>
            </div>
        </div>
    );
};

export default Appoitments;