export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  features?: string[];
  github?: string;
  demo?: string;
  image?: string;
  challenges?: string;
  outcome?: string;
}

export interface Research {
  id: string;
  title: string;
  abstract: string;
  authors: string[];
  venue: string;
  year: string;
  doi?: string;
  keywords: string[];
  citations?: number | string;
  methodology?: string;
  results?: string;
  impact?: string;
  pdf?: string;
}

export interface Experience {
  id: string;
  title: string;
  institution: string;
  duration: string;
  description: string;
  skills?: string;
  achievements?: string[];
  type: 'education' | 'work';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  verificationUrl?: string;
  image?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Icon name
}