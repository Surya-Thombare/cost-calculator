// constants.ts
import {
  Monitor,
  Smartphone,
  // Screens,
  UserCircle2,
  CreditCard,
  PaintBucket,
  Database,
  // Shield,
  Puzzle,
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
  ShieldCheck,
} from "lucide-react";
import { Step } from "./types";

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
  {
    id: 2,
    title: 'Platform',
    description: 'Select your platform',
    options: [
      { id: 'web', label: 'Web Application', icon: Monitor },
      { id: 'mobile', label: 'Mobile Application', icon: Smartphone },
      { id: 'both', label: 'Both Platforms', icon: Home },
    ]
  },
  {
    id: 3,
    title: 'Authentication',
    description: 'User management & security',
    options: [
      { id: 'none', label: 'No Authentication', icon: UserCircle2 },
      { id: 'email', label: 'Email & Password', icon: ShieldCheck },
      { id: 'social', label: 'Social Login', icon: UserCircle2 },
      { id: 'sso', label: 'Enterprise SSO', icon: Building2 },
    ]
  },
  {
    id: 4,
    title: 'Integrations',
    description: 'Third-party services',
    options: [
      { id: 'payment', label: 'Payment Gateway', icon: CreditCard },
      { id: 'analytics', label: 'Analytics', icon: Gauge },
      { id: 'crm', label: 'CRM Integration', icon: UserCircle2 },
      { id: 'marketing', label: 'Marketing Tools', icon: MessageCircle },
    ]
  },
  {
    id: 5,
    title: 'UI Design',
    description: 'Visual appearance',
    options: [
      { id: 'basic', label: 'Basic UI', icon: PaintBucket },
      { id: 'custom', label: 'Custom Design', icon: PaintBucket },
      { id: 'premium', label: 'Premium UI', icon: PaintBucket },
    ]
  },
  {
    id: 6,
    title: 'Database',
    description: 'Data storage solution',
    options: [
      { id: 'sql', label: 'SQL Database', icon: Database },
      { id: 'nosql', label: 'NoSQL Database', icon: Database },
      { id: 'both', label: 'Hybrid Solution', icon: Database },
    ]
  },
  {
    id: 7,
    title: 'Security',
    description: 'Security features',
    options: [
      { id: 'basic', label: 'Standard Security', icon: ShieldCheck },
      { id: 'advanced', label: 'Advanced Security', icon: ShieldCheck },
      { id: 'enterprise', label: 'Enterprise Grade', icon: ShieldCheck },
    ]
  },
  {
    id: 8,
    title: 'Features',
    description: 'Additional features',
    options: [
      { id: 'basic', label: 'Essential Features', icon: Puzzle },
      { id: 'advanced', label: 'Advanced Features', icon: Puzzle },
      { id: 'custom', label: 'Custom Features', icon: Puzzle },
    ]
  },
  {
    id: 8,
    title: 'Features',
    description: 'Additional features',
    options: [
      { id: 'basic', label: 'Essential Features', icon: Puzzle },
      { id: 'advanced', label: 'Advanced Features', icon: Puzzle },
      { id: 'custom', label: 'Custom Features', icon: Puzzle },
    ]
  }
  // ... other steps remain the same
];