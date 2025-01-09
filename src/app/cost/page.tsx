'use client'

import React, { useEffect, useState } from 'react';
import {
  Building2,
  ArrowRight,
  ArrowLeft,
  MonitorSmartphone,
  Smartphone,
  Monitor,
  Users,
  CreditCard,
  PaintBucket,
  Database,
  Shield,
  Puzzle,
  Settings,
  Check,
  GraduationCap,
  Dumbbell,
  ShoppingCart,
  Landmark,
  Home,
  Briefcase,
  Fuel,
  MessageCircle,
  Fingerprint,
  Cloud,
  Bell,
  Gauge
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { motion } from 'framer-motion';
import { CostEstimate } from '@/types';

const cn = (...inputs: unknown[]) => {
  return twMerge(clsx(inputs));
};

interface Option {
  id: string;
  label: string;
  icon: React.ElementType;
  description?: string;
}

interface CostResult {
  isLoading: boolean;
  data?: CostEstimate;
  error?: string;
}

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  options: Option[];
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Industry',
    description: 'Select your industry',
    icon: Building2,
    options: [
      { id: 'it', label: 'Information Technology', icon: Settings },
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
    description: 'Choose your platform',
    icon: MonitorSmartphone,
    options: [
      { id: 'web', label: 'Web Application', icon: Monitor },
      { id: 'mobile', label: 'Mobile Application', icon: Smartphone },
      { id: 'both', label: 'Both Platforms', icon: MonitorSmartphone },
    ]
  },
  {
    id: 3,
    title: 'Users',
    description: 'User management',
    icon: Users,
    options: [
      { id: 'basic', label: 'Basic Auth', icon: Users },
      { id: 'social', label: 'Social Login', icon: MessageCircle },
      { id: 'biometric', label: 'Biometric Auth', icon: Fingerprint },
      { id: 'sso', label: 'Enterprise SSO', icon: Building2 },
    ]
  },
  {
    id: 4,
    title: '3rd Party',
    description: 'Integrations',
    icon: CreditCard,
    options: [
      { id: 'payment', label: 'Payment Gateway', icon: CreditCard },
      { id: 'cloud', label: 'Cloud Services', icon: Cloud },
      { id: 'notification', label: 'Push Notifications', icon: Bell },
      { id: 'analytics', label: 'Analytics', icon: Gauge },
    ]
  },
  {
    id: 5,
    title: 'UI Design',
    description: 'Visual style',
    icon: PaintBucket,
    options: [
      { id: 'basic', label: 'Basic UI', icon: PaintBucket },
      { id: 'custom', label: 'Custom Design', icon: PaintBucket },
      { id: 'premium', label: 'Premium UI', icon: PaintBucket },
    ]
  },
  {
    id: 6,
    title: 'Database',
    description: 'Data storage',
    icon: Database,
    options: [
      { id: 'sql', label: 'SQL Database', icon: Database },
      { id: 'nosql', label: 'NoSQL Database', icon: Database },
      { id: 'hybrid', label: 'Hybrid Solution', icon: Database },
    ]
  },
  {
    id: 7,
    title: 'Security',
    description: 'Security features',
    icon: Shield,
    options: [
      { id: 'basic', label: 'Standard Security', icon: Shield },
      { id: 'advanced', label: 'Advanced Security', icon: Shield },
      { id: 'enterprise', label: 'Enterprise Grade', icon: Shield },
    ]
  },
  {
    id: 8,
    title: 'Features',
    description: 'Additional features',
    icon: Puzzle,
    options: [
      { id: 'basic', label: 'Essential Features', icon: Puzzle },
      { id: 'advanced', label: 'Advanced Features', icon: Puzzle },
      { id: 'custom', label: 'Custom Features', icon: Puzzle },
    ]
  },
];

