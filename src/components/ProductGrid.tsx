'use client';
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { Search } from 'lucide-react';

const allProducts = [
  {
    id: 1,
    name: "Amanecer Clásico",
    price: 25,
    category: "Completo",
    description: "Croissants recién horneados, huevos orgánicos, café de especialidad y jugo de naranja natural.",
    image: "/images/products/amanecer-clasico.png",
    tag: "Popular"
  },
  {
    id: 2,
    name: "Festín de Frutas",
    price: 22,
    category: "Saludable",
    description: "Bowl de frutas de temporada, granola artesanal, yogurt griego y miel de abeja pura.",
    image: "/images/products/festin-frutas.png",
  },
  {
    id: 3,
    name: "Desayuno Inglés",
    price: 28,
    category: "Completo",
    description: "Tostadas, tocino crujiente, champiñones, tomates asados y huevos al gusto.",
    image: "/images/products/desayuno-ingles.png",
    tag: "Nuevo"
  },
  {
    id: 4,
    name: "Avocado Toast",
    price: 18,
    category: "Saludable",
    description: "Pan de masa madre, aguacate cremoso, semillas de sésamo y un toque de chile en hojuelas.",
    image: "/images/products/avocado-toast.png",
  },
  {
    id: 5,
    name: "Pancakes de Arándanos",
    price: 20,
    category: "Dulce",
    description: "Pancakes esponjosos con arándanos frescos, jarabe de arce y mantequilla batida.",
    image: "/images/products/pancakes-arandanos.png",
  }
];

const categories = ["Todos", "Completo", "Saludable", "Dulce"];

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const filteredProducts = allProducts
    .filter(p => {
      const matchesCategory = activeCategory === "Todos" || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            p.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  const handleOpenModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="menu" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4"
          >
            Nuestro Menú <span className="serif italic text-primary">Gourmet</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-light max-w-xl mx-auto mb-10"
          >
            Cada caja de desayuno está preparada con amor y los mejores ingredientes locales.
          </motion.p>

          {/* Search Bar & Sort */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto mb-12">
            <div className="relative group w-full md:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light group-focus-within:text-primary transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Buscar tu desayuno ideal..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-80 pl-12 pr-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            <div className="relative group w-full md:w-auto">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full md:w-auto pl-6 pr-10 py-4 bg-white rounded-2xl shadow-sm border border-gray-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none font-bold text-sm"
              >
                <option value="featured">Destacados</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="name">Nombre (A-Z)</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-secondary text-white shadow-lg' 
                    : 'bg-gray-100 text-text-light hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={product.id}
            >
              <ProductCard 
                {...product} 
                onOpenModal={() => handleOpenModal(product)} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={addToCart}
      />
    </section>
  );
};

export default ProductGrid;
