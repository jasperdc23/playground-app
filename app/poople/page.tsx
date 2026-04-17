"use client";

import { useState } from "react";
import MapScreen from "@/components/poople/MapScreen";
import DetailSheet from "@/components/poople/DetailSheet";
import OccupiedScreen from "@/components/poople/OccupiedScreen";
import CheckInScreen from "@/components/poople/CheckInScreen";
import TriviaScreen from "@/components/poople/TriviaScreen";
import ProfileScreen from "@/components/poople/ProfileScreen";
import BottomNav from "@/components/poople/BottomNav";
import { type Toilet } from "@/components/poople/data";

type Tab = "map" | "checkin" | "trivia" | "profile";
type Screen = "map" | "occupied" | "checkin" | "trivia" | "profile";

export default function PoopleMapPage() {
  const [tab, setTab] = useState<Tab>("map");
  const [screen, setScreen] = useState<Screen>("map");
  const [selected, setSelected] = useState<Toilet | null>(null);
  const [occupiedToilet, setOccupiedToilet] = useState<Toilet | null>(null);

  function handleTabChange(t: Tab) {
    setTab(t);
    setSelected(null);
    setScreen(t);
  }

  function handleSelect(t: Toilet) {
    setSelected(t);
  }

  function handleCheckIn() {
    if (selected?.occupied) {
      setOccupiedToilet(selected);
      setSelected(null);
      setScreen("occupied");
    } else {
      setSelected(null);
      setTab("checkin");
      setScreen("checkin");
    }
  }

  const statusBar = (
    <div className="flex justify-between items-center px-6 py-2 text-xs font-semibold shrink-0" style={{ background: "#15803d", color: "white" }}>
      <span>9:41</span>
      <div className="w-24 h-4 rounded-full bg-black/30" />
      <div className="flex gap-1 items-center">
        <span>●●●</span>
        <span>WiFi</span>
        <span>🔋</span>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div
        className="relative flex flex-col overflow-hidden rounded-[2.5rem] shadow-2xl"
        style={{ width: 390, height: 844, background: "#f8faf5", border: "8px solid #1f2937" }}
      >
        {statusBar}

        <div className="flex-1 overflow-hidden flex flex-col relative">
          {/* Map (always mounted to preserve state) */}
          <div className={`absolute inset-0 flex flex-col ${screen === "map" ? "z-10" : "z-0 pointer-events-none"}`}>
            <MapScreen onSelect={handleSelect} />
          </div>

          {screen === "occupied" && occupiedToilet && (
            <div className="absolute inset-0 z-20 flex flex-col">
              <OccupiedScreen toilet={occupiedToilet} onBack={() => { setScreen("map"); setOccupiedToilet(null); }} />
            </div>
          )}
          {screen === "checkin" && (
            <div className="absolute inset-0 z-20 flex flex-col">
              <CheckInScreen onDone={() => { setTab("map"); setScreen("map"); }} />
            </div>
          )}
          {screen === "trivia" && (
            <div className="absolute inset-0 z-20 flex flex-col">
              <TriviaScreen />
            </div>
          )}
          {screen === "profile" && (
            <div className="absolute inset-0 z-20 flex flex-col">
              <ProfileScreen />
            </div>
          )}

          {/* Detail sheet overlay */}
          {selected && (
            <DetailSheet
              toilet={selected}
              onClose={() => setSelected(null)}
              onCheckIn={handleCheckIn}
            />
          )}
        </div>

        <BottomNav active={tab} onChange={handleTabChange} />
      </div>
    </div>
  );
}
