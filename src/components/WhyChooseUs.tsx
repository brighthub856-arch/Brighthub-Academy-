import React from 'react';
import { FEATURES } from '../data';
import { ShieldCheck, NotebookPen, FileCheck, TrendingUp, HeartHandshake, GraduationCap, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  
  // Dynamic icon renderer
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand-blue-600" />;
      case 'NotebookPen':
        return <NotebookPen className="w-6 h-6 text-brand-blue-600" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-brand-blue-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-brand-blue-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-brand-blue-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-brand-blue-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-blue-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-brand-blue-50/40 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-[10%] w-60 h-60 rounded-full bg-brand-gold-100/20 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[10%] w-80 h-80 rounded-full bg-brand-blue-100/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-blue-100 border border-brand-blue-200/50 px-3 py-1 rounded-full mb-4">
            <ShieldCheck className="w-4 h-4 text-brand-blue-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-900">Why BrightHub Academy</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-blue-950 tracking-tight leading-tight">
            Setting the Standard in Quality Tutoring
          </h2>
          <div className="h-1 w-20 bg-brand-gold-400 mx-auto mt-5 rounded-full" />
          <p className="text-sm sm:text-base text-brand-blue-950/60 font-semibold mt-4">
            We don’t just teach; we mentor, evaluate, and establish rigorous academic discipline to prepare students for a stellar future.
          </p>
        </div>

        {/* Features Bento/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className="bg-white hover:bg-gradient-to-br hover:from-white hover:to-brand-blue-50/20 border border-brand-blue-100/60 p-6 sm:p-8 rounded-3xl shadow-xl shadow-brand-blue-950/5 hover:shadow-2xl hover:shadow-brand-blue-950/10 hover:border-brand-blue-200 hover:scale-[1.01] transition-all duration-300 flex flex-col items-start space-y-4 group"
            >
              {/* Icon Bubble */}
              <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-blue-50 border border-brand-blue-100 group-hover:bg-brand-blue-100 group-hover:scale-105 transition-all">
                {getIcon(feature.iconName)}
                <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-brand-gold-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-display font-bold text-lg sm:text-xl text-brand-blue-950 tracking-tight flex items-center">
                  {feature.title}
                  <span className="text-brand-gold-500 font-normal text-sm ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    ✦
                  </span>
                </h3>
                <p className="text-sm font-medium text-brand-blue-950/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Minimal Accent indicator */}
              <div className="pt-2 w-full flex justify-between items-center text-[11px] font-bold text-brand-blue-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Pillar {idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Core Philosophy Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue-950 via-brand-blue-900 to-brand-blue-950 rounded-3xl p-6 sm:p-10 border border-brand-blue-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <p className="text-brand-gold-300 font-extrabold text-xs tracking-wider uppercase">Our Core Mission</p>
            <h4 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-tight">
              Empowering Students To Master Concepts, Not Just Pass Exams
            </h4>
            <p className="text-sm text-brand-blue-200/80 font-medium">
              By maintaining small batches and personalized reports, we identify and fix gaps in learning instantly.
            </p>
          </div>
          <a
            href="#contact"
            className="bg-brand-gold-400 hover:bg-brand-gold-500 text-brand-blue-950 font-black px-6 py-3.5 rounded-xl text-sm shadow-lg shadow-brand-gold-500/10 hover:shadow-brand-gold-500/20 transition-all text-center flex-shrink-0 w-full md:w-auto"
          >
            Start Your Journey Today
          </a>
        </div>

      </div>
    </section>
  );
}
