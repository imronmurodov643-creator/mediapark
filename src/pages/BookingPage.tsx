import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, CheckCircle, Plane } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { countries } from "@/data/countries";
import PageTransition from "@/components/PageTransition";

export default function BookingPage() {
  const { t, lang, addBooking, isLoggedIn } = useApp();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const countryId = params.get("country") || countries[0].id;
  const pkgType = params.get("package") || "economy";
  const country = countries.find(c => c.id === countryId) || countries[0];
  const pkg = country.packages.find(p => p.type === pkgType) || country.packages[0];

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "", travelers: "1", date: "" });
  const [card, setCard] = useState({ number: "", expiry: "", cvv: "" });
  const [success, setSuccess] = useState(false);

  const handlePay = () => {
    setSuccess(true);
    addBooking({
      id: Date.now().toString(),
      country: country.name[lang],
      packageType: pkgType,
      date: form.date || new Date().toISOString().split("T")[0],
      price: pkg.price * parseInt(form.travelers || "1"),
      status: "confirmed",
    });
  };

  if (success) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-24 h-24 rounded-full gradient-cyber flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-12 h-12 text-primary-foreground" />
            </motion.div>
            <h1 className="font-display text-3xl font-bold mb-2">{t("paymentSuccess")}</h1>
            <p className="text-muted-foreground mb-8">
              {country.name[lang]} — {t(pkgType)}
            </p>
            <motion.div animate={{ x: ["-50px", "50px"] }} transition={{ duration: 2, repeat: 3 }}>
              <Plane className="w-8 h-8 text-primary mx-auto" />
            </motion.div>
            <button onClick={() => navigate("/")} className="mt-8 px-6 py-3 rounded-xl gradient-cyber text-primary-foreground font-bold">
              {t("goHome")}
            </button>
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-8">{t("bookingTitle")}</h1>

          {/* Summary */}
          <div className="glass rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-4">
              <img src={country.image} alt="" className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1">
                <h3 className="font-display font-bold">{country.name[lang]}</h3>
                <p className="text-muted-foreground text-sm capitalize">{t(pkgType)} {t("packages").toLowerCase()}</p>
              </div>
              <div className="font-display text-2xl font-black text-primary">${pkg.price}</div>
            </div>
          </div>

          {/* Steps */}
          <div className="flex gap-4 mb-8">
            {[1, 2].map(s => (
              <div key={s} className={`flex-1 h-1.5 rounded-full transition-all ${step >= s ? "gradient-cyber" : "bg-muted"}`} />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                {[
                  { key: "name", label: t("fullName"), type: "text" },
                  { key: "email", label: t("email"), type: "email" },
                  { key: "phone", label: t("phone"), type: "tel" },
                  { key: "travelers", label: t("travelers"), type: "number" },
                  { key: "date", label: t("travelDate"), type: "date" },
                ].map(field => (
                  <div key={field.key}>
                    <label className="text-sm text-muted-foreground mb-1 block">{field.label}</label>
                    <input
                      type={field.type}
                      value={(form as any)[field.key]}
                      onChange={e => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/30 text-sm focus:outline-none focus:border-primary/50 transition-all"
                    />
                  </div>
                ))}
                <button onClick={() => setStep(2)} className="w-full py-3 rounded-xl gradient-cyber text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity">
                  {lang === "en" ? "Continue to Payment" : lang === "ru" ? "Перейти к оплате" : "To'lovga o'tish"}
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <span className="font-display text-sm font-bold">{lang === "en" ? "Payment Details" : lang === "ru" ? "Данные оплаты" : "To'lov ma'lumotlari"}</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">{t("cardNumber")}</label>
                      <input
                        placeholder="4242 4242 4242 4242"
                        value={card.number}
                        onChange={e => setCard(prev => ({ ...prev, number: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/30 text-sm focus:outline-none focus:border-primary/50 transition-all font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-1 block">{t("expiry")}</label>
                        <input
                          placeholder="MM/YY"
                          value={card.expiry}
                          onChange={e => setCard(prev => ({ ...prev, expiry: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/30 text-sm focus:outline-none focus:border-primary/50 transition-all font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1 block">{t("cvv")}</label>
                        <input
                          placeholder="123"
                          value={card.cvv}
                          onChange={e => setCard(prev => ({ ...prev, cvv: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/30 text-sm focus:outline-none focus:border-primary/50 transition-all font-mono"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="flex-1 py-3 rounded-xl glass font-bold text-sm hover:bg-muted/50 transition-all">
                    {lang === "en" ? "Back" : lang === "ru" ? "Назад" : "Ortga"}
                  </button>
                  <button onClick={handlePay} className="flex-1 py-3 rounded-xl gradient-cyber text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity neon-glow">
                    {t("payNow")} — ${pkg.price * parseInt(form.travelers || "1")}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
}
