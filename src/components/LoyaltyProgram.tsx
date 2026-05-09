'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Award, Star } from 'lucide-react';

const LoyaltyProgram = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-secondary to-[#2C1810] rounded-[3rem] p-12 text-white relative overflow-hidden">
          {/* Background icons */}
          <div className="absolute top-0 right-0 p-20 opacity-10 rotate-12">
            <Coffee size={200} />
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Star size={20} fill="currentColor" />
                <span className="font-bold uppercase tracking-widest text-sm">Programa de Lealtad</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Acumula <span className="serif italic text-primary">Granos de Oro</span></h2>
              <p className="text-white/70 mb-8 text-lg">
                Por cada compra ganas 1 "Grano de Oro" por cada $1 gastado. Canjea tus granos por desayunos gratis, envíos express o regalos exclusivos.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="bg-white/10 px-6 py-4 rounded-2xl border border-white/10">
                  <p className="text-2xl font-bold text-primary">500</p>
                  <p className="text-xs text-white/50">Granos = 1 Caja Gratis</p>
                </div>
                <div className="bg-white/10 px-6 py-4 rounded-2xl border border-white/10">
                  <p className="text-2xl font-bold text-primary">2x1</p>
                  <p className="text-xs text-white/50">En tu mes de cumpleaños</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-secondary shadow-[0_0_50px_rgba(255,215,0,0.3)]">
                <Award size={64} />
              </div>
              <button className="btn bg-white text-secondary hover:bg-primary transition-all">Unirme al Club de Oro</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyProgram;
