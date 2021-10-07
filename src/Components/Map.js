import React from 'react'
import GoogleMapReact from 'google-map-react'
import '../Map.css'

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCoRQxxeFYtKnmI2DsjiSklGXl_gtR6dCk' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >

      </GoogleMapReact>
    </div>
  </div>
)

export default Map