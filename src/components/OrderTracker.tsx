'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Package, Utensils, Bike, CheckCircle, Clock } from 'lucide-react';

const steps = [
  { id: 1, title: "Pedido Recibido", icon: Package, time: "Hace 2 min" },
  { id: 2, title: "En Preparación", icon: Utensils, time: "En curso" },
  { id: 3, title: "En Camino", icon: Bike, time: "Programado" },
  { id: 4, title: "Entregado", icon: CheckCircle, time: "Pendiente" }
];

const OrderTracker = () => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 text-center md:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Estado de tu Desayuno</p>
              <h2 className="text-3xl md:text-4xl font-bold">Rastreador en Tiempo Real</h2>
            </div>
            <div className="bg-primary/10 px-6 py-3 rounded-2xl flex items-center gap-3">
              <Clock size={20} className="text-primary animate-pulse" />
              <span className="font-bold text-secondary">Entrega estimada: 08:30 AM</span>
            </div>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden md:block"></div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 hidden md:block transition-all duration-1000"
            ></motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = step.id <= currentStep;
                const isCurrent = step.id === currentStep;

                return (
                  <div key={step.id} className="flex flex-col items-center">
                    <motion.div
                      animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 border-4 transition-colors duration-500 ${
                        isActive ? "bg-primary border-primary text-secondary" : "bg-white border-gray-100 text-gray-300"
                      }`}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <h3 className={`font-bold text-sm mb-1 ${isActive ? "text-secondary" : "text-gray-400"}`}>
                      {step.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-tighter text-text-light font-medium">
                      {step.time}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-secondary rounded-2xl text-white flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <Bike size={32} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-primary font-bold text-sm mb-1">Nota del Repartidor</p>
              <p className="text-white/70 text-sm italic">"Estoy preparando la ruta más rápida para que tu café llegue bien caliente. ¡Nos vemos pronto!" - Juan P.</p>
            </div>
            <button className="btn btn-primary px-8">Llamar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTracker;
