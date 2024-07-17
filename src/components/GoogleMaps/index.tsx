"use client"

import React from 'react';
import { GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";


const libraries = ['places'];
const mapContainerStyle = {
  with: '100vw',
  height: '78vh',
};
const center = {
  lat: 4.5709,
  lng: -74.2973,
};
const options = {
  disableDefaultUI: true, // Deshabilita la interfaz de usuario predeterminada
  zoomControl: true       // Habilita el control de zoom
};



const GoogleMaps = () => {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (loadError) return <div>Error al cargar el mapa...</div>;
  if (!isLoaded) return <div>Cargando...</div>
  if (isLoaded) {console.log("Si funciona la logica de control de errores")}


  return (
    <GoogleMap
    mapContainerStyle={mapContainerStyle}
    center={center}
    zoom={8}
    options={options}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
};

export default GoogleMaps;