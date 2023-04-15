import React from "react";

import { Icon } from "leaflet";
import { Marker } from "react-leaflet";

import MapPin from "../../assets/pin.png";
import MapGreenPin from "../../assets/green_pin.png";

const MarkerIcon = ({ children, position, isUserIcon = false }) => {
  const markerIcon = new Icon({
    iconUrl: MapPin,
    iconSize: [25, 25],
  });

  const userIcon = new Icon({
    iconUrl: MapGreenPin,
    iconSize: [22, 30],
  });

  return (
    <Marker icon={isUserIcon ? userIcon : markerIcon} position={position}>
      {children}
    </Marker>
  );
};

export default MarkerIcon;
