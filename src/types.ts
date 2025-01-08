import { LucideIcon } from 'lucide-react';

export interface Option {
  id: string;
  label: string;
  icon: LucideIcon;
  cost?: number;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  options: Option[];
}

export type Selections = {
  [key: number]: string;
}

// constants.ts
import {
  // Monitor,
  // Smartphone,
  // Screens,
  // UserCircle2,
  // CreditCard,
  // PaintBucket,
  // Database,
  // Shield,
  // Puzzle,
  Building2,
  Gauge,
  GraduationCap,
  Dumbbell,
  ShoppingCart,
  Landmark,
  Home,
  Briefcase,
  Fuel,
  MessageCircle,
} from "lucide-react";

export const steps: Step[] = [
  {
    id: 1,
    title: 'Industry',
    description: 'Select your industry',
    options: [
      { id: 'it', label: 'Information Technology', icon: Gauge },
      { id: 'healthcare', label: 'Healthcare', icon: Building2 },
      { id: 'education', label: 'Education', icon: GraduationCap },
      { id: 'fitness', label: 'Fitness', icon: Dumbbell },
      { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingCart },
      { id: 'finance', label: 'Financial Services', icon: Landmark },
      { id: 'realestate', label: 'Real Estate', icon: Home },
      { id: 'business', label: 'Business', icon: Briefcase },
      { id: 'oil', label: 'Oil & Natural Gas', icon: Fuel },
      { id: 'social', label: 'Social Media App', icon: MessageCircle },
    ]
  },
  // ... other steps remain the same
];