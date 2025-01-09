// src/app/components/ResultModal.tsx
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  cost: string;
}

const ResultModal: React.FC<ResultModalProps> = ({ isOpen, onClose, cost }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#1E293B] text-white border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Project Cost Estimate</DialogTitle>
        </DialogHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="p-6 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <h3 className="text-3xl font-bold text-blue-400 mb-2">
              Estimated Cost
            </h3>
            <p className="text-5xl font-bold text-white">
              {cost}
            </p>
          </div>

          <div className="text-gray-300">
            <p>This estimate includes:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Complete project development</li>
              <li>All selected features and integrations</li>
              <li>Testing and deployment</li>
              <li>Basic maintenance period</li>
            </ul>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
            <p className="text-yellow-300 text-sm">
              Note: This is an initial estimate. Final costs may vary based on detailed requirements.
            </p>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ResultModal;