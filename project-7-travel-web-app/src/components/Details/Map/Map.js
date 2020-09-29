import React, { useContext } from 'react';
import {GoogleMap, LoadScript } from '@react-google-maps/api';
import { PlaceContext } from '../../../App';

const Map = () => {
    const [singlePlace] = useContext(PlaceContext)
    const mapStyles = {
        height:"40rem",
        width: '100%',
        position: 'relative',
        marginTop: '1rem',
        overflow: 'hidden',
        borderRadius: '0.5rem'
    };
    const places = [
        { city: 'Cox\'s Bazar', lat: 21.4272, lng: 92.0058 },
        { city: 'Sreemangal', lat: 24.3065, lng: 91.7296 },
        { city: 'Sundarbans', lat: 21.9497, lng: 89.1833 }
    ]
    
    const filterPlaced = places.filter( place => place.city === singlePlace.name)


        const defaultCenter = {
            lat: filterPlaced[0].lat, lng: filterPlaced[0].lng
        }
    
    
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyD2YCfY5IwyfITrZo01zPtwDXG__X66A2A'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            />
        </LoadScript>
    );
};

export default Map;