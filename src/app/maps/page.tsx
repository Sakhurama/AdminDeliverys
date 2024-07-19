import DefaultLayout from "@/components/Layouts/DefaultLayout";
import GoogleMaps from "@/components/GoogleMaps";
import React from "react";
import Script from "next/script";



const MapsPage = () => {
return (
    <DefaultLayout>
        {/* <Script
            defer
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&libraries=places&callback=Medusa`}
            strategy="afterInteractive"
            /> */}
        <GoogleMaps/>
    </DefaultLayout>
    );
};

export default MapsPage;