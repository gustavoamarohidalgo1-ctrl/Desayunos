'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Currency = 'USD' | 'COP';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (cur: Currency) => void;
  formatPrice: (priceUSD: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const EXCHANGE_RATE = 4000; // 1 USD = 4000 COP (Fixed for local demo)

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('USD');

  const formatPrice = (priceUSD: number) => {
    if (currency === 'COP') {
      const copPrice = Math.round(priceUSD * EXCHANGE_RATE);
      return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0
      }).format(copPrice);
    }
    
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(priceUSD);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error('useCurrency must be used within a CurrencyProvider');
  return context;
};
