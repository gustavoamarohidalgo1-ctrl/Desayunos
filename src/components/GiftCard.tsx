'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, Send } from 'lucide-react';

const GiftCard = () => {
  return (
    <section className="py-24 bg-secondary overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border-8 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="glass bg-white/5 border-white/10 p-12 md:p-20 rounded-[4rem] flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative group">
              {/* Virtual Gift Card Mockup */}
              <div className="w-full h-64 md:h-80 bg-gradient-to-br from-primary to-primary-hover rounded-[2rem] p-8 text-secondary shadow-2xl transform transition-transform group-hover:rotate-2 group-hover:scale-105">
                <div className="flex justify-between items-start mb-12">
                  <Gift size={40} />
                  <span className="font-outfit font-bold tracking-widest uppercase">Gift Card</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 serif italic">El Regalo Perfecto</h3>
                <div className="flex justify-between items-end">
                  <p className="text-sm font-medium">Válido en todo el menú</p>
                  <p className="text-2xl font-bold font-outfit">VALOR LIBRE</p>
                </div>
              </div>
              {/* Floating hearts */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 text-primary"
              >
                <Heart size={48} fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Regala un <br /><span className="serif italic text-primary">Amanecer Inolvidable</span></h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              ¿No sabes qué elegir? Deja que ellos decidan. Nuestras tarjetas de regalo digitales son perfectas para cumpleaños, aniversarios o simplemente para decir "gracias".
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <Send size={20} className="text-primary" />
                <span>Envío instantáneo por email o WhatsApp</span>
              </li>
              <li className="flex items-center gap-3">
                <Send size={20} className="text-primary" />
                <span>Sin fecha de vencimiento</span>
              </li>
              <li className="flex items-center gap-3">
                <Send size={20} className="text-primary" />
                <span>Personalizable con tu propio mensaje</span>
              </li>
            </ul>
            <button className="btn btn-primary px-12 py-5 text-lg">Comprar Tarjeta de Regalo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCard;
