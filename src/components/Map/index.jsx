import React, { useEffect, useRef, useState } from "react";

import { MapContainer, Popup, TileLayer } from "react-leaflet";

import { TURKEY_CENTER } from "../../constants";
import useEarthquakeData from "../../hooks/useEarthquakeData";

import MarkerList from "../MarketList";
import MarkerIcon from "../Marker";

const Map = () => {
  const mapRef = useRef();
  const response = useEarthquakeData();

  const [userGeoLocation, setUserGeoLocation] = useState(null);

  const mobileZoom = window.screen.width >= 280 && window.screen.width <= 780;

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) =>
      setUserGeoLocation(position)
    );
  }, []);

  return (
    <div className="map__container">
      <MapContainer
        ref={mapRef}
        zoom={mobileZoom ? 5 : 7}
        className="map__map_container"
        center={TURKEY_CENTER}
      >
        <TileLayer
          url={
            "https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=529BlBJJfeFAraNbX1NV"
          }
        />
        <MarkerList earthquakeList={response.data} />
        {userGeoLocation && (
          <MarkerIcon
            isUserIcon
            position={{
              lat: userGeoLocation.coords.latitude,
              lng: userGeoLocation.coords.longitude,
            }}
          >
            <Popup>You're here!</Popup>
          </MarkerIcon>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
