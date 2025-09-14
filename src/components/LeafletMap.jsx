import React, { useState, useEffect } from 'react';
import loadLeaflet from '../utils/leafletLoader';

import { getMarkerColor } from '../utils/earthquakeUtils';
import { getMarkerSize } from '../utils/earthquakeUtils';
const LeafletMap = ({ earthquakes }) => {
  const [map, setMap] = useState(null);
  const [L, setL] = useState(null);
  const mapRef = React.useRef(null);

  // Initialize map
  useEffect(() => {
    let mounted = true;
    
    loadLeaflet().then((leaflet) => {
      if (!mounted) return;
      
      setL(leaflet);
      
      // Create map with environment variables or defaults
      const defaultLat = parseFloat(import.meta.env.VITE_DEFAULT_MAP_CENTER_LAT) || 20;
      const defaultLng = parseFloat(import.meta.env.VITE_DEFAULT_MAP_CENTER_LNG) || 0;
      const defaultZoom = parseInt(import.meta.env.VITE_DEFAULT_MAP_ZOOM) || 2;
      
      const mapInstance = leaflet.map(mapRef.current, {
        center: [defaultLat, defaultLng],
        zoom: defaultZoom,
        worldCopyJump: true,
        maxBounds: [[-90, -180], [90, 180]],
        maxBoundsViscosity: 1.0
      });

      // Add tile layer
      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        noWrap: false
      }).addTo(mapInstance);

      setMap(mapInstance);
    }).catch(error => {
      console.error('Failed to load Leaflet:', error);
    });

    return () => {
      mounted = false;
      if (map) {
        map.remove();
      }
    };
  }, []);

  // Add earthquake markers
  useEffect(() => {
    if (!map || !L || !earthquakes.length) return;

    // Clear existing markers
    map.eachLayer((layer) => {
      if (layer instanceof L.CircleMarker) {
        map.removeLayer(layer);
      }
    });

    // Add new markers
    earthquakes.forEach((earthquake) => {
      const { geometry, properties } = earthquake;
      const [lng, lat] = geometry.coordinates;
      const magnitude = properties.mag || 0;
      const location = properties.place || 'Unknown location';
      const time = new Date(properties.time).toLocaleString();
      const depth = geometry.coordinates[2] || 'Unknown';

      const marker = L.circleMarker([lat, lng], {
        radius: getMarkerSize(magnitude),
        fillColor: getMarkerColor(magnitude),
        color: 'white',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
      });

      const popupContent = `
        <div style="font-family: system-ui, -apple-system, sans-serif;">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">
            Magnitude ${magnitude}
          </h3>
          <p style="margin: 4px 0; font-size: 14px;"><strong>Location:</strong> ${location}</p>
          <p style="margin: 4px 0; font-size: 14px;"><strong>Time:</strong> ${time}</p>
          <p style="margin: 4px 0; font-size: 14px;"><strong>Depth:</strong> ${depth} km</p>
          <p style="margin: 4px 0; font-size: 14px;"><strong>Coordinates:</strong> ${lat.toFixed(3)}, ${lng.toFixed(3)}</p>
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.addTo(map);
    });
  }, [map, L, earthquakes]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[600px] rounded-lg"
      style={{ minHeight: '600px' }}
    />
  );
};

export default LeafletMap