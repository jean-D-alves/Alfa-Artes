"use client";
import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MapView() {
  const lng = -36.64469481629675;
  const lat = -6.43833224123683;

  return (
    <section id="localização" className="flex flex-col p-6 gap-4 lg:flex-row">
      <div className="p-6">
        <h1 className="font-display text-2xl text-yellow-gold">Localização</h1>
        <p>
          Acari-RN
          <br />
          Rua Dr. Jorácio Mamede Galvão.
          <br />
          505
        </p>
      </div>
      <div className="flex-1 rounded-2xl  overflow-hidden">
        <Map
          initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: 16,
          }}
          style={{ width: "100%", height: "400px" }}
          mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
        >
          <Marker longitude={lng} latitude={lat} anchor="bottom">
            <div style={{ fontSize: "2rem" }}>📍</div>
          </Marker>
        </Map>
      </div>
    </section>
  );
}
