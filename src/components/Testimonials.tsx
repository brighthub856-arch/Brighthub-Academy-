import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data';
import { MessageSquare, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-brand-blue-50/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 rounded-full bg-brand-blue-200/20 blur-3xl" />
        <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-brand-gold-100/30 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-brand-blue-100 border border-brand-blue-200/50 px-3 py-1 rounded-full mb-4">
            <MessageSquare className="w-4 h-4 text-brand-blue-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-900">Words from Parents & Students</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-blue-950 tracking-tight leading-tight">
            Loved by Our Academy Families
          </h2>
          <div className="h-1 w-20 bg-brand-gold-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-brand-blue-100/60 rounded-3xl p-6 sm:p-12 shadow-xl shadow-brand-blue-950/5 relative"
            >
              {/* Massive Gold Decorative Quote */}
              <div className="absolute -top-5 -left-2 sm:top-6 sm:left-6 text-brand-gold-200 opacity-40">
                <Quote className="w-14 h-14 sm:w-20 sm:h-20 fill-brand-gold-200" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                
                {/* Five Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-gold-400 text-brand-gold-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-base sm:text-lg md:text-xl font-medium text-brand-blue-950/80 leading-relaxed max-w-2xl">
                  "{TESTIMONIALS[currentIndex].text}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4 border-t border-brand-blue-50 w-full justify-center">
                  <img
                    src={TESTIMONIALS[currentIndex].avatar}
                    alt={TESTIMONIALS[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold-300 shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-center sm:text-left">
                    <p className="font-display font-extrabold text-brand-blue-950 text-base leading-none">
                      {TESTIMONIALS[currentIndex].name}
                    </p>
                    <p className="text-xs font-bold text-brand-blue-500 uppercase tracking-wider mt-1">
                      {TESTIMONIALS[currentIndex].role}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 bg-white hover:bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-950 rounded-full transition-colors shadow-md focus:outline-none"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-6 bg-brand-blue-700' : 'w-2.5 bg-brand-blue-200/80'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-white hover:bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-950 rounded-full transition-colors shadow-md focus:outline-none"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
