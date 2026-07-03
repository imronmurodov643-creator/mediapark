import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, BookOpen, Heart, LogOut, Settings } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { countries } from "@/data/countries";
import CountryCard from "@/components/CountryCard";
import PageTransition from "@/components/PageTransition";

export default function ProfilePage() {
  const { t, lang, user, setUser, bookings, favorites, isLoggedIn } = useApp();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }

  const favCountries = countries.filter(c => favorites.includes(c.id));

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Profile header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-8 mb-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img src={user?.avatar} alt="" className="w-24 h-24 rounded-full border-4 border-primary/30" />
              <div className="text-center sm:text-left flex-1">
                <h1 className="font-display text-2xl font-bold">{user?.name}</h1>
                <p className="text-muted-foreground text-sm">{user?.email}</p>
                <div className="flex items-center gap-4 mt-3 justify-center sm:justify-start">
                  <div className="text-xs"><span className="text-primary font-bold">{bookings.length}</span> {t("bookingHistory")}</div>
                  <div className="text-xs"><span className="text-neon-pink font-bold">{favorites.length}</span> {t("favorites")}</div>
                </div>
              </div>
              <button
                onClick={() => { setUser(null); navigate("/"); }}
                className="px-4 py-2 rounded-xl glass text-destructive text-sm font-medium hover:bg-destructive/10 transition-all flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" /> {t("logout")}
              </button>
            </div>
          </motion.div>

          {/* Booking history */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> {t("bookingHistory")}
            </h2>
            {bookings.length === 0 ? (
              <div className="glass rounded-2xl p-8 text-center text-muted-foreground text-sm">
                {lang === "en" ? "No bookings yet" : lang === "ru" ? "Пока нет бронирований" : "Hali buyurtmalar yo'q"}
              </div>
            ) : (
              <div className="space-y-3">
                {bookings.map(b => (
                  <div key={b.id} className="glass rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm">{b.country}</div>
                      <div className="text-xs text-muted-foreground capitalize">{b.packageType} • {b.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-display font-bold text-primary">${b.price}</div>
                      <div className="text-xs text-green-400">{b.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Favorites */}
          {favCountries.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-12">
              <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-neon-pink" /> {t("favorites")}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favCountries.map((c, i) => (
                  <CountryCard key={c.id} country={c} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
