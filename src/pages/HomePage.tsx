import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Globe, Shield, Star } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { countries } from "@/data/countries";
import CountryCard from "@/components/CountryCard";
import PageTransition from "@/components/PageTransition";

export default function HomePage() {
  const { t, lang } = useApp();
  const featured = countries.slice(0, 4);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video-like gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-neon-purple/10" />
          <div className="absolute inset-0 cyber-grid animate-grid-scroll opacity-40" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-neon-purple/20 blur-[120px]"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-primary">
              <Sparkles className="w-3 h-3" />
              AI-Powered Travel Platform
            </div>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              {t("heroTitle")}
              <br />
              <span className="gradient-cyber-text neon-text">{t("heroTitleHighlight")}</span>
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              {t("heroSubtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/countries"
                className="group px-8 py-4 rounded-xl gradient-cyber text-primary-foreground font-bold text-lg transition-all duration-300 hover:scale-105 neon-glow flex items-center gap-2"
              >
                {t("exploreNow")}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to={`/country/${countries[Math.floor(Math.random() * countries.length)].id}`}
                className="px-8 py-4 rounded-xl glass text-foreground font-bold text-lg transition-all duration-300 hover:scale-105 hover:neon-glow-purple flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-neon-purple" />
                {t("aiRecommend")}
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: "50+", label: { en: "Countries", ru: "Стран", uz: "Davlatlar" } },
              { value: "10K+", label: { en: "Travelers", ru: "Путешественников", uz: "Sayohatchilar" } },
              { value: "4.9", label: { en: "Rating", ru: "Рейтинг", uz: "Reyting" } },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold gradient-cyber-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label[lang] || stat.label.en}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              {lang === "en" ? "Why Choose Us" : lang === "ru" ? "Почему мы" : "Nega biz"}
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: { en: "Global Coverage", ru: "Мировой охват", uz: "Global qamrov" }, desc: { en: "50+ premium destinations worldwide", ru: "50+ премиум направлений по всему миру", uz: "Dunyo bo'ylab 50+ premium yo'nalishlar" } },
              { icon: Shield, title: { en: "Secure Booking", ru: "Безопасное бронирование", uz: "Xavfsiz buyurtma" }, desc: { en: "End-to-end encrypted transactions", ru: "Шифрованные транзакции", uz: "Shifrlangan tranzaksiyalar" } },
              { icon: Star, title: { en: "Premium Service", ru: "Премиум сервис", uz: "Premium xizmat" }, desc: { en: "24/7 AI-powered support", ru: "Поддержка 24/7 с ИИ", uz: "Sun'iy intellektli 24/7 qo'llab-quvvatlash" } },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-6 text-center hover:neon-glow transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-xl gradient-cyber flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-sm font-bold mb-2">{f.title[lang] || f.title.en}</h3>
                <p className="text-muted-foreground text-xs">{f.desc[lang] || f.desc.en}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              {lang === "en" ? "Top Destinations" : lang === "ru" ? "Топ направления" : "Top yo'nalishlar"}
            </h2>
            <Link to="/countries" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
              {lang === "en" ? "View All" : lang === "ru" ? "Все" : "Hammasi"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((c, i) => (
              <CountryCard key={c.id} country={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-display text-sm font-bold tracking-widest gradient-cyber-text mb-4">CYBERTRAVEL</div>
          <p className="text-muted-foreground text-xs">© 2026 CyberTravel. All rights reserved.</p>
        </div>
      </footer>
    </PageTransition>
  );
}
