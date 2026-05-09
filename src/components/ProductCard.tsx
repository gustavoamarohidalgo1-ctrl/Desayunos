'use client';
import React from 'react';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  tag?: string;
  onOpenModal?: () => void;
}

const ProductCard = (product: ProductProps) => {
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const { name, price, description, image, tag, onOpenModal } = product;

  return (
    <div className="group relative glass rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {tag && (
        <span className="absolute top-4 left-4 z-10 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
          {tag}
        </span>
      )}
      <div className="h-64 overflow-hidden cursor-pointer" onClick={onOpenModal}>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold cursor-pointer hover:text-primary transition-colors" onClick={onOpenModal}>{name}</h3>
          <span className="text-primary font-bold text-lg">{formatPrice(price)}</span>
        </div>
        <p className="text-text-light text-sm mb-6 leading-relaxed line-clamp-2">
          {description}
        </p>
        <button 
          onClick={() => addToCart(product)}
          className="w-full py-3 rounded-xl border-2 border-primary text-secondary font-bold hover:bg-primary transition-all flex items-center justify-center gap-2"
        >
          <span>Añadir al Carrito</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
