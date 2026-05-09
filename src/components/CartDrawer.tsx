'use client';
import React from 'react';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SuccessModal from './SuccessModal';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cart, removeFromCart, totalPrice } = useCart();
  const { formatPrice } = useCurrency();
  const [deliveryDate, setDeliveryDate] = React.useState('');
  const [giftMessage, setGiftMessage] = React.useState('');
  const [isSuccessOpen, setIsSuccessOpen] = React.useState(false);
  const [orderNumber, setOrderNumber] = React.useState("");

  const handleCheckout = () => {
    const num = `DG-${Math.floor(Math.random() * 9000) + 1000}`;
    setOrderNumber(num);
    setIsSuccessOpen(true);
  };

  return (
    <>
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b flex justify-between items-center bg-white">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <ShoppingBag className="text-primary" /> Mi Pedido
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag size={40} className="text-gray-300" />
                  </div>
                  <p className="text-text-light">Tu carrito está vacío</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 text-primary font-bold hover:underline"
                  >
                    Explorar el menú
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4 items-center animate-fade-in">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg">{item.name}</h4>
                          <p className="text-sm text-text-light">Cantidad: {item.quantity}</p>
                          <p className="text-primary font-bold">{formatPrice(item.price * item.quantity)}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-gray-400 hover:text-accent transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Delivery Info */}
                  <div className="space-y-4 pt-6 border-t border-dashed">
                    <h3 className="font-bold text-lg">Detalles de Entrega</h3>
                    <div>
                      <label className="block text-sm font-medium text-text-light mb-2">Fecha y Hora de Entrega</label>
                      <input 
                        type="datetime-local" 
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                        className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-light mb-2">Mensaje de Regalo (Opcional)</label>
                      <textarea 
                        placeholder="Escribe una dedicatoria especial..."
                        value={giftMessage}
                        onChange={(e) => setGiftMessage(e.target.value)}
                        className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all h-24 resize-none"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t bg-white shadow-[0_-10px_30px_rgba(0,0,0,0.05)] space-y-4">
                {/* Upsell / Add-ons Section */}
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest mb-4 text-text-light">Añadir un toque extra</p>
                  <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                    {[
                      { name: "Flores Frescas", price: "+$12.00", img: "/images/addon-flowers.png" },
                      { name: "Globo 'Felicidades'", price: "+$5.00", img: "/images/addon-balloon.png" },
                      { name: "Tarjeta Impresa", price: "+$2.00", img: "/images/addon-card.png" }
                    ].map((item, i) => (
                      <div key={i} className="min-w-[120px] bg-gray-50 p-3 rounded-2xl border border-gray-100 group cursor-pointer hover:border-primary transition-all">
                        <div className="w-12 h-12 rounded-full overflow-hidden mb-2 mx-auto">
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-[10px] font-bold text-center truncate mb-1">{item.name}</p>
                        <p className="text-[10px] text-primary font-bold text-center">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gift Message Section */}
                <div className="bg-primary/5 p-6 rounded-[2rem] border border-primary/10">
                  <p className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="text-primary">🎁</span> Mensaje para Regalo
                  </p>
                  <textarea 
                    placeholder="Escribe aquí tu dedicatoria especial..."
                    className="w-full bg-white/50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none resize-none h-24 mb-4"
                  />
                  
                  {/* Live Preview Card */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-primary/10 rounded-bl-full"></div>
                    <p className="serif italic text-primary text-xs mb-2">Dedicatoria:</p>
                    <p className="text-xs text-text-light leading-relaxed italic">
                      "Tu mensaje aparecerá aquí con una tipografía elegante y papel artesanal..."
                    </p>
                  </div>
                </div>

                {/* Delivery Slot Selection */}
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest mb-3 text-text-light">Horario de Entrega</p>
                  <div className="grid grid-cols-2 gap-2">
                    {["08:00 - 10:00", "10:00 - 12:00"].map((slot) => (
                      <button 
                        key={slot}
                        className="px-4 py-3 rounded-xl border-2 border-gray-100 text-xs font-bold hover:border-primary hover:text-primary transition-all focus:border-primary focus:text-primary"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Free Shipping Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-tighter mb-2">
                    <span>{totalPrice >= 50 ? '¡Envío Gratis Conseguido!' : `Faltan ${formatPrice(50 - totalPrice)} para envío gratis`}</span>
                    <span>{formatPrice(50)}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min((totalPrice / 50) * 100, 100)}%` }}
                      className={`h-full transition-colors duration-500 ${totalPrice >= 50 ? 'bg-[#25D366]' : 'bg-primary'}`}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(totalPrice)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="btn btn-primary w-full py-5 text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group"
                >
                  Finalizar Pedido
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-text-light text-center uppercase tracking-widest font-bold">
                  🔒 Pago 100% Seguro y Encriptado
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>

    <SuccessModal 
      isOpen={isSuccessOpen} 
      onClose={() => {
        setIsSuccessOpen(false);
        onClose();
      }} 
      orderNumber={orderNumber} 
    />
    </>
  );
};

export default CartDrawer;
