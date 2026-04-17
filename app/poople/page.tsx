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
import SideNav from "@/components/poople/SideNav";
import FindNearby from "@/components/poople/FindNearby";
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
  const [showFindNearby, setShowFindNearby] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    if (isLoaded && !isSignedIn) router.replace("/poople/sign-in");
  }, [isLoaded, isSignedIn, router]);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const t = setTimeout(() => setShowNotifs(true), 800);
      return () => clearTimeout(t);
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded || !isSignedIn) {
    return (
      <div className="flex h-dvh items-center justify-center" style={{ background: "#f0fdf4" }}>
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">💩</div>
          <p className="font-semibold" style={{ color: "#15803d" }}>Loading Poople Maps...</p>
        </div>
      </div>
    );
  }

  function handleTabChange(t: Tab) {
    setTab(t);
    setSelected(null);
    setScreen(t);
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
    setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n));
  }

  return (
    <div className="flex h-dvh w-full overflow-hidden" style={{ background: "#f8faf5" }}>
      {/* Desktop sidebar */}
      <SideNav active={tab} onChange={handleTabChange} onFindNearby={() => setShowFindNearby(true)} />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-hidden relative">
          {/* Map screen (always mounted) */}
          <div className={`absolute inset-0 flex flex-col ${screen === "map" ? "z-10" : "z-0 pointer-events-none"}`}>
            <MapScreen
              onSelect={(t) => setSelected(t)}
              onNotifOpen={() => setShowNotifs(true)}
              unreadCount={unreadCount}
              onFindNearby={() => setShowFindNearby(true)}
            />
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

          {selected && (
            <DetailSheet toilet={selected} onClose={() => setSelected(null)} onCheckIn={handleCheckIn} />
          )}

          {showNotifs && (
            <NotificationPanel
              notifications={notifications}
              onClose={() => setShowNotifs(false)}
              onMarkRead={handleMarkRead}
            />
          )}
        </div>

        {/* Mobile bottom nav */}
        <div className="md:hidden">
          <BottomNav active={tab} onChange={handleTabChange} />
        </div>
      </div>

      {/* Find Nearby overlay */}
      {showFindNearby && (
        <FindNearby
          onClose={() => setShowFindNearby(false)}
          onSelect={(t) => { setSelected(t); setShowFindNearby(false); }}
        />
      )}
    </div>
  );
}
