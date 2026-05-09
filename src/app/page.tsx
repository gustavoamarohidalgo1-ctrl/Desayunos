'use client';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MorningQuiz from "@/components/MorningQuiz";
import Features from "@/components/Features";
import AboutUs from "@/components/AboutUs";
import CorporateEvents from "@/components/CorporateEvents";
import Sustainability from "@/components/Sustainability";
import SocialFeed from "@/components/SocialFeed";
import DeliveryGuide from "@/components/DeliveryGuide";
import ProductGrid from "@/components/ProductGrid";
import OrderTracker from "@/components/OrderTracker";
import CustomerReviews from "@/components/CustomerReviews";
import TrustSection from "@/components/TrustSection";
import LoyaltyProgram from "@/components/LoyaltyProgram";
import Membership from "@/components/Membership";
import GiftCard from "@/components/GiftCard";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import LiveSales from "@/components/LiveSales";
import PromoBar from "@/components/PromoBar";
import CustomCursor from "@/components/CustomCursor";
import NewsletterModal from "@/components/NewsletterModal";
import { useState } from 'react';

export default function Home() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <CustomCursor />
      <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
      <PromoBar />
      <Navbar />
      <WhatsAppButton />
      <BackToTop />
      <LiveSales />
      <Hero />
      <MorningQuiz />
      <Features />
      <AboutUs />
      <CorporateEvents />
      <Sustainability />
      <SocialFeed />
      <DeliveryGuide />
      <ProductGrid />
      <OrderTracker />
      <CustomerReviews />
      <LoyaltyProgram />
      <Membership />
      <GiftCard />
      <FAQ />
      <Blog />
      
      <TrustSection />
      
      <footer className="py-20 bg-white border-t border-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-secondary font-bold text-xl">D</span>
                </div>
                <span className="text-2xl font-bold tracking-tight text-secondary">Desayunos<span className="text-primary">.</span></span>
              </div>
              <p className="text-text-light leading-relaxed">
                Haciendo de cada mañana un momento especial desde 2024. Calidad artesanal entregada con amor.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-4 text-text-light">
                <li><a href="#menu" className="hover:text-primary transition-colors">Nuestro Menú</a></li>
                <li><a href="#nosotros" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
                <li><a href="#contacto" className="hover:text-primary transition-colors">Entregas</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Preguntas Frecuentes</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Contacto</h4>
              <ul className="space-y-4 text-text-light">
                <li className="flex items-center gap-3">
                  <span className="text-primary">📍</span> Calle Gourmet 123, Ciudad
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">📞</span> +1 234 567 890
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✉️</span> hola@desayunos.com
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Síguenos</h4>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'WhatsApp'].map((social) => (
                  <a key={social} href="#" className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                    <span className="text-xs font-bold uppercase tracking-tighter">{social.slice(0, 2)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-light">
            <p>© 2024 Desayunos Gourmet. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
