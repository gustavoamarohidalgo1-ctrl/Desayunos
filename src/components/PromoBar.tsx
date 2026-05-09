'use client';
import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PromoBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: -50 }}
          className="fixed top-0 left-0 w-full bg-secondary text-white py-2 z-[100] flex justify-center items-center gap-4 px-4"
        >
          <div className="flex items-center gap-2 text-sm md:text-base font-medium">
            <Sparkles className="text-primary" size={16} />
            <span>Usa el código <span className="text-primary font-bold">DESAYUNO10</span> para un 10% de descuento</span>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromoBar;
