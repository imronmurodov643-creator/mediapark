import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, MapPin, Plane, Thermometer, Droplets, Cloud, Star, ArrowLeft, Crown, Briefcase, Wallet } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { countries } from "@/data/countries";
import PageTransition from "@/components/PageTransition";

const pkgIcons = { economy: Wallet, business: Briefcase, vip: Crown };
const pkgColors = {
  economy: "border-primary/30 hover:border-primary/60",
  business: "border-neon-purple/30 hover:border-neon-purple/60",
  vip: "border-neon-pink/30 hover:border-neon-pink/60",
};

export default function CountryDetailPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { t, lang, favorites, toggleFavorite } = useApp();

  const country = countries.find(c => c.id === name);
  if (!country) return <div className="min-h-screen flex items-center justify-center text-foreground">Not found</div>;

  const isFav = favorites.includes(country.id);

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero */}
        <div className="relative h-[50vh] overflow-hidden">
          <img src={country.image} alt={country.name[lang]} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12 max-w-6xl mx-auto">
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight">{country.name[lang]}</h1>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    {country.capital[lang]}
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {country.rating}
                  </div>
                </div>
              </div>
              <button
                onClick={() => toggleFavorite(country.id)}
                className="p-3 rounded-xl glass hover:scale-110 transition-transform"
              >
                <Heart className={`w-6 h-6 ${isFav ? "text-neon-pink fill-neon-pink" : "text-foreground/50"}`} />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
          {/* Description */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl font-bold mb-4">{t("overview")}</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{country.description[lang]}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { label: "Population", value: country.population },
                { label: "Currency", value: country.currency },
                { label: "Language", value: country.language },
                { label: "Continent", value: country.continent },
              ].map((info, i) => (
                <div key={i} className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">{info.label}</div>
                  <div className="font-display text-sm font-bold text-primary">{info.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Weather */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl font-bold mb-4">{t("weather")}</h2>
            <div className="glass rounded-2xl p-6 grid sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Thermometer className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{t("temperature")}</div>
                  <div className="font-display text-xl font-bold">{country.weather.temp}°C</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{t("humidity")}</div>
                  <div className="font-display text-xl font-bold">{country.weather.humidity}%</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{t("condition")}</div>
                  <div className="font-display text-xl font-bold">{country.weather.condition}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Flight Price */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="glass rounded-2xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Plane className="w-6 h-6 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">{t("flightPrice")}</div>
                  <div className="font-display text-2xl font-bold">${country.flightPrice}</div>
                </div>
              </div>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xs text-primary font-medium"
              >
                ✦ {lang === "en" ? "Real-time pricing" : lang === "ru" ? "Цены в реальном времени" : "Real vaqt narxlari"}
              </motion.div>
            </div>
          </motion.div>

          {/* Packages */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl font-bold mb-6">{t("packages")}</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {country.packages.map((pkg) => {
                const Icon = pkgIcons[pkg.type];
                return (
                  <motion.div
                    key={pkg.type}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className={`glass rounded-2xl p-6 border-2 transition-all duration-300 ${pkgColors[pkg.type]} ${pkg.type === "vip" ? "neon-glow-purple" : ""}`}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Icon className={`w-5 h-5 ${pkg.type === "vip" ? "text-neon-pink" : pkg.type === "business" ? "text-neon-purple" : "text-primary"}`} />
                      <span className="font-display text-sm font-bold uppercase tracking-wider">{t(pkg.type)}</span>
                    </div>
                    <div className="font-display text-3xl font-black mb-4">
                      ${pkg.price}
                      <span className="text-sm text-muted-foreground font-normal">{t("perPerson")}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/booking?country=${country.id}&package=${pkg.type}`}
                      className="block text-center py-3 rounded-xl font-bold text-sm transition-all duration-300 gradient-cyber text-primary-foreground hover:opacity-90"
                    >
                      {t("bookNow")}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Hotels */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl font-bold mb-6">{t("hotels")}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {country.hotels.map((hotel, i) => (
                <div key={i} className="glass rounded-2xl overflow-hidden flex flex-col sm:flex-row">
                  <img src={hotel.image} alt={hotel.name} className="sm:w-40 h-40 sm:h-auto object-cover" />
                  <div className="p-5 flex-1">
                    <h3 className="font-display text-sm font-bold mb-1">{hotel.name}</h3>
                    <div className="flex items-center gap-0.5 mb-3">
                      {Array.from({ length: hotel.stars }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="font-display text-xl font-bold text-primary">
                      ${hotel.pricePerNight}<span className="text-xs text-muted-foreground font-normal">{t("perNight")}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Gallery */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl font-bold mb-6">{t("gallery")}</h2>
            <div className="grid grid-cols-2 gap-4">
              {country.gallery.map((img, i) => (
                <motion.div key={i} whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden aspect-video">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
