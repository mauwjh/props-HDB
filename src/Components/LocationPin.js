import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LocationPin = ({ text }) => {
  return (
    <div
      style={{
        color: "red",
        transform: "translate(-17.5px, -35px)",
      }}
      className="pin"
    >
      <LocationOnIcon fontSize="large" />
      <p
        style={{
          color: "black",
          fontWeight: "bold",
          height: "100%",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default LocationPin;
