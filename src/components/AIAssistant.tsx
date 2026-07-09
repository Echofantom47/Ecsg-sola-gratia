import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { MessageCircle, X, Send, Sparkles, Phone, MapPin, GraduationCap, Wallet, BookOpen, FileText } from "lucide-react";

type QuickAction = {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
};

type Message = {
  id: string;
  role: "bot" | "user";
  content: string;
  actions?: QuickAction[];
};

const WHATSAPP_URL =
  "https://wa.me/22890071065?text=Bonjour%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20l%27%C3%89cole%20Chr%C3%A9tienne%20Sola%20Gratia.";
const PHONE_URL = "tel:+22890071065";

const intents: { name: string; keywords: string[] }[] = [
  { name: "inscription", keywords: ["inscri", "admission", "enregistr", "enfant", "rejoindre"] },
  { name: "frais", keywords: ["frais", "prix", "coût", "cout", "tarif", "scolarit", "payer", "paiement"] },
  { name: "localisation", keywords: ["où", "ou ", "adresse", "localisation", "situé", "situee", "lomé", "lome", "carte", "maps", "trouver"] },
  { name: "programmes", keywords: ["programm", "classe", "niveau", "matière", "matiere", "enseign", "cours"] },
  { name: "maternelle", keywords: ["maternelle", "petite section", "moyenne section", "grande section", "bébé", "bebe"] },
  { name: "primaire", keywords: ["primaire", "cp", "ce1", "ce2", "cm1", "cm2"] },
  { name: "college", keywords: ["collège", "college", "6e", "6ème", "5e", "5ème", "4e", "4ème", "3e", "3ème", "secondaire"] },
  { name: "contact", keywords: ["contact", "appel", "appeler", "téléphone", "telephone", "joindre", "whatsapp", "numéro", "numero"] },
  { name: "horaires", keywords: ["horaire", "heure", "ouvert", "ouverture", "fermeture"] },
  { name: "valeurs", keywords: ["chrétien", "chretien", "valeur", "vision", "mission", "religion", "foi", "discipline"] },
  { name: "salutation", keywords: ["bonjour", "salut", "hello", "bonsoir", "coucou"] },
  { name: "merci", keywords: ["merci", "thanks"] },
];

const detectIntent = (text: string): string => {
  const lower = text.toLowerCase();
  for (const intent of intents) {
    if (intent.keywords.some((k) => lower.includes(k))) return intent.name;
  }
  return "unknown";
};

