'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, MessageCircle } from 'lucide-react';

const feedItems = [
  { id: 1, img: "/images/social-1.png", likes: "1.2k", comments: "45" },
  { id: 2, img: "/images/social-2.png", likes: "850", comments: "22" },
  { id: 3, img: "/images/social-3.png", likes: "2.5k", comments: "120" },
  { id: 4, img: "/images/social-4.png", likes: "1.8k", comments: "64" },
];

const SocialFeed = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Camera size={24} />
            <span className="font-bold uppercase tracking-widest text-sm">@DesayunosGourmet</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Síguenos en <span className="serif italic text-primary">Instagram</span></h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Únete a nuestra comunidad y comparte tus momentos favoritos con el hashtag <span className="font-bold text-secondary">#MomentosGourmet</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {feedItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square rounded-[2rem] overflow-hidden cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={`Social ${item.id}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-8 text-white">
                <div className="flex items-center gap-2">
                  <Heart size={20} fill="currentColor" />
                  <span className="font-bold">{item.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={20} fill="currentColor" />
                  <span className="font-bold">{item.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="btn btn-outline px-12 py-4">
            Ver Galería Completa
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
