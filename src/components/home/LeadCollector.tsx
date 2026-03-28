"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ChevronRight } from "lucide-react";
import { company } from "@/data/company";

type Step = "welcome" | "service" | "name" | "phone" | "details" | "done";

interface Message {
  from: "bot" | "user";
  text: string;
}

const serviceOptions = [
  "Interior Painting",
  "Exterior Painting",
  "Drywall / Texture",
  "Wood Staining",
  "Molding / Trim",
  "Door Installation",
  "Flooring",
  "Plumbing Repair",
  "Other",
];

export default function LeadCollector() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("welcome");
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: `Hey! I'm the Paint Pro assistant. What kind of work do you need done?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [lead, setLead] = useState({
    service: "",
    name: "",
    phone: "",
    details: "",
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (from: "bot" | "user", text: string) => {
    setMessages((prev) => [...prev, { from, text }]);
  };

  const handleServiceSelect = (service: string) => {
    setLead((prev) => ({ ...prev, service }));
    addMessage("user", service);
    setTimeout(() => {
      addMessage("bot", "Great choice. What's your name?");
      setStep("name");
    }, 400);
  };

  const handleSubmit = () => {
    if (!input.trim()) return;

    const value = input.trim();
    addMessage("user", value);
    setInput("");

    if (step === "name") {
      setLead((prev) => ({ ...prev, name: value }));
      setTimeout(() => {
        addMessage(
          "bot",
          `Nice to meet you, ${value}! What's the best phone number to reach you?`,
        );
        setStep("phone");
      }, 400);
    } else if (step === "phone") {
      setLead((prev) => ({ ...prev, phone: value }));
      setTimeout(() => {
        addMessage(
          "bot",
          "Any details about the project? (address, size, timeline, etc.)",
        );
        setStep("details");
      }, 400);
    } else if (step === "details") {
      setLead((prev) => ({ ...prev, details: value }));
      setTimeout(() => {
        addMessage(
          "bot",
          `All set! We'll reach out to you shortly about your ${lead.service.toLowerCase()} project. You can also call us anytime at ${company.phone}.`,
        );
        setStep("done");
      }, 400);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      {/* Chat bubble trigger */}
      <AnimatePresence>
        {!open && (
          <motion.button
            onClick={() => setOpen(true)}
            className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-terra-500 hover:bg-terra-600 text-white rounded-full shadow-xl flex items-center justify-center transition-colors duration-300"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-6 left-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-cream-200 flex flex-col overflow-hidden"
            style={{ height: "480px" }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-terra-500 text-white px-5 py-4 flex items-center justify-between flex-shrink-0">
              <div>
                <p className="font-display font-bold text-sm uppercase tracking-wide">
                  Paint Pro
                </p>
                <p className="text-white/70 text-xs">
                  We usually reply in minutes
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors duration-300"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-terra-500 text-white rounded-2xl rounded-br-md"
                        : "bg-cream-100 text-stone-700 rounded-2xl rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Service options */}
              {step === "welcome" && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {serviceOptions.map((svc) => (
                    <button
                      key={svc}
                      onClick={() => handleServiceSelect(svc)}
                      className="text-xs bg-cream-100 hover:bg-terra-50 border border-cream-300 hover:border-terra-300 text-stone-700 rounded-full px-3 py-1.5 transition-colors duration-300 flex items-center gap-1"
                    >
                      {svc}
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            {step !== "welcome" && step !== "done" && (
              <div className="border-t border-cream-200 p-3 flex items-center gap-2 flex-shrink-0">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    step === "name"
                      ? "Your name..."
                      : step === "phone"
                        ? "Phone number..."
                        : "Project details..."
                  }
                  className="flex-1 bg-cream-50 border border-cream-200 rounded-full px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-terra-500 transition-colors duration-300"
                  autoFocus
                />
                <button
                  onClick={handleSubmit}
                  className="w-10 h-10 bg-terra-500 hover:bg-terra-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === "done" && (
              <div className="border-t border-cream-200 p-4 text-center flex-shrink-0">
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-terra-500 text-white rounded-full px-6 py-2.5 font-display font-bold text-sm uppercase tracking-wider hover:bg-terra-600 transition-colors duration-300"
                >
                  Call {company.phone}
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
