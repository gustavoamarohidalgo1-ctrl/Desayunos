'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal = ({ isOpen, onClose }: NewsletterModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white z-[201] p-10 rounded-[2.5rem] shadow-2xl text-center"
          >
            <div className="w-20 h-20 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4">¡Ya eres del Club!</h3>
            <p className="text-text-light mb-8">Gracias por unirte. Revisa tu correo para obtener tu cupón de bienvenida del 10%.</p>
            <button 
              onClick={onClose}
              className="w-full btn btn-primary"
            >
              ¡Genial!
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NewsletterModal;
