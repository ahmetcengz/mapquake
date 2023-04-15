import React from "react";

import Marker from "../Marker";
import Popup from "../Popup";

const MarkerList = ({ earthquakeList = [] }) => {
  return earthquakeList.map((earthquake) => {
    const [lat, lng] = earthquake.geojson.coordinates;
    return (
      <Marker position={{ lat, lng }}>
        <Popup earthquake={earthquake} />
      </Marker>
    );
  });
};

export default MarkerList;