const STORAGE_KEY = "ecsg_chat_history_v1";

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw) as Message[];
      // strip actions (functions can't be serialized) — keep only text history
      return parsed.map((m) => ({ ...m, actions: undefined }));
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState("");
  const [hasGreeted, setHasGreeted] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const inactivityRef = useRef<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const openWhatsApp = () => window.open(WHATSAPP_URL, "_blank");
  const callSchool = () => (window.location.href = PHONE_URL);
  const openMaps = () =>
    window.open(
      "https://www.google.com/maps/search/?api=1&query=%C3%89cole+Chr%C3%A9tienne+Sola+Gratia+Yokoe+Lom%C3%A9+Togo",
      "_blank"
    );

  const buildResponse = (intent: string): Message => {
    const id = crypto.randomUUID();
    switch (intent) {
      case "salutation":
        return {
          id,
          role: "bot",
          content: "Bonjour 👋 Comment puis-je vous aider aujourd'hui ?",
          actions: defaultQuickActions(),
        };
      case "merci":
        return {
          id,
          role: "bot",
          content: "Avec plaisir 🙏 N'hésitez pas si vous avez d'autres questions.",
        };
      case "inscription":
        return {
          id,
          role: "bot",
          content:
            "Merci pour votre intérêt 🙏\n\nPour inscrire votre enfant, vous aurez besoin de :\n• Acte de naissance\n• Bulletin précédent\n\nSouhaitez-vous être accompagné par notre administration ?",
          actions: [
            { label: "💬 WhatsApp", icon: <MessageCircle className="w-3.5 h-3.5" />, onClick: openWhatsApp },
            { label: "📞 Appeler", icon: <Phone className="w-3.5 h-3.5" />, onClick: callSchool },
          ],
        };
      case "frais":
        return {
          id,
          role: "bot",
          content:
            "Les frais scolaires varient selon le niveau de l'élève 💰\n\nPour obtenir les détails précis et adaptés à votre situation, veuillez contacter directement l'administration.",
          actions: [
            { label: "💬 WhatsApp", icon: <MessageCircle className="w-3.5 h-3.5" />, onClick: openWhatsApp },
            { label: "📞 Appeler", icon: <Phone className="w-3.5 h-3.5" />, onClick: callSchool },
          ],
        };
      case "localisation":
        return {
          id,
          role: "bot",
          content: "Notre école est située à Lomé, Togo 📍\n\nVoulez-vous voir la localisation exacte ?",
          actions: [
            { label: "📍 Google Maps", icon: <MapPin className="w-3.5 h-3.5" />, onClick: openMaps },
            { label: "💬 WhatsApp", icon: <MessageCircle className="w-3.5 h-3.5" />, onClick: openWhatsApp },
          ],
        };
      case "programmes":
        return {
          id,
          role: "bot",
          content: "Nous proposons plusieurs niveaux d'enseignement 📚\n\nQuel niveau vous intéresse ?",
          actions: [
            { label: "👶 Maternelle", onClick: () => sendUserMessage("Maternelle") },
            { label: "🧒 Primaire", onClick: () => sendUserMessage("Primaire") },
            { label: "🎓 Collège", onClick: () => sendUserMessage("Collège") },
            { label: "Voir la page", icon: <BookOpen className="w-3.5 h-3.5" />, onClick: () => goTo("/programmes") },
          ],
        };
      case "maternelle":
        return {
          id,
          role: "bot",
          content:
            "Notre maternelle accueille les tout-petits dans un cadre chaleureux 👶\nNous éveillons leur curiosité dans un environnement sécurisant et chrétien.",
          actions: [
            { label: "Voir Programmes", icon: <BookOpen className="w-3.5 h-3.5" />, onClick: () => goTo("/programmes") },
            { label: "💬 WhatsApp", icon: <MessageCircle className="w-3.5 h-3.5" />, onClick: openWhatsApp },
          ],
        };
      case "primaire":
        return {
          id,
          role: "bot",
          content:
            "Le programme primaire vise à développer les compétences fondamentales de l'enfant dans un cadre discipliné et chrétien 🧒\n\nSouhaitez-vous plus de détails ?",
          actions: [
            { label: "Voir Programmes", icon: <BookOpen className="w-3.5 h-3.5" />, onClick: () => goTo("/programmes") },
            { label: "💬 WhatsApp", icon: <MessageCircle className="w-3.5 h-3.5" />, onClick: openWhatsApp },
          ],
        };
      case "college":
        return {
          id,
          role: "bot",
          content:
            "Notre collège prépare les élèves à l'excellence académique avec un encadrement rigoureux 🎓\n\nDe la 6ème à la 3ème, nous formons des esprits solides.",
          actions: [
            { label: "Voir Programmes", icon: <BookOpen className="w-3.5 h-3.5" />, onClick: () => goTo("/programmes") },
            { label: "💬 WhatsApp", icon: <MessageCircle className="w-3.5 h-3.5" />, onClick: openWhatsApp },
          ],
        };
      case "contact":
        return {
          id,
          role: "bot",
          content:
            "Vous pouvez contacter l'école directement 📞\n\n• 90 07 10 64\n• 99 60 19 21\n• 91 47 74 56\n\nVoulez-vous discuter directement avec nous ?",
          actions: [
            { label: "💬 WhatsApp", icon: <MessageCircle className="w-3.5 h-3.5" />, onClick: openWhatsApp },
            { label: "📞 Appeler", icon: <Phone className="w-3.5 h-3.5" />, onClick: callSchool },
            { label: "Page Contact", onClick: () => goTo("/contact") },
          ],
        };
      case "horaires":
        return {
          id,
          role: "bot",
          content:
            "L'école est ouverte du lundi au vendredi 🕐\nPour les horaires précis, contactez l'administration.",
          actions: [
            { label: "💬 WhatsApp", icon: <MessageCircle className="w-3.5 h-3.5" />, onClick: openWhatsApp },
          ],
        };
      case "valeurs":
        return {
          id,
          role: "bot",
          content:
            "Notre école offre une éducation basée sur les valeurs chrétiennes, la discipline et l'excellence ✝️\n\nSouhaitez-vous en savoir plus sur notre vision ?",
          actions: [
            { label: "À Propos", onClick: () => goTo("/a-propos") },
            { label: "💬 WhatsApp", icon: <MessageCircle className="w-3.5 h-3.5" />, onClick: openWhatsApp },
          ],
        };
      default:
        return {
          id,
          role: "bot",
          content:
            "Merci pour votre message 🙏\nJe n'ai pas bien compris votre demande.\n\nVoulez-vous contacter directement l'administration pour une réponse rapide ?",
          actions: [
            { label: "💬 WhatsApp", icon: <MessageCircle className="w-3.5 h-3.5" />, onClick: openWhatsApp },
            { label: "📞 Appeler", icon: <Phone className="w-3.5 h-3.5" />, onClick: callSchool },
          ],
        };
    }
  };

  const defaultQuickActions = (): QuickAction[] => [
    { label: "🎓 Inscription", onClick: () => sendUserMessage("Je veux inscrire mon enfant") },
    { label: "💰 Frais", onClick: () => sendUserMessage("Quels sont les frais ?") },
    { label: "📍 Localisation", onClick: () => sendUserMessage("Où êtes-vous situés ?") },
    { label: "📚 Programmes", onClick: () => sendUserMessage("Vos programmes") },
    { label: "📞 Contact", onClick: () => sendUserMessage("Contact") },
  ];

  const sendUserMessage = (text: string) => {
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: text };
    const intent = detectIntent(text);
    const botMsg = buildResponse(intent);
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
    resetInactivity();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendUserMessage(input.trim());
  };

  // Page-aware welcome
  const getPageWelcome = (): Message => {
    const id = crypto.randomUUID();
    const path = location.pathname;
    if (path.startsWith("/contact")) {
      return {
        id,
        role: "bot",
        content: "Bonjour 👋 Vous êtes sur la page Contact. Souhaitez-vous nous joindre directement ?",
        actions: [
          { label: "💬 WhatsApp", icon: <MessageCircle className="w-3.5 h-3.5" />, onClick: openWhatsApp },
          { label: "📞 Appeler", icon: <Phone className="w-3.5 h-3.5" />, onClick: callSchool },
        ],
      };
    }
    if (path.startsWith("/programmes")) {
      return {
        id,
        role: "bot",
        content: "Bonjour 👋 Curieux d'en savoir plus sur nos programmes ? Quel niveau vous intéresse ?",
        actions: [
          { label: "👶 Maternelle", onClick: () => sendUserMessage("Maternelle") },
          { label: "🧒 Primaire", onClick: () => sendUserMessage("Primaire") },
          { label: "🎓 Collège", onClick: () => sendUserMessage("Collège") },
        ],
      };
    }
    if (path.startsWith("/a-propos")) {
      return {
        id,
        role: "bot",
        content:
          "Bonjour 👋 Bienvenue ! Découvrez notre vision basée sur les valeurs chrétiennes et l'excellence ✝️",
        actions: defaultQuickActions(),
      };
    }
    if (path.startsWith("/galerie")) {
      return {
        id,
        role: "bot",
        content: "Bonjour 👋 Profitez de notre galerie. Une question sur la vie de l'école ?",
        actions: defaultQuickActions(),
      };
    }
    return {
      id,
      role: "bot",
      content:
        "Bonjour 👋\nBienvenue à l'École Chrétienne Sola Gratia.\nJe suis votre assistante virtuelle 😊\n\nComment puis-je vous aider ?",
      actions: defaultQuickActions(),
    };
  };

  // Auto greeting bubble after 5s
  useEffect(() => {
    if (hasGreeted) return;
    const t = window.setTimeout(() => setShowBubble(true), 12000);
    return () => window.clearTimeout(t);
  }, [hasGreeted]);

  // Initialize messages on open
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([getPageWelcome()]);
      setHasGreeted(true);
      setShowBubble(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Persist history (without actions) to localStorage
  useEffect(() => {
    try {
      const serializable = messages.map(({ id, role, content }) => ({ id, role, content }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
    } catch {
      /* ignore */
    }
  }, [messages]);

  // On route change, append a contextual hint instead of resetting history
  useEffect(() => {
    if (open && messages.length > 0) {
      setMessages((prev) => [...prev, getPageWelcome()]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Inactivity relance
  const resetInactivity = () => {
    if (inactivityRef.current) window.clearTimeout(inactivityRef.current);
    inactivityRef.current = window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "bot",
          content: "Êtes-vous toujours là ? 😊\nJe peux vous aider à inscrire votre enfant, voir les programmes, ou contacter l'école.",
          actions: defaultQuickActions(),
        },
      ]);
    }, 45000);
  };

  useEffect(() => {
    if (open) resetInactivity();
    return () => {
      if (inactivityRef.current) window.clearTimeout(inactivityRef.current);
    };
  }, [open]);

  // Scroll to bottom
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Greeting bubble */}
      <AnimatePresence>
        {showBubble && !open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 max-w-[260px] bg-card text-card-foreground rounded-2xl rounded-br-sm shadow-elegant border border-border"
          >
            <button
              onClick={() => {
                setShowBubble(false);
                setHasGreeted(true);
              }}
              aria-label="Fermer"
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center shadow hover:bg-gold-dark transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <button
              onClick={() => {
                setOpen(true);
                setShowBubble(false);
              }}
              className="text-left p-4 hover:bg-muted/30 rounded-2xl rounded-br-sm transition-colors w-full"
            >
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-gold-dark" />
                <span className="text-xs font-semibold text-primary">Assistante ECSG</span>
              </div>
              <p className="text-sm">
                Bonjour 👋 Besoin d'aide pour une information ou inscrire votre enfant ?
              </p>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setOpen((o) => !o);
          setShowBubble(false);
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-navy flex items-center justify-center shadow-elegant hover:shadow-gold transition-shadow border-2 border-gold"
        aria-label="Assistante virtuelle"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6 text-gold" />
            </motion.div>
          ) : (
            <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="w-6 h-6 text-gold" />
            </motion.div>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full animate-ping" />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 22 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[min(560px,calc(100vh-7rem))] bg-card rounded-2xl shadow-elegant border border-border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-navy px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-display font-bold text-primary-foreground text-sm">
                  Assistante ECSG
                </p>
                <p className="text-xs text-primary-foreground/70 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  En ligne
                </p>
              </div>
              <button
                onClick={() => {
                  setMessages([getPageWelcome()]);
                  try { localStorage.removeItem(STORAGE_KEY); } catch {}
                }}
                className="text-primary-foreground/70 hover:text-gold transition-colors text-xs px-2 py-1 rounded-md hover:bg-primary-foreground/10"
                aria-label="Nouvelle conversation"
                title="Nouvelle conversation"
              >
                ↻
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-primary-foreground/70 hover:text-gold transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-background/40">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="max-w-[85%] space-y-2">
                    <div
                      className={`rounded-2xl px-3.5 py-2.5 text-sm whitespace-pre-line ${
                        msg.role === "user"
                          ? "bg-gradient-navy text-primary-foreground rounded-br-sm"
                          : "bg-muted text-foreground rounded-bl-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {msg.actions.map((a, i) => (
                          <button
                            key={i}
                            onClick={a.onClick}
                            className="inline-flex items-center gap-1.5 text-xs font-medium bg-card border border-border hover:border-gold hover:bg-gold/10 text-foreground px-3 py-1.5 rounded-full transition-all"
                          >
                            {a.icon}
                            {a.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t border-border p-3 flex items-center gap-2 bg-card">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écrivez votre message..."
                className="flex-1 bg-muted rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center text-primary disabled:opacity-50 hover:shadow-gold transition-shadow"
                aria-label="Envoyer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
