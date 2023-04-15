import React from "react";

import dayjs from "dayjs";

import { Popup as LeafletPopup } from "react-leaflet";

const Popup = ({ earthquake }) => {
  const { created, date, depth, mag, title } = earthquake || {};

  const formattedDate = dayjs(created).format("dddd, MM/YYYY HH:MM") || date;

  return (
    <LeafletPopup>
      <div className="popup__container">
        <span className="popup__list_item">
          <span className="popup__title">Place</span>: {title}
        </span>
        <span className="popup__list_item">
          <span className="popup__title">Magnitude</span>: {mag}
        </span>
        <span className="popup__list_item">
          <span className="popup__title">Depth</span>: {depth}
        </span>
        <span className="popup__list_item">
          <span className="popup__title">Date</span>: {formattedDate}
        </span>
      </div>
    </LeafletPopup>
  );
};

export default Popup;
