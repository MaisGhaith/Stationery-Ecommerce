import React, { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

function MapComponent() {
  const [selectedLocation, setSelectedLocation] = useState({lat: 0, lng: 0});

  const handleMapClick = (event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMap
        mapContainerStyle={{ height: '100%', width: '100%' }}
        zoom={10}
        center={{ lat: 0, lng: 0 }}
        onClick={handleMapClick}
      >
        {selectedLocation && (
          <Marker position={selectedLocation} />
        )}
      </GoogleMap>
    </div>
  );
}

export default MapComponent;

