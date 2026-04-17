"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import MapScreen from "@/components/poople/MapScreen";
import DetailSheet from "@/components/poople/DetailSheet";
import OccupiedScreen from "@/components/poople/OccupiedScreen";
import CheckInScreen from "@/components/poople/CheckInScreen";
import TriviaScreen from "@/components/poople/TriviaScreen";
import ProfileScreen from "@/components/poople/ProfileScreen";
import BottomNav from "@/components/poople/BottomNav";
import NotificationPanel, { type Notification, defaultNotifications } from "@/components/poople/NotificationPanel";
import { type Toilet } from "@/components/poople/data";

type Tab = "map" | "checkin" | "trivia" | "profile";
type Screen = "map" | "occupied" | "checkin" | "trivia" | "profile";

export default function PoopleMapPage() {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  const [tab, setTab] = useState<Tab>("map");
  const [screen, setScreen] = useState<Screen>("map");
  const [selected, setSelected] = useState<Toilet | null>(null);
  const [occupiedToilet, setOccupiedToilet] = useState<Toilet | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>(defaultNotifications);
  const [showNotifs, setShowNotifs] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Redirect unauthenticated users
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace("/poople/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  // Show welcome notification on first load
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const timer = setTimeout(() => setShowNotifs(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded || !isSignedIn) {
    return (
      <div className="flex h-dvh items-center justify-center bg-[#f0fdf4]">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">💩</div>
          <p className="text-green-700 font-semibold">Loading Poople Maps...</p>
        </div>
      </div>
    );
  }

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

  function handleMarkRead(id: string) {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  }

  return (
    <div className="flex flex-col h-dvh w-full bg-[#f8faf5]">
      <div className="flex-1 overflow-hidden flex flex-col relative">
        {/* Map screen (always mounted) */}
        <div className={`absolute inset-0 flex flex-col ${screen === "map" ? "z-10" : "z-0 pointer-events-none"}`}>
          <MapScreen onSelect={handleSelect} onNotifOpen={() => setShowNotifs(true)} unreadCount={unreadCount} />
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

        {/* Detail sheet */}
        {selected && (
          <DetailSheet toilet={selected} onClose={() => setSelected(null)} onCheckIn={handleCheckIn} />
        )}

        {/* Notification panel */}
        {showNotifs && (
          <NotificationPanel
            notifications={notifications}
            onClose={() => setShowNotifs(false)}
            onMarkRead={handleMarkRead}
          />
        )}
      </div>

      <BottomNav active={tab} onChange={handleTabChange} />
    </div>
  );
}
