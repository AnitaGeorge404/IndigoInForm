import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OfficeLocation } from '../../types';

// Custom Map Controller to handle flying to active office
const MapController: React.FC<{ activeOffice: OfficeLocation; offices: OfficeLocation[] }> = ({ activeOffice, offices }) => {
  const map = useMap();

  useEffect(() => {
    if (activeOffice) {
      map.flyTo(activeOffice.coordinates, 15, {
        duration: 1.5,
        easeLinearity: 0.25,
      });
    }
  }, [activeOffice, map]);

  useEffect(() => {
    // Fit bounds on initial load if we want to show both
    if (offices.length > 0) {
      const bounds = L.latLngBounds(offices.map(o => o.coordinates));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, offices]);

  return null;
};

// Create a custom SVG icon for markers
const createCustomIcon = () => {
  const svgHtml = `
    <div style="filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3)); transform: translate(-50%, -100%); width: 40px; height: 40px;">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5" style="color: #0044FF; width: 100%; height: 100%;">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    </div>
  `;
  
  return L.divIcon({
    html: svgHtml,
    className: 'custom-leaflet-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};

interface OfficeMapProps {
  offices: OfficeLocation[];
  activeOffice: OfficeLocation;
}

const OfficeMap: React.FC<OfficeMapProps> = ({ offices, activeOffice }) => {
  const customIcon = createCustomIcon();

  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-lg relative bg-[#e5e7eb] z-0">
      <MapContainer 
        center={activeOffice.coordinates} 
        zoom={2} 
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {offices.map((office) => (
          <Marker 
            key={office.id} 
            position={office.coordinates} 
            icon={customIcon}
          >
            <Popup className="rounded-lg shadow-sm">
              <div className="text-center font-sans">
                <h3 className="font-bold text-gray-900 text-sm mb-1">{office.name}</h3>
                <p className="text-gray-500 text-xs leading-tight">{office.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        <MapController activeOffice={activeOffice} offices={offices} />
      </MapContainer>
    </div>
  );
};

export default OfficeMap;