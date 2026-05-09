'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const sales = [
  { name: "Andrés", location: "Madrid", product: "Amanecer Clásico", time: "hace 2 min" },
  { name: "Carla", location: "Barcelona", product: "Avocado Toast", time: "hace 5 min" },
  { name: "Mateo", location: "Valencia", product: "Pancakes Dulces", time: "hace 10 min" },
  { name: "Sofía", location: "Sevilla", product: "Festín de Frutas", time: "hace 15 min" }
];

const LiveSales = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShow(true);
      setTimeout(() => setShow(false), 5000);
      setIndex((prev) => (prev + 1) % sales.length);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="fixed bottom-24 left-8 z-[80] glass p-4 rounded-2xl flex items-center gap-4 max-w-xs shadow-2xl border-primary/20"
        >
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-secondary">
            <ShoppingBag size={20} />
          </div>
          <div className="text-sm">
            <p className="font-bold">{sales[index].name} de {sales[index].location}</p>
            <p className="text-text-light">Compró <span className="text-primary font-medium">{sales[index].product}</span></p>
            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">{sales[index].time}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LiveSales;
