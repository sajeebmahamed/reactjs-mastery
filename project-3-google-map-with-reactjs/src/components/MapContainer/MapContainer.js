import React, { useEffect, useState } from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }
    const locations = [
        {
            name: "Location 1",
            location: {
                lat: 41.3954,
                lng: 2.162
            },
        },
        {
            name: "Location 2",
            location: {
                lat: 41.3917,
                lng: 2.1649
            },
        },
        {
            name: "Location 3",
            location: {
                lat: 41.3773,
                lng: 2.1585
            },
        },
        {
            name: "Location 4",
            location: {
                lat: 41.3797,
                lng: 2.1682
            },
        },
        {
            name: "Location 5",
            location: {
                lat: 41.4055,
                lng: 2.1915
            },
        }
    ];
    const [selected, setSelected] = useState({});
    const [currentPosition, setCurrentPosition] = useState({});

    const success = position => {
        const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
    };
    const onSelect = item => {
        setSelected(item);
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    })
    let api = process.env.API
    return (
        <LoadScript
            googleMapsApiKey={api}
        >
            <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
        >
                {
                    locations.map(item => {
                        return (
                            <Marker
                                key={item.name}
                                position={item.location}
                                onClick={() => onSelect(item)}
                            >
                            </Marker>
                        )
                    })
                }
                {
                    selected.location && 
                    (
                        <InfoWindow
                            position={selected.location}
                            clickable={true}
                            onCloseClick={() => setSelected({})}
                        >
                            <div>
                                <p>{selected.name}</p>
                                <p>{selected.location.lat}</p>
                                <p>{selected.location.lng}</p>
                            </div>
                        </InfoWindow>
                    )
                }

        </GoogleMap>
           

        </LoadScript>
    );
};

export default MapContainer;