'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

interface ProductModalProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: any) => void;
}

const ProductModal = ({ product, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  if (!product) return null;

  const ingredients = [
    "Ingredientes locales premium",
    "Preparación artesanal diaria",
    "Sin conservantes artificiales",
    "Empaque 100% biodegradable"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="fixed inset-4 md:inset-auto md:w-full md:max-w-4xl md:h-auto max-h-[90vh] bg-background z-[101] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 z-[102] p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-all text-white md:text-secondary md:bg-gray-100 md:hover:bg-gray-200"
            >
              <X size={24} />
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-full">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Detalle del Producto</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h2>
              <p className="text-primary font-bold text-2xl mb-6">{product.price}</p>
              
              <p className="text-text-light mb-8 leading-relaxed">
                {product.description} Nuestra caja {product.name} está diseñada para brindar una explosión de sabores equilibrados y frescos en tu paladar.
              </p>

              <div className="space-y-3 mb-10">
                {ingredients.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-text-light">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Reviews Section */}
              <div className="border-t pt-8 mb-10">
                <h4 className="font-bold mb-6 flex items-center gap-2">Reseñas del Producto <span className="text-primary text-sm">(3)</span></h4>
                <div className="space-y-6">
                  {[
                    { name: "Lucía F.", text: "Simplemente delicioso. La presentación es de 10.", stars: 5 },
                    { name: "Marcos G.", text: "El pan estaba increíblemente fresco.", stars: 5 }
                  ].map((r, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-2xl">
                      <div className="flex text-primary mb-2 scale-75 origin-left">
                        {[...Array(r.stars)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        ))}
                      </div>
                      <p className="text-sm text-text-light italic mb-2">"{r.text}"</p>
                      <p className="text-xs font-bold">{r.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Products */}
              <div className="border-t pt-8 mb-10">
                <h4 className="font-bold mb-6">También te puede gustar</h4>
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                  {[
                    { name: "Café de Altura", price: "$5.00", img: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=200&auto=format&fit=crop" },
                    { name: "Zumo Natural", price: "$4.00", img: "https://images.unsplash.com/photo-1613478223719-2ab3026248a4?q=80&w=200&auto=format&fit=crop" }
                  ].map((p, i) => (
                    <div key={i} className="min-w-[140px] group cursor-pointer">
                      <div className="h-32 rounded-2xl overflow-hidden mb-2">
                        <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <p className="text-xs font-bold truncate">{p.name}</p>
                      <p className="text-xs text-primary font-bold">{p.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto sticky bottom-0 pt-6 bg-background">
                <button 
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="w-full btn btn-primary py-4 text-lg shadow-xl shadow-primary/20"
                >
                  Añadir al Pedido
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
