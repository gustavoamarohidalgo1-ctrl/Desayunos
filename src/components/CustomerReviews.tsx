'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Elena Rodríguez",
    role: "Amante del Brunch",
    text: "El Amanecer Clásico superó mis expectativas. El café llegó bien caliente y el croissant era pura mantequilla. ¡Repetiré seguro!",
    img: "/images/customer-1.png",
    rating: 5
  },
  {
    id: 2,
    name: "Marco Valdés",
    role: "CEO en TechFlow",
    text: "Pedimos 20 cajas para un evento corporativo y fue un éxito total. Puntualidad inglesa y presentación impecable.",
    img: "/images/customer-2.png",
    rating: 5
  },
  {
    id: 3,
    name: "Sofía & Leo",
    role: "Pareja Foodie",
    text: "Nuestros domingos ya no son lo mismo sin los pancakes de Desayunos Gourmet. El mejor regalo que nos podemos hacer.",
    img: "/images/customer-3.png",
    rating: 5
  }
];

const CustomerReviews = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Testimonios Reales</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Lo que dicen nuestros <span className="serif italic text-primary">Clientes</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-[3rem] p-8 relative group hover:bg-primary transition-all duration-500"
            >
              <div className="absolute -top-6 left-12 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shadow-lg">
                <Quote size={20} fill="currentColor" />
              </div>
              
              <div className="mb-8 overflow-hidden rounded-2xl aspect-[4/3]">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>

              <div className="flex gap-1 mb-4 text-primary group-hover:text-secondary transition-colors">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-text-light group-hover:text-secondary/80 transition-colors mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div>
                <h4 className="font-bold text-secondary group-hover:text-white transition-colors">{review.name}</h4>
                <p className="text-xs text-text-light group-hover:text-white/60 transition-colors uppercase tracking-widest">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
