"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";
import { ButtonPrimary } from "@/components/ui/button";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let&apos;s create something great together."
            description="Tell me about your project, goals and timeline. I&apos;ll get back to you within 24 hours."
          />
          <div className="space-y-5 mt-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm">
                ✉
              </div>
              <div>
                <p className="text-sm font-medium text-ink">Email</p>
                <p className="text-sm text-ink-secondary">
                  hello@kumidesign.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm">
                📍
              </div>
              <div>
                <p className="text-sm font-medium text-ink">Location</p>
                <p className="text-sm text-ink-secondary">Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-surface rounded-2xl p-8 border border-border"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-ink-muted uppercase tracking-widest mb-2"
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
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-ink-muted uppercase tracking-widest mb-2"
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
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-ink-muted uppercase tracking-widest mb-2"
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
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink focus:border-accent focus:ring-1 focus:ring-accent outline-none transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <ButtonPrimary type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4" />
            </ButtonPrimary>
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
    </Section>
  );
}
