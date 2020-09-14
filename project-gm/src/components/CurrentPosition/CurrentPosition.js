import React, { useEffect, useState } from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import { useForm } from 'react-hook-form';
import './CurrentPosition.css'


const CurrentPosition = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    const [currentPosition, setCurrentPosition] = useState({});
    // console.log(currentPosition.lat, currentPosition.lng);
    const success = position => {
        const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    }, [])

    const [pop, setPop] = useState({})
    const onSelect = (pos) => {
        setPop(pos)
    }


    let api = 'AIzaSyD2YCfY5IwyfITrZo01zPtwDXG__X66A2A'
    return (
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
                                        <form className="userInfo" onSubmit={handleSubmit(onSubmit)}>
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
                                        </form>

                                    </div>
                                </InfoWindow>
                            )
                        }
                    </Marker>
                }
            </GoogleMap>

        </LoadScript>
    );
};

export default CurrentPosition;