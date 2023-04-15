import React from "react";

import { Icon } from "leaflet";
import { Marker } from "react-leaflet";

import MapPin from "../../assets/pin.png";

const MarkerIcon = ({ children, position }) => {
  const markerIcon = new Icon({
    iconUrl: MapPin,
    iconSize: [30, 30],
  });

  return (
    <Marker icon={markerIcon} position={position}>
      {children}
    </Marker>
  );
};

export default MarkerIcon;
