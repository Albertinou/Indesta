"use client";

import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import {Icon} from 'leaflet';


// import { MapContainer, TileLayer, Marker } from "react-leaflet";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer),{ ssr: false});

const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer),{ ssr: false});

const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker),{ ssr: false});

export default function Maps(){
    return(
        <MapContainer
            center={[55.906241, 21.137942]} 
            scrollWheelZoom={false}
            zoom={13}
            style={{height: "50vh"}}
        >   
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker 
            position={[55.906241, 21.137942]}
            icon={new Icon({iconUrl : "Images/marker-icon.png", iconSize: [25, 41], iconAnchor: [12, 41]})}
            >
            </Marker>
        </MapContainer>
    )
}