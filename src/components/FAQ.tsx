'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Con cuánta anticipación debo hacer mi pedido?",
    answer: "Recomendamos hacer tu pedido con al menos 24 horas de anticipación para asegurar la disponibilidad de todos nuestros ingredientes frescos."
  },
  {
    question: "¿Tienen opciones para personas con alergias?",
    answer: "Sí, contamos con opciones sin gluten, veganas y libres de frutos secos. Puedes especificar tus alergias en el campo de mensaje de regalo o contactarnos por WhatsApp."
  },
  {
    question: "¿A qué zonas realizan entregas?",
    answer: "Realizamos entregas en toda el área metropolitana y zonas aledañas. Puedes verificar tu dirección exacta en el carrito al momento de la compra."
  },
  {
    question: "¿Puedo personalizar el contenido de una caja?",
    answer: "¡Por supuesto! Si deseas hacer un cambio específico, contáctanos por WhatsApp y armaremos una caja a tu medida."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Preguntas <span className="serif italic text-primary">Frecuentes</span></h2>
          <p className="text-text-light">Todo lo que necesitas saber para empezar tu mañana de la mejor manera.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left bg-white hover:bg-background/50 transition-colors"
              >
                <span className="text-xl font-bold text-secondary">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-primary" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-8 pt-0 text-text-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
