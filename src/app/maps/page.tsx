import DefaultLayout from "@/components/Layouts/DefaultLayout";
import GoogleMaps from "@/components/GoogleMaps";
import DeliveryWorker from "@/components/GoogleMaps/deliveryWorker";
import React from "react";
import Script from "next/script";
import MapPrueba from "@/components/GoogleMaps/prueba";



const MapsPage = () => {
return (
    <DefaultLayout>
        {/* <Script
            defer
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&libraries=places&callback=Medusa`}
            strategy="afterInteractive"
            /> */}
        <GoogleMaps/>
        <div className="bg-red text-white py-4 pl-4 my-6">Componente Delivery Worker vvv</div>
        {/* <DeliveryWorker/> */}
        <MapPrueba/>
    </DefaultLayout>
    );
};

export default MapsPage;