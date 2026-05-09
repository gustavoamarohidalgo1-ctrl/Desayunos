'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, PartyPopper, Briefcase } from 'lucide-react';

const eventTypes = [
  {
    icon: <Building2 size={24} />,
    title: "Eventos Corporativos",
    desc: "Catering premium para reuniones, lanzamientos y conferencias."
  },
  {
    icon: <Users size={24} />,
    title: "Desayunos de Equipo",
    desc: "Sorprende a tus empleados con mañanas llenas de energía."
  },
  {
    icon: <PartyPopper size={24} />,
    title: "Celebraciones",
    desc: "Aniversarios, baby showers y momentos familiares especiales."
  }
];

const CorporateEvents = () => {
  return (
    <section id="eventos" className="py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Servicios B2B</span>
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
              Llevamos el Gourmet <br />
              <span className="serif italic text-primary">a tu Empresa</span>
            </h2>
            <p className="text-text-light text-lg mb-10 leading-relaxed">
              Elevamos el estándar de los desayunos corporativos. Olvida el catering convencional; nosotros ofrecemos una experiencia gastronómica que refleja la excelencia de tu marca.
            </p>
            
            <div className="space-y-8 mb-12">
              {eventTypes.map((type, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-primary shrink-0">
                    {type.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{type.title}</h4>
                    <p className="text-text-light text-sm">{type.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="btn btn-primary px-10 py-5 flex items-center gap-3">
              <Briefcase size={20} />
              Solicitar Cotización Corporativa
            </button>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400&auto=format&fit=crop" 
                alt="Evento 1" 
                className="rounded-[2rem] h-80 w-full object-cover shadow-xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400&auto=format&fit=crop" 
                alt="Evento 2" 
                className="rounded-[2rem] h-64 w-full object-cover shadow-xl"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=400&auto=format&fit=crop" 
                alt="Evento 3" 
                className="rounded-[2rem] h-64 w-full object-cover shadow-xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop" 
                alt="Evento 4" 
                className="rounded-[2rem] h-80 w-full object-cover shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CorporateEvents;
