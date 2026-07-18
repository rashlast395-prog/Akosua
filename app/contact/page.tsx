import { Metadata } from "next";
import ContactSection from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact — Kumi Design",
  description:
    "Get in touch with Kumi Ebenezer Tenkorang for your next design project.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactSection />
    </div>
  );
}
