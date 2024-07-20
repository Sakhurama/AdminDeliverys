"use client"

import React, { Component, use, useState, useEffect, useCallback } from 'react';
import { GoogleMap, useLoadScript, MarkerF, DirectionsService, LoadScript, Autocomplete, Polyline, DirectionsRenderer } from "@react-google-maps/api";
import MapProvider from "../MapProvider"; 
import { count } from 'console';



const mapContainerStyle = {
  with: '100%',
  height: '78vh',
};

const center = {
  lat: 5.0689, 
  lng: -75.5174,
};

const options = {
  disableDefaultUI: false, // Deshabilita la interfaz de usuario predeterminada
  zoomControl: true,       // Habilita el control de zoom
};

const autocompleteOptions = {
  componentRestrictions: { country: "co"}, // Restringe la búsqueda a Colombia
};




const DeliveryWorker = () => {


  const [driverPosition, setDriverPosition] = useState({
    position: { lat: 40.7128, lng: -74.0060 },
    heading: 0
  });
  const [mapsLoaded, setMapsLoaded] = useState<any>(null);
  const [icon, setIcon] = useState<any>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    const createIcon = (heading: number) => ({
        path: "M137.31,120.1l-5.78,84.45c-1.01,14.73-12.73,26.71-28.13,30.04c-2.79,0.6-5.71,0.92-8.7,0.92 c-19.5,0-35.62-13.56-36.81-30.97l-5.78-84.45c-0.53-7.71,1.93-14.94,6.49-20.79c6.63-8.56,17.7-14.21,30.32-14.21h11.58 c21.25,0,38.13,16.02,36.81,34.99z",
        fillColor: "#DA291C",
        fillOpacity: 1,
        strokeWeight: 1,
        strokeColor: "#000000",
        scale: .1,
        anchor: new google.maps.Point(94.7, 238.5), // Punto medio aproximado del SVG
        rotation: heading,
    });
    
    setIcon(createIcon(driverPosition!.heading));
    setMapsLoaded(google.maps);
  }, []);


  useEffect(() => {
    const updateDriverPosition = () => {
      setDriverPosition(prevState => {
        const newLat = prevState.position.lat + (Math.random() - 0.5) * 0.001;
        const newLng = prevState.position.lng + (Math.random() - 0.5) * 0.001;
        const newHeading = Math.random() * 360; // Orientación aleatoria entre 0 y 360 grados

        // Actualizar el icono con la nueva orientación
        // setIcon(createIcon(newHeading));

        if (mapsLoaded) {
          setIcon(createIcon(newHeading));
        }     
        return {
          position: { lat: newLat, lng: newLng },
          heading: newHeading
        };
      });

      setTimeout(updateDriverPosition, 1000);
    };
    
    const createIcon = (heading: number): google.maps.Symbol => ({
        path: "M137.31,120.1l-5.78,84.45c-1.01,14.73-12.73,26.71-28.13,30.04c-2.79,0.6-5.71,0.92-8.7,0.92 c-19.5,0-35.62-13.56-36.81-30.97l-5.78-84.45c-0.53-7.71,1.93-14.94,6.49-20.79c6.63-8.56,17.7-14.21,30.32-14.21h11.58 c21.25,0,38.13,16.02,36.81,34.99z",
        fillColor: "#DA291C",
        fillOpacity: 1,
        strokeWeight: 1,
        strokeColor: "#000000",
        scale: .1,
        anchor: new mapsLoaded.Point(94.7, 238.5), // Punto medio aproximado del SVG
        rotation: heading,
    });


    updateDriverPosition();

    // return () => clearTimeout(updateDriverPosition);
  }, [mapsLoaded]);


  return (
    <MapProvider>
      <div>
        <GoogleMap
          onLoad={onLoad}
          mapContainerStyle={mapContainerStyle}
          center={driverPosition.position || center}
          zoom={18}
          options={options}
        >
         {driverPosition && icon ? <MarkerF position={driverPosition.position} icon={icon}/> : null}
        </GoogleMap>
      </div>
    </MapProvider>
  );
};

export default DeliveryWorker;