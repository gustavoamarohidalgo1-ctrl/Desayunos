'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Percent, Coffee, Crown } from 'lucide-react';

const plans = [
  {
    icon: <Calendar className="text-primary" size={32} />,
    title: "Semanal",
    price: "$80/mes",
    desc: "1 desayuno premium cada lunes para empezar la semana con fuerza.",
    features: ["Envío gratis", "Café de regalo", "Cancela cuando quieras"]
  },
  {
    icon: <Crown className="text-secondary" size={32} />,
    title: "VIP Gold",
    price: "$150/mes",
    desc: "2 desayunos completos a la semana (lunes y viernes) + sorpresas.",
    features: ["Prioridad de entrega", "Caja personalizada", "Acceso a menú secreto"],
    highlight: true
  },
  {
    icon: <Percent className="text-primary" size={32} />,
    title: "A Tu Aire",
    price: "Desde $40/mes",
    desc: "Crédito mensual para usar cuando quieras con un 15% de descuento.",
    features: ["Descuento fijo", "Válido 60 días", "Regalo de bienvenida"]
  }
];

const Membership = () => {
  return (
    <section id="suscripciones" className="py-32 bg-background/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="bg-primary/20 text-secondary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6 inline-block">
            Membresías Exclusivas
          </span>
          <h2 className="text-4xl md:text-6xl mb-6">Únete al <span className="serif italic text-primary">Breakfast Club</span></h2>
          <p className="text-text-light max-w-2xl mx-auto text-lg">
            Ahorra hasta un 25% y olvídate de cocinar. Desayunos gourmet en tu puerta de forma recurrente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-[3rem] transition-all duration-500 hover:-translate-y-4 ${
                plan.highlight 
                  ? 'bg-secondary text-white shadow-2xl scale-105 z-10' 
                  : 'bg-white text-secondary shadow-xl'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-secondary font-bold px-6 py-2 rounded-full text-xs uppercase tracking-tighter">
                  Más Popular
                </div>
              )}
              <div className="mb-8">{plan.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className={`text-3xl font-bold mb-6 ${plan.highlight ? 'text-primary' : 'text-secondary'}`}>{plan.price}</p>
              <p className={`text-sm mb-10 leading-relaxed ${plan.highlight ? 'text-white/70' : 'text-text-light'}`}>
                {plan.desc}
              </p>
              <ul className="space-y-4 mb-12">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full ${plan.highlight ? 'bg-primary' : 'bg-secondary'}`}></div>
                    {feat}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                plan.highlight 
                  ? 'bg-primary text-secondary hover:bg-white' 
                  : 'border-2 border-primary text-secondary hover:bg-primary'
              }`}>
                Suscribirme Ahora
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
