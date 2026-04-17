"use client";

export type Notification = {
  id: string;
  title: string;
  body: string;
  time: string;
  read: boolean;
  icon: string;
};

export const defaultNotifications: Notification[] = [
  {
    id: "welcome",
    title: "Welcome to Poople Maps! 🎉",
    body: "Find the cleanest restrooms near you. Check in daily to earn XP and badges!",
    time: "Just now",
    read: false,
    icon: "💩",
  },
];

export default function NotificationPanel({
  notifications,
  onClose,
  onMarkRead,
}: {
  notifications: Notification[];
  onClose: () => void;
  onMarkRead: (id: string) => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-start" style={{ background: "rgba(0,0,0,0.4)" }} onClick={onClose}>
      <div
        className="bg-white shadow-2xl"
        style={{ borderRadius: "0 0 1.5rem 1.5rem", maxHeight: "70vh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-900">Notifications</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm">✕</button>
        </div>

        {notifications.length === 0 ? (
          <div className="py-12 text-center text-gray-400 text-sm">No notifications yet</div>
        ) : (
          <div className="divide-y divide-gray-50">
            {notifications.map((n) => (
              <button
                key={n.id}
                onClick={() => onMarkRead(n.id)}
                className="w-full text-left px-5 py-4 flex gap-3 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                style={{ background: n.read ? "white" : "#f0fdf4" }}
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-2xl shrink-0" style={{ background: "#dcfce7" }}>
                  {n.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-gray-900 leading-tight">{n.title}</p>
                    {!n.read && <div className="w-2 h-2 rounded-full bg-green-500 shrink-0 mt-1" />}
                  </div>
                  <p className="text-sm text-gray-600 mt-0.5 leading-snug">{n.body}</p>
                  <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
