import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Bell, Menu, X, User, Plane, Heart } from "lucide-react";
import { useApp } from "@/context/AppContext";
import type { Lang } from "@/data/translations";

const langs: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
];

export default function Navbar() {
  const { t, lang, setLang, isLoggedIn, user, notifications, markNotificationRead, favorites } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const unread = notifications.filter(n => !n.read).length;

  const navLinks = [
    { to: "/", label: t("home") },
    { to: "/countries", label: t("countries") },
    { to: "/booking", label: t("booking") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg gradient-cyber flex items-center justify-center">
            <Plane className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display text-sm font-bold tracking-wider gradient-cyber-text hidden sm:block">
            CYBERTRAVEL
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive(link.to)
                  ? "text-primary neon-text bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {isLoggedIn && (
            <>
              <Link
                to="/profile"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive("/profile") ? "text-primary neon-text bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {t("profile")}
              </Link>
              <Link
                to="/admin"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive("/admin") ? "text-primary neon-text bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {t("admin")}
              </Link>
            </>
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Favorites count */}
          {favorites.length > 0 && (
            <Link to="/profile" className="relative p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <Heart className="w-4 h-4 text-neon-pink" fill="currentColor" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-neon-pink text-[10px] flex items-center justify-center font-bold text-primary-foreground">
                {favorites.length}
              </span>
            </Link>
          )}

          {/* Notifications */}
          <div className="relative">
            <button onClick={() => { setNotifOpen(!notifOpen); setLangOpen(false); }} className="relative p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <Bell className="w-4 h-4 text-muted-foreground" />
              {unread > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-primary text-[10px] flex items-center justify-center font-bold text-primary-foreground">
                  {unread}
                </span>
              )}
            </button>
            <AnimatePresence>
              {notifOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 top-12 w-80 glass-strong rounded-xl p-3 space-y-2"
                >
                  {notifications.map(n => (
                    <button
                      key={n.id}
                      onClick={() => markNotificationRead(n.id)}
                      className={`w-full text-left p-3 rounded-lg text-sm transition-all ${
                        n.read ? "opacity-50" : "bg-muted/30 hover:bg-muted/50"
                      }`}
                    >
                      {n.message[lang]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Lang switcher */}
          <div className="relative">
            <button onClick={() => { setLangOpen(!langOpen); setNotifOpen(false); }} className="flex items-center gap-1 p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-bold text-primary">{lang.toUpperCase()}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 top-12 glass-strong rounded-xl p-2 space-y-1"
                >
                  {langs.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`block w-full px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        lang === l.code ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Auth */}
          {isLoggedIn ? (
            <Link to="/profile" className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/30 hover:border-primary transition-colors">
              <img src={user?.avatar} alt="" className="w-full h-full object-cover" />
            </Link>
          ) : (
            <Link to="/login" className="px-4 py-1.5 rounded-lg text-sm font-medium gradient-cyber text-primary-foreground hover:opacity-90 transition-opacity">
              {t("login")}
            </Link>
          )}

          {/* Mobile menu toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg hover:bg-muted/50">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass-strong border-t border-border/30 overflow-hidden"
          >
            <div className="p-4 space-y-2">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive(link.to) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {isLoggedIn && (
                <>
                  <Link to="/profile" onClick={() => setMenuOpen(false)} className="block px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50">
                    {t("profile")}
                  </Link>
                  <Link to="/admin" onClick={() => setMenuOpen(false)} className="block px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50">
                    {t("admin")}
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
