import React, {useEffect } from "react";

import "./Map.css";

const Map = (props) => {

  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map-render'), {
      center: props.center,
      zoom: props.zoom,
    });

    new window.google.maps.Marker({ position: props.center, map: map });
  }, [props.center, props.zoom]);
  //The use effect hook is rendered after the contect inside the return statement is rendered. Therefore the connection with map is successfully established and the map is re -rendered once the center or zoom is changed , avoiding crash
  return (
    <div
      id='map-render'
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