const CostCalculator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [, setCostResult] = useState<CostResult>({
    isLoading: false
  });

  const calculateCost = async () => {
    if (Object.keys(selections).length !== steps.length) return;

    setCostResult({ isLoading: true });

    const prompt = {
      industry: selections[1],
      platform: selections[2],
      users: selections[3],
      thirdParty: selections[4],
      uiDesign: selections[5],
      database: selections[6],
      security: selections[7],
      features: selections[8]
    }

    try {
      const response = await fetch('/api/calculate-cost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) {
        throw new Error('Failed to calculate cost');
      }

      const data = await response.json();
      setCostResult({ isLoading: false, data });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setCostResult({
        isLoading: false,
        error: 'Error calculating cost. Please try again.'
      });
    }
  };

  useEffect(() => {
    if (currentStep === steps.length && Object.keys(selections).length === steps.length) {
      calculateCost();
    }
  }, [currentStep, selections]);

  const handleSelection = (stepId: number, optionId: string) => {
    setSelections(prev => ({
      ...prev,
      [stepId]: optionId
    }));
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  return (
    <div className="h-screen bg-[#0F172A] flex overflow-hidden">
      {/* Vertical Steps */}
      <div className="w-[320px] h-full border-r border-gray-800">
        <div className="h-full overflow-y-auto hide-scrollbar py-6 px-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isCompleted = currentStep > step.id;
            const isActive = currentStep === step.id;

            return (
              <div key={step.id} className="relative">
                <motion.div
                  initial={false}
                  animate={{ x: isActive ? 8 : 0 }}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl transition-all duration-300 mb-2",
                    isActive && "bg-blue-500/10"
                  )}
                >
                  <div className="relative">
                    <motion.div
                      initial={false}
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        transition: { type: "spring", stiffness: 500, damping: 30 }
                      }}
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                        isCompleted ? "bg-green-500" :
                          isActive ? "bg-blue-500" :
                            "bg-gray-700"
                      )}
                    >
                      {isCompleted ? (
                        <Check className="w-6 h-6 text-white" />
                      ) : (
                        <IconComponent className={cn(
                          "w-6 h-6",
                          isActive ? "text-white" : "text-gray-400"
                        )} />
                      )}
                    </motion.div>

                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-1/2 top-12 bottom-0 w-0.5 -ml-[1px] bg-gray-700">
                        <motion.div
                          initial={false}
                          animate={{
                            height: isCompleted ? "100%" : "0%"
                          }}
                          className="w-full bg-green-500 transition-all duration-500"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className={cn(
                      "font-medium transition-colors duration-300",
                      isActive ? "text-blue-400" :
                        isCompleted ? "text-green-400" :
                          "text-gray-400"
                    )}>
                      {step.title}
                    </h3>
                    <p className={cn(
                      "text-sm",
                      isActive ? "text-blue-300" : "text-gray-500"
                    )}>
                      {step.description}
                    </p>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 rounded-full bg-blue-400"
                    />
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full">
        <div className="flex-1 p-8 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              {steps[currentStep - 1].title}
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              {steps[currentStep - 1].description}
            </p>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {steps[currentStep - 1].options.map((option) => {
                const IconComponent = option.icon;
                const isSelected = selections[currentStep] === option.id;

                return (
                  <motion.button
                    key={option.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    onClick={() => handleSelection(currentStep, option.id)}
                    className={cn(
                      "flex flex-col items-center p-6 rounded-xl border transition-all duration-300",
                      "hover:border-blue-500 hover:bg-blue-500/5",
                      "group relative overflow-hidden",
                      isSelected
                        ? "border-blue-500 bg-blue-500/10 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]"
                        : "border-blue-900/30 bg-blue-950/30"
                    )}
                  >
                    <div className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center mb-4",
                      "transition-all duration-300 group-hover:scale-110",
                      isSelected ? "bg-blue-500 text-white" : "bg-blue-900/30 text-blue-400"
                    )}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className={cn(
                      "text-lg font-semibold mb-1 transition-colors duration-300",
                      isSelected ? "text-white" : "text-gray-300"
                    )}>
                      {option.label}
                    </h3>
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="p-8 border-t border-gray-800">
          <div className="flex justify-between max-w-md mx-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
              className={cn(
                "px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-all duration-300",
                currentStep === 1
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
              )}
            >
              <ArrowLeft className="w-5 h-5" />
              Previous
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCurrentStep(prev => Math.min(steps.length, prev + 1))}
              disabled={currentStep === steps.length || !selections[currentStep]}
              className={cn(
                "px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-all duration-300",
                currentStep === steps.length || !selections[currentStep]
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              )}
            >
              Continue
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CostCalculator;