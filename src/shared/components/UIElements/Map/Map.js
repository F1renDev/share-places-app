import React, { useRef, useEffect } from "react";

import styles from './Map.module.css'

const Map = props => {
  const mapRef = useRef();

  const { center, zoom } = props;
  
  const newCenter = [center.lat, center.lng];

  useEffect(() => {
    new window.ol.Map({
      target: mapRef.current.id,
      layers: [
        new window.ol.layer.Tile({
          source: new window.ol.source.OSM()
        })
      ],
      view: new window.ol.View({
        center: window.ol.proj.fromLonLat([newCenter[1], newCenter[0]]),
        zoom: zoom
      })
    });
  }, [newCenter, zoom]);

  return (
    <div
      ref={mapRef}
      className={`${styles.Map} ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};

export default Map;
