"use client"

// components/RotatedMarker.tsx
import React, { useState } from 'react';
import { OverlayView } from '@react-google-maps/api';
// components/MapComponent.tsx
import { GoogleMap } from '@react-google-maps/api';
import MapProvider from '../MapProvider';

interface RotatedMarkerProps {
  position: google.maps.LatLngLiteral;
  icon: string;
  rotation: number;
}

const RotatedMarker: React.FC<RotatedMarkerProps> = ({ position, icon, rotation }) => {
  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <div
        style={{
          background: `url(${icon}) no-repeat center center`,
          backgroundSize: 'contain',
          width: '30px',
          height: '30px',
          transform: `rotate(${rotation}deg)`,
          transformOrigin: 'center center',
        }}
      />
    </OverlayView>
  );
};

const center = {
    lat: 5.0689, 
    lng: -75.5174,
  };



const MapPrueba: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const handleRotate = () => {
    setRotation((prevRotation) => (prevRotation + 45) % 360);
  };

  return (
    <div>
      <MapProvider>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={8}
        >
          <RotatedMarker
            position={center}
            icon="/images/mapaImage/moto.png"
            rotation={rotation}
          />
        </GoogleMap>
      </MapProvider>
      <button onClick={handleRotate}>Rotar Marcador</button>
    </div>
  );
};

export default MapPrueba;