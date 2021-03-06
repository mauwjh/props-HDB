import React from "react";
import { GoogleMap, Circle } from "@react-google-maps/api";
import RedMarker from "./RedMarker";

const containerStyle = {
  width: "80%",
  maxWidth: "1800px",
  height: "60vh",
  margin: "0 auto",
  marginBottom: "1%",
  border: "1px solid #bcdbdc",
  borderRadius: "5px",
};

const options = {
  strokeColor: "#4f6d7a",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#56A3A6",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 1000,
  zIndex: 1,
};

const Map = ({ location }) => {
  const center = {
    lat: parseFloat(location?.lat),
    lng: parseFloat(location?.lng),
  };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
      <Circle center={center} options={options} />
      <RedMarker center={center} />
    </GoogleMap>
  );
};

export default Map;
