import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Home.css";

export default function Home() {
  const [searchResult, set_searchResult] = useState(null);
  const [searchQuery, set_searchQuery] = useState(null);

  return (
    <div>
      <h1>THIS IS HOME</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(searchResult);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            set_searchQuery(e.target.value);
            console.log(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
      <MapContainer
        className="leaflet-container"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.379189, 4.899431]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
