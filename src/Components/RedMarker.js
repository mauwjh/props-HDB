import React, { useState } from "react";
import { Marker, OverlayView } from "@react-google-maps/api";

const RedMarker = ({ center }) => {
  const [showInfo, setShowInfo] = useState(false);

  const divStyle = {
    background: "white",
    border: "1px solid #ccc",
    padding: 15,
  };

  return (
    <>
      <Marker
        animation={2}
        position={center}
        onClick={() => setShowInfo(!showInfo)}
      />
      {showInfo && (
        <OverlayView
          position={center}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div style={divStyle}>
            <h1>OverlayView</h1>
          </div>
        </OverlayView>
      )}
    </>
  );
};

export default RedMarker;
