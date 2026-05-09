'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, RefreshCcw, Utensils } from 'lucide-react';

const questions = [
  {
    id: 1,
    text: "¿Cómo prefieres empezar tu día?",
    options: [
      { text: "Con algo dulce y reconfortante", value: "dulce" },
      { text: "Con mucha energía y salud", value: "saludable" },
      { text: "Con un desayuno contundente y tradicional", value: "completo" }
    ]
  },
  {
    id: 2,
    text: "¿Cuál es tu bebida ideal?",
    options: [
      { text: "Café de especialidad con leche", value: "cafe" },
      { text: "Zumo de naranja natural recién exprimido", value: "zumo" },
      { text: "Té caliente o infusión orgánica", value: "te" }
    ]
  }
];

const results: any = {
  dulce: {
    name: "Pancakes de Arándanos",
    desc: "Eres una persona que disfruta de los placeres dulces de la vida. Te mereces una mañana esponjosa.",
    img: "/images/products/pancakes-arandanos.png"
  },
  saludable: {
    name: "Festín de Frutas o Avocado Toast",
    desc: "Buscas el equilibrio perfecto entre sabor y vitalidad. Tu mañana será fresca y llena de color.",
    img: "/images/products/festin-frutas.png"
  },
  completo: {
    name: "Amanecer Clásico o Inglés",
    desc: "No te andas con juegos. Necesitas un desayuno que te mantenga satisfecho todo el día.",
    img: "/images/products/amanecer-clasico.png"
  }
};

const MorningQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const resultKey = answers[0] || "saludable";
  const result = results[resultKey];

  return (
    <section className="py-32 bg-secondary text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 p-40 opacity-5 rotate-45 pointer-events-none">
        <Utensils size={400} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Sparkles size={24} />
              <span className="font-bold uppercase tracking-widest text-sm">Personalizador</span>
            </div>
            <h2 className="text-4xl md:text-6xl mb-6">Encuentra tu <span className="serif italic text-primary">Desayuno Ideal</span></h2>
            <p className="text-white/60">Responde 2 preguntas rápidas y te diremos qué caja gourmet encaja contigo hoy.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-bold text-lg">0{step + 1}</span>
                    <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold">{questions[step].text}</h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {questions[step].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(opt.value)}
                        className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary hover:text-secondary transition-all text-left"
                      >
                        <span className="font-medium">{opt.text}</span>
                        <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-8"
                >
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                    <img src={result.img} alt={result.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Tu Match Perfecto es:</h3>
                    <h4 className="text-3xl md:text-4xl font-bold mb-4">{result.name}</h4>
                    <p className="text-white/60 max-w-md mx-auto leading-relaxed">{result.desc}</p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
                    <button className="btn btn-primary px-10 py-4">Añadir a mi Carrito</button>
                    <button 
                      onClick={resetQuiz}
                      className="flex items-center justify-center gap-2 text-white/50 hover:text-white transition-colors"
                    >
                      <RefreshCcw size={18} /> Repetir Test
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorningQuiz;
