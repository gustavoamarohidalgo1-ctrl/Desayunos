'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: -0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/about-us.png" 
                alt="Nuestra cocina" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary rounded-full z-0"></div>
            <div className="absolute -top-10 -right-10 w-60 h-60 border-2 border-primary/20 rounded-full z-0"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Nuestra Historia</span>
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
              Cocinamos con <br />
              <span className="serif italic text-primary">Tradición & Pasión</span>
            </h2>
            <p className="text-text-light text-lg mb-8 leading-relaxed">
              Desayunos Gourmet nació de la idea de que el desayuno no es solo la primera comida del día, sino el momento más importante para conectar y empezar con energía. 
            </p>
            <p className="text-text-light text-lg mb-10 leading-relaxed">
              Utilizamos recetas heredadas combinadas con técnicas modernas para crear cajas que son verdaderas obras de arte comestibles. Cada croissant, cada fruta y cada grano de café ha sido seleccionado personalmente por nuestros maestros artesanos.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-3xl font-bold text-secondary mb-2">100%</h4>
                <p className="text-sm text-text-light">Ingredientes Naturales</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-secondary mb-2">10k+</h4>
                <p className="text-sm text-text-light">Mañanas Alegres</p>
              </div>
            </div>

            <button className="btn btn-outline">Conoce al Equipo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
