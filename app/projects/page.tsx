import { Metadata } from "next";
import { projects, projectCategories } from "@/lib/data/projects";
import PortfolioSection from "@/components/sections/portfolio-section";

export const metadata: Metadata = {
  title: "Projects — Kumi Design",
  description:
    "Portfolio of Kumi Ebenezer Tenkorang — Creative Designer. Logo Design, Brand Identity, Social Media Design, Motion Graphics, Video Editing, Print Design and Packaging.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <PortfolioSection />
    </div>
  );
}
