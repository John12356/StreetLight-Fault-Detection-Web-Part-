import React from "react";
import { useLocation } from "react-router-dom";

const Map = () => {
  const location = useLocation();
  const { src } = location.state;

  return (
    <div className="map-cont">
      <iframe
        src={src}
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
