import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { useApp } from "@/context/AppContext";
import PageTransition from "@/components/PageTransition";

export default function LoginPage() {
  const { t, lang, setUser } = useApp();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      name: form.name || form.email.split("@")[0],
      email: form.email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${form.email}`,
    });
    navigate("/profile");
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="glass rounded-3xl p-8">
            <div className="text-center mb-8">
              <h1 className="font-display text-2xl font-bold mb-2">{isRegister ? t("register") : t("login")}</h1>
              <p className="text-muted-foreground text-sm">
                {isRegister
                  ? (lang === "en" ? "Create your account" : lang === "ru" ? "Создайте аккаунт" : "Hisob yarating")
                  : (lang === "en" ? "Welcome back, explorer" : lang === "ru" ? "С возвращением, путешественник" : "Qaytganingizdan xursandmiz")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isRegister && (
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder={t("fullName")}
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/50 border border-border/30 text-sm focus:outline-none focus:border-primary/50 transition-all"
                  />
                </div>
              )}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder={t("email")}
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/50 border border-border/30 text-sm focus:outline-none focus:border-primary/50 transition-all"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPw ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                  required
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-muted/50 border border-border/30 text-sm focus:outline-none focus:border-primary/50 transition-all"
                />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <button type="submit" className="w-full py-3 rounded-xl gradient-cyber text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity neon-glow">
                {isRegister ? t("register") : t("login")}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button onClick={() => setIsRegister(!isRegister)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {isRegister
                  ? (lang === "en" ? "Already have an account? Login" : lang === "ru" ? "Уже есть аккаунт? Войти" : "Hisobingiz bormi? Kirish")
                  : (lang === "en" ? "Don't have an account? Register" : lang === "ru" ? "Нет аккаунта? Зарегистрироваться" : "Hisobingiz yo'qmi? Ro'yxatdan o'tish")}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
