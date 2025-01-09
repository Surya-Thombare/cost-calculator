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
  Gauge,
  ChevronRight,
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const cn = (...inputs: unknown[]) => {
  return twMerge(clsx(inputs));
};

interface Option {
  id: string;
  label: string;
  icon: React.ElementType;
  description?: string;
}

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  options: Option[];
  isMultiSelect?: boolean;
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
    description: 'Integrations (Select multiple)',
    icon: CreditCard,
    isMultiSelect: true,
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
    description: 'Additional features (Select multiple)',
    icon: Puzzle,
    isMultiSelect: true,
    options: [
      { id: 'basic', label: 'Essential Features', icon: Puzzle },
      { id: 'advanced', label: 'Advanced Features', icon: Puzzle },
      { id: 'custom', label: 'Custom Features', icon: Puzzle },
    ]
  }
];

export default function Page() {
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [selections, setSelections] = useState<Record<number, string | string[]>>({});
  const [showResult, setShowResult] = useState(false);
  const [estimatedCost, setEstimatedCost] = useState<string>('');

  useEffect(() => {
    setCurrentStep(1);
  }, []);


  const handleSelection = (stepId: number, optionId: string) => {
    setSelections(prev => {
      const step = steps[stepId - 1];

      if (step.isMultiSelect) {
        const currentSelections = Array.isArray(prev[stepId]) ? prev[stepId] as string[] : [];
        const newSelections = currentSelections.includes(optionId)
          ? currentSelections.filter(id => id !== optionId)
          : [...currentSelections, optionId];

        return {
          ...prev,
          [stepId]: newSelections
        };
      }

      return {
        ...prev,
        [stepId]: optionId
      };
    });

    if (currentStep && !steps[currentStep - 1].isMultiSelect && currentStep < steps.length) {
      setCurrentStep(prev => prev ? prev + 1 : 1);
    }
  };

  const calculateCost = async () => {
    try {
      setShowResult(false);

      const response = await fetch('/api/calculate-cost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: {
            industry: selections[1],
            platform: selections[2],
            users: selections[3],
            thirdParty: Array.isArray(selections[4]) ? selections[4] : [selections[4]],
            uiDesign: selections[5],
            database: selections[6],
            security: selections[7],
            features: Array.isArray(selections[8]) ? selections[8] : [selections[8]]
          }
        })
      });

      if (!response.ok) throw new Error('Failed to calculate cost');

      const data = await response.json();
      setEstimatedCost(data.text.content);
      console.log('AI response', data.text.content)
      setShowResult(true);
    } catch (error) {
      console.error('Error calculating cost:', error);
    }
  };

  useEffect(() => {
    if (currentStep === steps.length && Object.keys(selections).length === steps.length) {
      calculateCost();
    }
  }, [currentStep, selections]);

  const canProgress = () => {
    const currentSelection = currentStep && selections[currentStep];
    return currentStep && steps[currentStep - 1].isMultiSelect
      ? Array.isArray(currentSelection) && currentSelection.length > 0
      : !!currentSelection;
  };

  return (
    <div className="h-screen bg-[#0F172A] flex overflow-hidden">

      {currentStep !== null ? (
        <>
          {/* Steps Sidebar */}
          <div className="w-[320px] h-full border-r border-gray-800">
            <div className="h-full overflow-y-auto hide-scrollbar py-6 px-4">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isCompleted = currentStep > step.id;
                const isActive = currentStep === step.id;
                const hasSelections = step.isMultiSelect
                  ? (selections[step.id] as string[] || []).length > 0
                  : !!selections[step.id];

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
                            isCompleted && hasSelections ? "bg-green-500" :
                              isActive ? "bg-blue-500" :
                                "bg-gray-700"
                          )}
                        >
                          {isCompleted && hasSelections ? (
                            <Check className="w-6 h-6 text-white" />
                          ) : (
                            <IconComponent className={cn(
                              "w-6 h-6",
                              isActive ? "text-white" : "text-gray-400"
                            )} />
                          )}
                        </motion.div>

                        {index < steps.length - 1 && (
                          <div className="absolute left-1/2 top-12 bottom-0 w-0.5 -ml-[1px] bg-gray-700">
                            <motion.div
                              initial={false}
                              animate={{
                                height: isCompleted && hasSelections ? "100%" : "0%"
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
                            isCompleted && hasSelections ? "text-green-400" :
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

                      {isActive && (
                        <ChevronRight className="w-5 h-5 text-blue-400" />
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col h-full">
            <div className="flex-1 p-8 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
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
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                      }
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    {steps[currentStep - 1].options.map((option) => {
                      const IconComponent = option.icon;
                      const step = steps[currentStep - 1];
                      const currentSelections = step.isMultiSelect
                        ? (selections[currentStep] as string[] || [])
                        : [selections[currentStep]];
                      const isSelected = currentSelections.includes(option.id);

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
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="p-8 border-t border-gray-800">
              <div className="flex justify-between max-w-md mx-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentStep((prev) => prev ? Math.max(1, prev - 1) : 1)}
                  disabled={currentStep === 1}
                  className={
                    cn(
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
                  onClick={() => {
                    if (currentStep === steps.length) {
                      calculateCost();
                    } else {
                      setCurrentStep(prev => prev ? Math.min(steps.length, prev + 1) : 1);
                    }
                  }}
                  disabled={!canProgress()}
                  className={cn(
                    "px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-all duration-300",
                    !canProgress()
                      ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  )}
                >
                  {currentStep === steps.length ? 'Calculate Cost' : 'Continue'}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Result Modal */}
          <Dialog open={showResult} onOpenChange={setShowResult}>
            <DialogContent className="bg-[#1E293B] border-gray-800 text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white">
                  Estimated Project Cost
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">
                    Estimated Cost
                  </h3>
                  <p className="text-4xl font-bold text-white">
                    {estimatedCost}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Selected Features
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(selections).map(([stepId, selection]) => {
                        const step = steps[Number(stepId) - 1];
                        return (
                          <div key={stepId} className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                              <step.icon className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-300">{step.title}</p>
                              <p className="text-sm text-gray-400">
                                {Array.isArray(selection)
                                  ? selection.map(id => step.options.find(opt => opt.id === id)?.label).join(', ')
                                  : step.options.find(opt => opt.id === selection)?.label}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                    <p className="text-sm text-yellow-300">
                      Note: This is an initial estimate. Final costs may vary based on detailed requirements and specifications.
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

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
        </>
      ) : (
        <>
        </>
      )
      }


    </div>
  );
}