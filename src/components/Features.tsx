'use client';
import React from 'react';
import { Truck, Clock, Coffee, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Truck className="text-primary" size={32} />,
    title: "Entrega Express",
    desc: "En tu puerta en menos de 45 minutos."
  },
  {
    icon: <Clock className="text-primary" size={32} />,
    title: "Siempre Fresco",
    desc: "Preparado al momento de tu orden."
  },
  {
    icon: <Coffee className="text-primary" size={32} />,
    title: "Café de Origen",
    desc: "Granos seleccionados de altura."
  },
  {
    icon: <Heart className="text-primary" size={32} />,
    title: "Hecho con Amor",
    desc: "Pasión en cada ingrediente."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-background transition-colors duration-500"
            >
              <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-text-light text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
