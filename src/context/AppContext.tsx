import React, { createContext, useContext, useState, useCallback } from "react";
import type { Lang } from "@/data/translations";
import { translations } from "@/data/translations";

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface Booking {
  id: string;
  country: string;
  packageType: string;
  date: string;
  price: number;
  status: string;
}

interface Notification {
  id: string;
  message: Record<string, string>;
  type: "discount" | "info" | "success";
  read: boolean;
}

interface AppContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  user: User | null;
  setUser: (u: User | null) => void;
  isLoggedIn: boolean;
  bookings: Booking[];
  addBooking: (b: Booking) => void;
  notifications: Notification[];
  markNotificationRead: (id: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

const defaultNotifications: Notification[] = [
  { id: "1", message: { en: "🔥 Flash Sale: 30% off Japan packages!", ru: "🔥 Распродажа: скидка 30% на Японию!", uz: "🔥 Aksiya: Yaponiya paketlariga 30% chegirma!" }, type: "discount", read: false },
  { id: "2", message: { en: "✈️ New route: Direct flights to Maldives!", ru: "✈️ Новый маршрут: прямые рейсы на Мальдивы!", uz: "✈️ Yangi yo'nalish: Maldivga to'g'ridan-to'g'ri parvozlar!" }, type: "info", read: false },
  { id: "3", message: { en: "🎉 Welcome bonus: $50 travel credit!", ru: "🎉 Бонус: $50 на путешествия!", uz: "🎉 Bonus: $50 sayohat krediti!" }, type: "success", read: false },
];

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>(defaultNotifications);

  const t = useCallback((key: string) => {
    return translations[key]?.[lang] || key;
  }, [lang]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  }, []);

  const addBooking = useCallback((b: Booking) => {
    setBookings(prev => [...prev, b]);
  }, []);

  const markNotificationRead = useCallback((id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  }, []);

  return (
    <AppContext.Provider value={{
      lang, setLang, t, favorites, toggleFavorite,
      user, setUser, isLoggedIn: !!user,
      bookings, addBooking, notifications, markNotificationRead,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be inside AppProvider");
  return ctx;
};
