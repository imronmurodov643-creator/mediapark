import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Heart, MapPin, Plane } from "lucide-react";
import { useApp } from "@/context/AppContext";
import type { Country } from "@/data/countries";

export default function CountryCard({ country, index = 0 }: { country: Country; index?: number }) {
  const { lang, t, favorites, toggleFavorite } = useApp();
  const isFav = favorites.includes(country.id);
  const minPrice = Math.min(...country.packages.map(p => p.price));

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative"
    >
      <div className="glass rounded-2xl overflow-hidden transition-all duration-500 hover:neon-glow hover:border-primary/40">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={country.image}
            alt={country.name[lang]}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

          {/* Favorite button */}
          <button
            onClick={(e) => { e.preventDefault(); toggleFavorite(country.id); }}
            className="absolute top-3 right-3 p-2 rounded-full glass transition-all hover:scale-110"
          >
            <Heart className={`w-4 h-4 ${isFav ? "text-neon-pink fill-neon-pink" : "text-foreground/70"}`} />
          </button>

          {/* Rating */}
          <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full glass text-xs font-medium">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span>{country.rating}</span>
          </div>

          {/* Price tag */}
          <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg gradient-cyber text-primary-foreground text-sm font-bold">
            ${minPrice}+
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-display text-lg font-bold tracking-wide">{country.name[lang]}</h3>
            <div className="flex items-center gap-1 text-muted-foreground text-xs mt-1">
              <MapPin className="w-3 h-3" />
              <span>{country.capital[lang]}</span>
            </div>
          </div>

          <p className="text-muted-foreground text-xs line-clamp-2 leading-relaxed">
            {country.description[lang]}
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-border/30">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Plane className="w-3 h-3 text-primary" />
              <span>{t("from")} <span className="text-primary font-semibold">${country.flightPrice}</span></span>
            </div>
            <Link
              to={`/country/${country.id}`}
              className="px-3 py-1.5 rounded-lg text-xs font-medium border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 hover:neon-glow"
            >
              {t("viewDetails")}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
