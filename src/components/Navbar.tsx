import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { useCurrency } from '@/context/CurrencyContext';
import { ShoppingCart } from 'lucide-react';
import CartDrawer from './CartDrawer';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { currency, setCurrency } = useCurrency();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-secondary font-bold text-xl">D</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-secondary">Desayunos<span className="text-primary">.</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#menu" className="hover:text-primary transition-colors">Menú</a>
            <a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="flex items-center gap-1 text-xs font-bold uppercase tracking-tighter hover:text-primary transition-colors"
              >
                <span className={language === 'es' ? 'text-primary' : 'text-secondary'}>ES</span>
                <span className="text-gray-300">/</span>
                <span className={language === 'en' ? 'text-primary' : 'text-secondary'}>EN</span>
              </button>

              <button 
                onClick={() => setCurrency(currency === 'USD' ? 'COP' : 'USD')}
                className="flex items-center gap-1 text-xs font-bold uppercase tracking-tighter hover:text-primary transition-colors"
              >
                <span className={currency === 'USD' ? 'text-primary' : 'text-secondary'}>USD</span>
                <span className="text-gray-300">/</span>
                <span className={currency === 'COP' ? 'text-primary' : 'text-secondary'}>COP</span>
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="glass px-6 py-2 rounded-full font-semibold hover:bg-primary hover:text-secondary transition-all flex items-center gap-2"
              >
                <ShoppingCart size={20} />
                <span>Carrito ({totalItems})</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
