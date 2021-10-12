import React from 'react'
import { GoogleMap, LoadScript, Circle, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '80%',
  maxWidth: '1800px',
  height: '60vh',
  margin: '0 auto',
  marginTop: '2%',
  marginBottom: '1%',
  border: '3px solid grey'
};

const options = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 1000,
  zIndex: 1
}

const Map = ({location}) => {
  const center = {
    lat: location.lat,
    lng: location.lng
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        <Circle center={center} options={options}/>
        <Marker
      position={center}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map