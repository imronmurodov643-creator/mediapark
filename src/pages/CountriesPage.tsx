import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { countries } from "@/data/countries";
import CountryCard from "@/components/CountryCard";
import PageTransition from "@/components/PageTransition";

export default function CountriesPage() {
  const { t, lang } = useApp();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"price" | "popularity" | "rating">("popularity");
  const [continent, setContinent] = useState("all");

  const continents = ["all", ...Array.from(new Set(countries.map(c => c.continent)))];

  const filtered = useMemo(() => {
    let list = countries.filter(c =>
      c.name[lang].toLowerCase().includes(search.toLowerCase()) ||
      c.capital[lang].toLowerCase().includes(search.toLowerCase()) ||
      c.tags.some(tag => tag.includes(search.toLowerCase()))
    );
    if (continent !== "all") list = list.filter(c => c.continent === continent);
    list.sort((a, b) => {
      if (sortBy === "price") return Math.min(...a.packages.map(p => p.price)) - Math.min(...b.packages.map(p => p.price));
      if (sortBy === "rating") return b.rating - a.rating;
      return b.popularity - a.popularity;
    });
    return list;
  }, [search, sortBy, continent, lang]);

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">
              {t("allCountries")}
            </h1>
            <p className="text-muted-foreground">
              {lang === "en" ? "Find your perfect destination" : lang === "ru" ? "Найдите идеальное направление" : "O'zingizga mos yo'nalishni toping"}
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass rounded-2xl p-4 mb-8 flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/50 border border-border/30 text-sm focus:outline-none focus:border-primary/50 focus:neon-glow transition-all"
              />
            </div>

            {/* Continent filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              {continents.map(c => (
                <button
                  key={c}
                  onClick={() => setContinent(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    continent === c ? "gradient-cyber text-primary-foreground" : "bg-muted/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c === "all" ? (lang === "en" ? "All" : lang === "ru" ? "Все" : "Hammasi") : c}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-muted/50 border border-border/30 text-foreground focus:outline-none"
              >
                <option value="popularity">{t("filterByPopularity")}</option>
                <option value="price">{t("filterByPrice")}</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((c, i) => (
              <CountryCard key={c.id} country={c} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                {lang === "en" ? "No destinations found" : lang === "ru" ? "Направления не найдены" : "Yo'nalishlar topilmadi"}
              </p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
