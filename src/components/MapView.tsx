"use client";
import Map, { Marker, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MapView() {
  const lng = -36.64469481629675;
  const lat = -6.43833224123683;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <section id="localizacao" className="px-6 py-20 lg:px-20 lg:min-h-screen">
      <div className="grid gap-6 lg:h-[600px] lg:grid-cols-[320px_1fr]">
        <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black/20 p-8">
          <div>
            <p className="font-display text-sm tracking-widest uppercase text-red">
              Onde estamos
            </p>
            <h2 className="mt-2 font-display text-3xl text-foreground">
              Localização
            </h2>
            <address className="mt-4 not-italic leading-relaxed text-foreground/70">
              Acari-RN
              <br />
              Rua Dr. Jorácio Mamede Galvão, 505
            </address>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2 border border-white/20 px-5 py-3 text-sm text-foreground/80 transition-colors hover:border-red hover:text-red"
          >
            Ver rota no Google Maps →
          </a>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 lg:aspect-auto lg:h-full">
          <div className="absolute inset-0 [filter:sepia(0.4)_saturate(1.3)_hue-rotate(-8deg)_brightness(0.8)]">
            <Map
              initialViewState={{ longitude: lng, latitude: lat, zoom: 15.5 }}
              style={{ width: "100%", height: "100%" }}
              mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
              scrollZoom={false}
              dragRotate={false}
              touchPitch={false}
            >
              <NavigationControl position="bottom-right" showCompass={false} />
              <Marker longitude={lng} latitude={lat} anchor="bottom">
                <svg width="30" height="40" viewBox="0 0 30 40" fill="none">
                  <path
                    d="M15 0C6.7 0 0 6.7 0 15c0 11.25 15 25 15 25s15-13.75 15-25C30 6.7 23.3 0 15 0Z"
                    fill="#EF4444"
                  />
                  <circle cx="15" cy="15" r="6" fill="#171717" />
                </svg>
              </Marker>
            </Map>
          </div>
        </div>
      </div>
    </section>
  );
}
