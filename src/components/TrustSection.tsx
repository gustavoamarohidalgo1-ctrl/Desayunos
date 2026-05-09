'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Thermometer, HeartHandshake } from 'lucide-react';

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Pago Seguro",
    desc: "Tus datos están protegidos con encriptación de grado bancario."
  },
  {
    icon: Truck,
    title: "Entrega Puntual",
    desc: "Si llegamos más de 15 min tarde, tu próximo desayuno es gratis."
  },
  {
    icon: Thermometer,
    title: "Garantía Térmica",
    desc: "Utilizamos cajas aislantes para que todo llegue a la temperatura ideal."
  },
  {
    icon: HeartHandshake,
    title: "Satisfacción 100%",
    desc: "¿Algo no está perfecto? Lo solucionamos en menos de 30 minutos."
  }
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {guarantees.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-secondary transition-all duration-500">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
