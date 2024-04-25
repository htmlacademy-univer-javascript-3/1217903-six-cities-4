import { useRef, useEffect } from 'react';
import {Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { MapProps } from '../../types/map-type';

function Map({ centre, points,type }: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap({mapRef, centre});

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points]);

  return <section className={`${type} map`} ref={mapRef}></section>;
}

export default Map;
