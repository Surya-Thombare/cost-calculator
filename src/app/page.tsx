// src/app/page.tsx
'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Calculator,
  Clock,
  Code2,
  DollarSign,
  LineChart,
  MessagesSquare,
  MousePointerClick,
  Settings,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Header from '@/components/Header';

const features = [
  {
    icon: Calculator,
    title: 'Accurate Estimates',
    description: 'Get detailed cost breakdowns based on your specific requirements'
  },
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Quick and easy process to get instant project estimates'
  },
  {
    icon: LineChart,
    title: 'Market Insights',
    description: 'Estimates based on current market rates and industry standards'
  },
  {
    icon: Settings,
    title: 'Customizable Options',
    description: 'Tailor the estimate to your exact project needs'
  }
];

const benefits = [
  {
    icon: Code2,
    title: 'Technology Stack',
    description: 'Choose from various tech stacks and platforms'
  },
  {
    icon: DollarSign,
    title: 'Budget Planning',
    description: 'Plan your budget with confidence using accurate estimates'
  },
  {
    icon: MessagesSquare,
    title: 'Detailed Breakdown',
    description: 'Get comprehensive breakdown of all cost components'
  },
  {
    icon: Sparkles,
    title: 'Feature Selection',
    description: 'Pick and choose features that matter to your project'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white">

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Calculate Your App Development Cost
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get instant, accurate cost estimates for your app development project.
              Our smart calculator considers all aspects of development to provide you with detailed pricing.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/cost">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold flex items-center gap-2 group"
                >
                  Start Calculating
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-semibold"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Why Use Our Calculator?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our smart calculator provides accurate estimates based on real market data and industry expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get your project estimate in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MousePointerClick,
                title: '1. Select Features',
                description: 'Choose the features and requirements for your app'
              },
              {
                icon: Settings,
                title: '2. Customize Options',
                description: 'Fine-tune your selections to match your needs'
              },
              {
                icon: Calculator,
                title: '3. Get Estimate',
                description: 'Receive detailed cost breakdown instantly'
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-gray-700/50"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Ready to Calculate Your App Cost?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get started now and receive a detailed estimate for your project
            </p>
            <Link href="/cost">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold flex items-center gap-2 mx-auto group"
              >
                Start Your Calculation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}