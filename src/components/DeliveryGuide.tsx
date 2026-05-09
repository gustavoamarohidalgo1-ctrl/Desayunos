'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBasket, ChefHat, Truck, Home } from 'lucide-react';

const steps = [
  {
    icon: <ShoppingBasket size={32} />,
    title: "Tú Eliges",
    desc: "Selecciona tu caja favorita y personalízala a tu gusto."
  },
  {
    icon: <ChefHat size={32} />,
    title: "Nosotros Creamos",
    desc: "Preparamos todo con ingredientes frescos la mañana de entrega."
  },
  {
    icon: <Truck size={32} />,
    title: "Envío Especial",
    desc: "Nuestros repartidores cuidan cada detalle en el camino."
  },
  {
    icon: <Home size={32} />,
    title: "¡A Disfrutar!",
    desc: "Recibe tu desayuno listo para disfrutar sin salir de casa."
  }
];

const DeliveryGuide = () => {
  return (
    <section className="py-32 bg-background/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-4">¿Cómo <span className="serif italic text-primary">Funciona</span>?</h2>
          <p className="text-text-light">Tu mañana perfecta en cuatro simples pasos.</p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden lg:block z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-primary mb-8 group hover:bg-primary hover:text-secondary transition-all duration-500">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-text-light leading-relaxed px-4">{step.desc}</p>
                
                {/* Step Number */}
                <span className="absolute -top-4 -right-4 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold border-4 border-white">
                  {i + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryGuide;
