export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  duration: string;
  category: string;
}

export interface PricingItem {
  name: string;
  price: number;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}
