export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  categoryLabel: string;
  tags: string[];
  image: string;
  video?: string;
  year: string;
  description: string;
  overview: string;
  objective: string;
  tools: string[];
  deliverables: string;
  outcomes: string;
  featured?: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  author: string;
  image: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}
