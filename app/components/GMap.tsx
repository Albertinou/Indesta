"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader"

export function GMap() {

  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {

    const initMap = async () => {

      const loader = new Loader ({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly"
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker") as google.maps.MarkerLibrary;
      
      const position = {
        lat: 55.90665156197286, 
        lng:  21.138705501739384
      }

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 12,
        mapId: "Indesta_location"
      }

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: position
      })

    }
    initMap();
  }, []);

  return(
    <div  style={{height: "400px"}} ref={mapRef}/>
  )

}