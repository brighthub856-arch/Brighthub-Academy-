import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'classroom' | 'activity' | 'notes'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter gallery items
  const filteredItems = activeFilter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const filters = [
    { label: 'All Images', value: 'all' as const },
    { label: 'Classroom Life', value: 'classroom' as const },
    { label: 'Interactive Activities', value: 'activity' as const },
    { label: 'Assessments & Notes', value: 'notes' as const },
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const newIdx = lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1;
    setLightboxIndex(newIdx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const newIdx = lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(newIdx);
  };

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-blue-50 border border-brand-blue-100 px-3 py-1 rounded-full mb-4">
            <Camera className="w-4 h-4 text-brand-gold-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-850">Classroom Gallery</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-blue-950 tracking-tight leading-tight">
            Take a Look Inside Our Academy
          </h2>
          <div className="h-1 w-20 bg-brand-gold-400 mx-auto mt-5 rounded-full" />
          <p className="text-sm sm:text-base text-brand-blue-950/60 font-semibold mt-4">
            A glimpse of our vibrant educational spaces, proper study notes preparation, and Sunday communicative clubs.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border ${
                activeFilter === f.value
                  ? 'bg-brand-blue-700 border-brand-blue-700 text-white shadow-lg shadow-brand-blue-700/15'
                  : 'bg-white border-brand-blue-100 text-brand-blue-950/80 hover:bg-brand-blue-50 hover:border-brand-blue-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              // Find index of this item in the filtered list
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-brand-blue-950 cursor-pointer shadow-xl shadow-brand-blue-950/5 hover:scale-[1.02] transition-all duration-500"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-750 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle vignette/gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/90 via-brand-blue-950/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Info Hover details */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                    <div className="flex justify-end">
                      <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg border border-white/20 uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>

                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="font-display font-extrabold text-white text-base tracking-tight leading-snug flex items-center justify-between">
                        {item.title}
                        <Maximize2 className="w-4 h-4 text-brand-gold-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-white/75 text-[11px] font-medium leading-tight mt-1 line-clamp-2">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 bg-brand-blue-950/95 z-50 flex flex-col items-center justify-center p-4 sm:p-6 backdrop-blur-sm"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Slider container */}
            <div className="relative max-w-4xl w-full flex items-center justify-center">
              
              {/* Prev Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:-left-16 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10 focus:outline-none"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image Card */}
              <motion.div
                key={lightboxIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-brand-blue-950 rounded-2xl overflow-hidden border border-brand-blue-800 shadow-2xl max-h-[70vh] sm:max-h-[75vh] w-full flex flex-col"
              >
                <img
                  src={filteredItems[lightboxIndex].imageUrl}
                  alt={filteredItems[lightboxIndex].title}
                  className="w-full h-full object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Next Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:-right-16 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10 focus:outline-none"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>

            {/* Lightbox Caption Section */}
            {lightboxIndex !== null && (
              <div className="mt-6 text-center max-w-xl px-4 text-white">
                <span className="bg-brand-gold-400 text-brand-blue-950 text-[10px] font-black px-2.5 py-1 rounded-lg border border-brand-gold-300 uppercase tracking-widest">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="font-display font-black text-lg sm:text-xl text-white mt-3">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-sm text-brand-blue-200/80 font-medium mt-1">
                  {filteredItems[lightboxIndex].caption}
                </p>
                <p className="text-[11px] text-brand-blue-200/40 font-bold mt-4">
                  Image {lightboxIndex + 1} of {filteredItems.length}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
