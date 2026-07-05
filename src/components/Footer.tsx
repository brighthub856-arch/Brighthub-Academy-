import React from 'react';
import { GraduationCap, Phone, Mail, Instagram, MapPin, Clock, Heart } from 'lucide-react';
import brandLogo from '../assets/images/brighthub_logo_1783241289946.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
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
    <footer className="bg-brand-blue-950 text-white pt-16 pb-8 border-t border-brand-blue-900 relative">
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-gold-400 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Desc (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-2.5">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-brand-blue-800 shadow-sm p-0.5">
                <img
                  src={brandLogo}
                  alt="BrightHub Academy Logo"
                  className="w-full h-full object-contain rounded"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-black text-xl tracking-tight">
                BRIGHTHUB <span className="text-brand-gold-400">ACADEMY</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-brand-blue-200/70 font-semibold leading-relaxed max-w-sm">
              We provide quality educational tutoring programs that foster academic excellence, character development, and interactive language fluency in Silchar, Cachar, Assam.
            </p>

            {/* Quick social links */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://www.instagram.com/bright.hub856/" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="p-2.5 bg-brand-blue-900 hover:bg-brand-gold-400 hover:text-brand-blue-950 rounded-xl transition-all"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="tel:8638354153" 
                className="p-2.5 bg-brand-blue-900 hover:bg-brand-gold-400 hover:text-brand-blue-950 rounded-xl transition-all"
                aria-label="Phone Number"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="mailto:brighthub856@gmail.com" 
                className="p-2.5 bg-brand-blue-900 hover:bg-brand-gold-400 hover:text-brand-blue-950 rounded-xl transition-all"
                aria-label="Email Address"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-gold-400">Quick Links</h4>
            <ul className="space-y-2 text-sm font-semibold text-brand-blue-200/80">
              {['Home', 'Courses', 'Why Us', 'Gallery', 'Reviews', 'Contact'].map((item) => {
                const hrefMap: { [key: string]: string } = {
                  'Home': '#home',
                  'Courses': '#courses',
                  'Why Us': '#why-us',
                  'Gallery': '#gallery',
                  'Reviews': '#testimonials',
                  'Contact': '#contact',
                };
                return (
                  <li key={item}>
                    <a 
                      href={hrefMap[item]} 
                      onClick={(e) => handleScrollTo(e, hrefMap[item])}
                      className="hover:text-brand-gold-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Academic Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-gold-400">Office Timings</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-brand-blue-200/80 font-bold">
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4.5 h-4.5 text-brand-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Classes 1–10 (Mon–Sat)</p>
                  <p className="text-brand-blue-200/50 text-[11px] font-semibold mt-0.5">3:00 PM - 7:30 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4.5 h-4.5 text-brand-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Spoken English (Sunday)</p>
                  <p className="text-brand-blue-200/50 text-[11px] font-semibold mt-0.5">9:30 AM - 1:00 PM (Batch Timings)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Reach Us (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-gold-400">Contact Address</h4>
            <div className="space-y-3 text-xs sm:text-sm text-brand-blue-200/80 font-bold">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4.5 h-4.5 text-brand-gold-400 flex-shrink-0 mt-0.5" />
                <p className="leading-snug">
                  Meherpur Shivalik park Lane no. 1 Opposite, Silchar Cachar ASSAM 788015
                </p>
              </div>
              <div className="flex items-center space-x-2.5 pt-2">
                <Phone className="w-4.5 h-4.5 text-brand-gold-400" />
                <a href="tel:8638354153" className="text-white hover:text-brand-gold-400 transition-colors">
                  +91 8638354153
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar copyright & credits */}
        <div className="mt-12 pt-8 border-t border-brand-blue-900 flex flex-col sm:flex-row justify-between items-center text-xs text-brand-blue-200/50 font-bold gap-4">
          <p className="text-center sm:text-left">
            © {currentYear} BRIGHTHUB ACADEMY. All rights reserved. | <a href="https://brighthubacademy.in" className="hover:text-brand-gold-400 transition-colors">brighthubacademy.in</a>
          </p>
          <div className="flex items-center space-x-1">
            <span>Bright Minds. Bright Future.</span>
            <Heart className="w-3.5 h-3.5 text-brand-gold-400 fill-brand-gold-400" />
            <span>Silchar, Cachar, Assam</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
