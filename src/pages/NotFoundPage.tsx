import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";

export default function NotFoundPage() {
  const { t } = useApp();

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Glitch grid */}
      <div className="absolute inset-0 cyber-grid animate-grid-scroll opacity-30" />
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-destructive/20 blur-[150px]"
      />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 10 }}
        >
          <h1 className="font-display text-[120px] sm:text-[180px] font-black leading-none gradient-cyber-text neon-text">
            404
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-xl sm:text-2xl font-bold mb-2"
        >
          {t("pageNotFound")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mb-8"
        >
          {t("lostInSpace")}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Link to="/" className="px-8 py-3 rounded-xl gradient-cyber text-primary-foreground font-bold hover:opacity-90 transition-opacity neon-glow">
            {t("goHome")}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
