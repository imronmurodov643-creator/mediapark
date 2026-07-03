import { motion } from "framer-motion";
import { Plane } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ x: ["-100px", "100px"], y: [0, -30, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <Plane className="w-10 h-10 text-primary neon-text" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="font-display text-sm tracking-[0.3em] text-primary"
        >
          CYBERTRAVEL
        </motion.div>
      </div>
    </div>
  );
}
