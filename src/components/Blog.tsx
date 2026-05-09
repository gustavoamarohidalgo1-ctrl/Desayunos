'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "El Secreto de un Café de Especialidad Perfecto",
    category: "Tips del Chef",
    image: "/images/blog/coffee-tips.png",
    date: "May 10, 2024"
  },
  {
    title: "5 Ingredientes que Transformarán tu Mañana",
    category: "Nutrición",
    image: "/images/blog/nutrition.png",
    date: "May 08, 2024"
  },
  {
    title: "Cómo Montar una Mesa de Desayuno Instagrameable",
    category: "Estilo de Vida",
    image: "/images/hero.png", // Re-using hero for a full table look
    date: "May 05, 2024"
  }
];

const Blog = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Nuestro Blog</span>
            <h2 className="text-4xl md:text-5xl font-bold">Secretos de <span className="serif italic text-primary">Nuestra Cocina</span></h2>
          </div>
          <button className="btn btn-outline flex items-center gap-2">
            Ver todo el blog <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-72 rounded-[2.5rem] overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
              <p className="text-sm text-text-light mb-3">{post.date}</p>
              <h4 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
