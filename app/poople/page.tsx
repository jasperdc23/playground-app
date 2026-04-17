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

  return (
    <div className="flex flex-col h-dvh w-full bg-[#f8faf5]">
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
  );
}
