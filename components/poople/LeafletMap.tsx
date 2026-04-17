"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { type Toilet } from "./data";
import "leaflet/dist/leaflet.css";

// Fix default marker icons in Next.js
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function makeIcon(toilet: Toilet) {
  const color = toilet.occupied ? "#f97316" : toilet.rating >= 4.2 ? "#16a34a" : toilet.rating >= 3.8 ? "#eab308" : "#ef4444";
  const emoji = toilet.occupied ? "🔴" : "🚽";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" viewBox="0 0 40 48">
    <circle cx="20" cy="20" r="18" fill="${color}" stroke="white" stroke-width="3"/>
    <text x="20" y="26" text-anchor="middle" font-size="16">${emoji}</text>
    <polygon points="16,36 24,36 20,46" fill="${color}"/>
  </svg>`;
  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [40, 48],
    iconAnchor: [20, 48],
    popupAnchor: [0, -48],
  });
}

const userIcon = L.divIcon({
  html: `<div style="width:18px;height:18px;border-radius:50%;background:#3b82f6;border:3px solid white;box-shadow:0 0 0 4px rgba(59,130,246,0.3)"></div>`,
  className: "",
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

function RecenterButton({ center }: { center: [number, number] }) {
  const map = useMap();
  return (
    <button
      onClick={() => map.setView(center, 16)}
      className="absolute bottom-4 right-4 z-[1000] w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-lg border border-gray-200 active:scale-95 transition-transform"
    >
      📍
    </button>
  );
}

const CENTER: [number, number] = [14.5995, 120.9842]; // Manila

export default function LeafletMap({ toilets, onSelect, expanded }: {
  toilets: Toilet[];
  onSelect: (t: Toilet) => void;
  expanded: boolean;
}) {
  return (
    <div className="relative w-full" style={{ height: expanded ? "100%" : 240 }}>
      <MapContainer
        center={CENTER}
        zoom={16}
        style={{ width: "100%", height: "100%" }}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* User location marker */}
        <Marker position={CENTER} icon={userIcon}>
          <Popup>📍 You are here</Popup>
        </Marker>
        {/* Toilet markers */}
        {toilets.map((t) => (
          <Marker
            key={t.id}
            position={[CENTER[0] + (t.y - 50) * 0.001, CENTER[1] + (t.x - 50) * 0.001]}
            icon={makeIcon(t)}
            eventHandlers={{ click: () => onSelect(t) }}
          >
            <Popup>
              <strong>{t.name}</strong><br />
              ⭐ {t.rating} · 🚶 {t.distance}
            </Popup>
          </Marker>
        ))}
        <RecenterButton center={CENTER} />
      </MapContainer>
    </div>
  );
}
