'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Package, ArrowRight, Home } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderNumber: string;
}

const SuccessModal = ({ isOpen, onClose, orderNumber }: SuccessModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-secondary/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-[3rem] p-8 md:p-12 max-w-lg w-full relative z-10 text-center shadow-2xl overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, delay: 0.2 }}
              className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/30"
            >
              <CheckCircle size={48} className="text-secondary" />
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-4">¡Todo Listo!</h2>
            <p className="text-text-light mb-8">
              Tu pedido ha sido recibido y nuestros chefs ya están seleccionando los mejores ingredientes para tu desayuno.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-widest text-text-light mb-2">Número de Pedido</p>
              <p className="text-2xl font-mono font-bold text-secondary">{orderNumber}</p>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={onClose}
                className="btn btn-primary w-full py-4 flex items-center justify-center gap-2 group"
              >
                Seguir mi Pedido <Package size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={onClose}
                className="flex items-center justify-center gap-2 text-text-light hover:text-secondary transition-colors w-full py-2 text-sm font-medium"
              >
                <Home size={18} /> Volver al Inicio
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-text-light">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Recibirás un email de confirmación en unos minutos.
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
