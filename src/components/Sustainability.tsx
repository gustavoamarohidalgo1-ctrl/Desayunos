'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, MapPin, Globe } from 'lucide-react';

const Sustainability = () => {
  return (
    <section className="py-32 bg-primary/5 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl mb-8 font-bold">Mañanas <span className="serif italic text-secondary">Sostenibles</span></h2>
            <p className="text-text-light text-lg mb-12 leading-relaxed">
              En Desayunos Gourmet, creemos que el sabor extraordinario no debe costar el planeta. Nos comprometemos con prácticas que cuidan nuestra tierra y apoyan a nuestra comunidad.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm shrink-0">
                  <Recycle size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Empaque Eco</h4>
                  <p className="text-xs text-text-light">100% biodegradable y compostable. Sin plásticos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Km 0</h4>
                  <p className="text-xs text-text-light">Apoyamos a agricultores locales de nuestra región.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm shrink-0">
                  <Leaf size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Orgánico</h4>
                  <p className="text-xs text-text-light">Ingredientes libres de pesticidas y químicos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Huella de Carbono</h4>
                  <p className="text-xs text-text-light">Repartos optimizados para reducir emisiones.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative">
              <img 
                src="/images/sustainability.png" 
                alt="Sostenibilidad" 
                className="rounded-[3rem] shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold text-secondary mb-1">95%</p>
                <p className="text-sm font-medium text-text-light">Menos Plástico</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
