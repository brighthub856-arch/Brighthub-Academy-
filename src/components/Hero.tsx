import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, MessageCircle, Star, Sparkles, ShieldCheck, GraduationCap, Users } from 'lucide-react';

export default function Hero() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-brand-blue-50/70 via-white to-fcfcfd pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Decorative background grid and shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-brand-blue-100/30 to-brand-gold-100/20 blur-3xl rounded-full" />
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-brand-blue-100/40 blur-2xl" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-brand-gold-100/30 blur-3xl" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content Left */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Admission Open Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-brand-blue-50 border border-brand-blue-200/60 rounded-full px-4 py-1.5 w-fit"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue-600" />
              </span>
              <span className="text-xs font-bold text-brand-blue-900 tracking-wide uppercase flex items-center gap-1">
                Admissions Open 2026-2027 <Sparkles className="w-3.5 h-3.5 text-brand-gold-500" />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-brand-blue-950 leading-[1.05]">
                Bright Minds.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-600 via-brand-blue-800 to-brand-gold-600 relative">
                  Bright Future.
                  <span className="absolute bottom-1.5 left-0 w-full h-[6px] bg-brand-gold-200/50 -z-10 rounded-full" />
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl font-medium text-brand-blue-950/70 max-w-xl">
                Providing top-tier quality coaching for <strong className="text-brand-blue-800">Classes 1–10</strong> (All Subjects, Mathematics & Science) and interactive <strong className="text-brand-gold-600 font-bold">Spoken English</strong> programs.
              </p>
            </motion.div>

            {/* Quick Benefits Row */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
            >
              {[
                { label: 'Weekly Assessments', icon: ShieldCheck },
                { label: 'Proper Study Notes', icon: GraduationCap },
                { label: 'Individual Focus', icon: Users }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm border border-brand-blue-100 p-2.5 rounded-xl">
                  <div className="p-1 rounded-lg bg-brand-blue-50 text-brand-blue-600">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-brand-blue-950/80 leading-snug">{item.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 pt-3"
            >
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-blue-600 to-brand-blue-700 hover:from-brand-blue-700 hover:to-brand-blue-850 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-brand-blue-500/15 hover:shadow-brand-blue-500/25 hover:scale-[1.01] transition-all text-base text-center"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="flex gap-2">
                <a
                  href="tel:8638354153"
                  className="flex-1 inline-flex items-center justify-center space-x-2 bg-white hover:bg-brand-blue-50 text-brand-blue-950 font-bold px-5 py-4 rounded-xl border border-brand-blue-200/80 hover:border-brand-blue-300 transition-all text-base text-center"
                >
                  <Phone className="w-5 h-5 text-brand-blue-600" />
                  <span>Call Us</span>
                </a>
                
                <a
                  href="https://wa.me/918638354153?text=Hi!%20I%20am%20interested%20in%20enrolling%20my%20child%20at%20BrightHub%20Academy."
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex-1 inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-5 py-4 rounded-xl shadow-lg shadow-green-500/10 hover:shadow-green-500/20 transition-all text-base text-center"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Social Trust Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center space-x-4 pt-4 border-t border-brand-blue-100"
            >
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80',
                  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80'
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Active Student"
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold-400 text-brand-gold-400" />
                  ))}
                  <span className="text-sm font-extrabold text-brand-blue-950 ml-1">4.9/5</span>
                </div>
                <span className="text-xs font-bold text-brand-blue-950/60 leading-tight">Rated by 120+ local parents & students</span>
              </div>
            </motion.div>

          </div>

          {/* Hero Media Right */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md sm:max-w-lg lg:max-w-none"
            >
              
              {/* Main Visual Card */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-square bg-gradient-to-tr from-brand-blue-900 to-brand-blue-850 p-1 shadow-2xl shadow-brand-blue-950/20">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000"
                  alt="BrightHub Academy Students Group Study"
                  className="w-full h-full object-cover rounded-[22px] opacity-85 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/70 via-transparent to-brand-blue-950/20 rounded-[22px] pointer-events-none" />
                
                {/* Captions / Achievements in the photo */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-brand-gold-300 uppercase">Spoken English batch</p>
                    <p className="text-sm sm:text-base font-bold text-white leading-tight">Sunday Fluency Group</p>
                  </div>
                  <span className="bg-brand-gold-400 text-brand-blue-950 text-xs font-black px-3 py-1.5 rounded-lg">Every Sunday</span>
                </div>
              </div>

              {/* Float Widget 1: Classes Offered Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-6 -right-4 bg-white border border-brand-blue-100 p-3 rounded-2xl shadow-xl flex items-center space-x-3 hidden sm:flex"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-brand-blue-950/60 font-bold leading-none">Classes Covered</p>
                  <p className="text-sm font-black text-brand-blue-950">Class 1 to 10</p>
                </div>
              </motion.div>

              {/* Float Widget 2: Weekly Tests Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-4 bg-white border border-brand-gold-200 p-3.5 rounded-2xl shadow-xl flex items-center space-x-3 hidden sm:flex"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-gold-50 text-brand-gold-600 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <p className="text-xs text-brand-blue-950/60 font-bold leading-none">Regular Schedule</p>
                  <p className="text-sm font-black text-brand-blue-950">Weekly Assessments</p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
