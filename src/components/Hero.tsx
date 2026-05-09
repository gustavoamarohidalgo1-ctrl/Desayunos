'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        style={{ y: y1 }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/hero.png" 
          alt="Desayuno Gourmet" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/40 backdrop-blur-[2px]"></div>
      </motion.div>

      <div className="container relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
          >
            {t('heroTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl font-light"
          >
            {t('heroSubtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-6"
          >
            <a href="#menu" className="btn btn-primary px-10 py-5 text-lg">
              {t('menuTitle')}
            </a>
          </motion.div>
        </div>
      
      {/* Floating Elements */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="glass p-4 rounded-2xl flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
            ⭐
          </div>
          <div>
            <p className="font-bold text-sm">4.9/5 Estrellas</p>
            <p className="text-xs text-text-light">Más de 500 clientes felices</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
