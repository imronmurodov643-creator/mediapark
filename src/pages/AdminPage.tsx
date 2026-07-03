import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Users, DollarSign, Globe, Trash2, Edit, Plus } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { countries } from "@/data/countries";
import PageTransition from "@/components/PageTransition";

const stats = [
  { label: "Total Bookings", value: "1,247", icon: BarChart3, change: "+12%" },
  { label: "Revenue", value: "$182,400", icon: DollarSign, change: "+8%" },
  { label: "Active Users", value: "3,891", icon: Users, change: "+23%" },
  { label: "Countries", value: "8", icon: Globe, change: "+2" },
];

export default function AdminPage() {
  const { t, lang } = useApp();
  const [tab, setTab] = useState<"stats" | "countries">("stats");

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-8">{t("adminPanel")}</h1>

          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            {(["stats", "countries"] as const).map(tb => (
              <button
                key={tb}
                onClick={() => setTab(tb)}
                className={`px-6 py-2 rounded-xl text-sm font-medium transition-all ${
                  tab === tb ? "gradient-cyber text-primary-foreground" : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {tb === "stats" ? t("statistics") : t("manageCountries")}
              </button>
            ))}
          </div>

          {tab === "stats" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              {/* Stat cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-2xl p-6 hover:neon-glow transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <s.icon className="w-5 h-5 text-primary" />
                      <span className="text-xs text-green-400 font-medium">{s.change}</span>
                    </div>
                    <div className="font-display text-2xl font-black">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Chart placeholder */}
              <div className="glass rounded-2xl p-6">
                <h3 className="font-display text-sm font-bold mb-6">Revenue Overview</h3>
                <div className="flex items-end gap-2 h-48">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                      className="flex-1 rounded-t-lg gradient-cyber opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {tab === "countries" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="glass rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-border/30 flex items-center justify-between">
                  <span className="font-display text-sm font-bold">{t("manageCountries")}</span>
                  <button className="px-4 py-2 rounded-lg gradient-cyber text-primary-foreground text-xs font-medium flex items-center gap-1">
                    <Plus className="w-3 h-3" /> Add
                  </button>
                </div>
                <div className="divide-y divide-border/20">
                  {countries.map((c, i) => (
                    <motion.div
                      key={c.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="p-4 flex items-center gap-4 hover:bg-muted/20 transition-colors"
                    >
                      <img src={c.image} alt="" className="w-12 h-12 rounded-lg object-cover" />
                      <div className="flex-1">
                        <div className="font-bold text-sm">{c.name[lang]}</div>
                        <div className="text-xs text-muted-foreground">{c.continent} • ${Math.min(...c.packages.map(p => p.price))}+</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-lg hover:bg-primary/10 text-primary transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-destructive/10 text-destructive transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
