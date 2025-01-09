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

export interface Selection {
  industry: string;
  platform: string;
  users: string;
  thirdParty: string;
  uiDesign: string;
  database: string;
  security: string;
  features: string;
}

export interface CostEstimate {
  basePrice: number;
  features: {
    name: string;
    cost: number;
  }[];
  totalCost: number;
  timeEstimate: string;
}