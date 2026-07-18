"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-zinc-50/60 dark:bg-zinc-900/40"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
              Contact
            </p>
            <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight mb-6">
              Let&apos;s create something great together.
            </h2>
            <p className="reveal text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
              Tell me about your project, goals and timeline. I&apos;ll get back to you within 24 hours.
            </p>
            <div className="reveal space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <span className="text-sm">✉</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">
                    Email
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    hello@kumidesign.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <span className="text-sm">📍</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">
                    Location
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Accra, Ghana
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800"
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-sm text-zinc-900 dark:text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-sm text-zinc-900 dark:text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-sm text-zinc-900 dark:text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white font-medium px-7 py-3.5 rounded-full hover:bg-accent-light transition-colors text-sm w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </button>
                {submitStatus === "success" && (
                  <p className="text-sm text-center text-green-600 dark:text-green-400">
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm text-center text-red-600 dark:text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
