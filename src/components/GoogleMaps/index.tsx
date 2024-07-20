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




const GoogleMaps = () => {

  const [searchResult1, setSearchResult1] = useState<google.maps.places.Autocomplete>()
  const [searchResult2, setSearchResult2] = useState<google.maps.places.Autocomplete>()

  const [directions, setDirections] = useState<any>(null);
  const [location1, setLocation1] = useState<any>(null);
  const [location2, setLocation2] = useState<any>(null);

 
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
        const { latitude, longitude } = position.coords;
        setLocation1({ lat: latitude, lng: longitude });
      }, (error) => {
        console.log("Error obteniendo la ubicación del usuario", error);
      });
    }
  }, []);

 

  function onLoad1(autocomplete: google.maps.places.Autocomplete) {
    setSearchResult1(autocomplete);
  }

  function onLoad2(autocomplete: google.maps.places.Autocomplete) {
    setSearchResult2(autocomplete);
  }

  function locationSelected1() {
    if(searchResult1) {
      const place = searchResult1.getPlace();
      setLocation1(place.geometry?.location!);
    } 
  }

  function locationSelected2() {
    if(searchResult2) {
      const place = searchResult2.getPlace();
      setLocation2(place.geometry?.location!);
    } 
  }

  function directionsCallback(response: any) {
    setDirections(response);
  }


  return (
    <MapProvider>
      <div>
        <div>
          <Autocomplete
                onLoad = {onLoad1}
                onPlaceChanged={locationSelected1}
                fields={['geometry.location', 'formatted_address']}
                options={autocompleteOptions}
          >
            <div className="flex items-center mb-4">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="#FFBC0D"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" /></svg>
              <input 
                type="text"
                placeholder="Ingrese una dirección..."
                className="p-4 ml-4 border-2 border-gray-300 border-[#FFBC0D] rounded-lg w-150 text-black"
              />
            </div>
          </Autocomplete>
          <Autocomplete
                onLoad = {onLoad2}
                onPlaceChanged={locationSelected2}
                fields={['geometry.location', 'formatted_address']}
                options={autocompleteOptions}
          >
                <input 
                  type="text"
                  placeholder="Ingrese una dirección..."
                  className='mb-4 p-4 border-2 border-gray-300 border-[#DA291C] rounded-lg w-150 text-black'
                  />
          </Autocomplete>
        </div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={location1 || center}
          zoom={18}
          options={options}
        >
         {location ? <MarkerF position={location1} /> : null}
         {location ? <MarkerF position={location2} /> : null}
         {location1 && location2 ? <><DirectionsService
          options={
            {
              origin: location1,
              destination: location2,
              travelMode: google.maps.TravelMode.DRIVING,
            }
          }
          callback={directionsCallback}
        /><DirectionsRenderer 
        directions={directions} 
        /></> : null}
        </GoogleMap>
      </div>
    </MapProvider>
  );
};

export default GoogleMaps;