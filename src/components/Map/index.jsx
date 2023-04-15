import React, { useRef } from "react";

import { MapContainer, TileLayer } from "react-leaflet";

import { TURKEY_CENTER } from "../../constants";
import useEarthquakeData from "../../hooks/useEarthquakeData";

import MarkerList from "../MarketList";

const Map = () => {
  const mapRef = useRef();

  const response = useEarthquakeData();

  const mobileZoom = window.screen.width >= 280 && window.screen.width <= 780;

  return (
    <div className="map__container">
      <MapContainer
        ref={mapRef}
        zoom={mobileZoom ? 5 : 7}
        className="map__map_container"
        center={TURKEY_CENTER}
      >
        <TileLayer url={"https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=529BlBJJfeFAraNbX1NV"} />
        <MarkerList earthquakeList={response.data} />
      </MapContainer>
    </div>
  );
};

export default Map;
