import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Phone, Menu, X, Inbox, Sparkles } from 'lucide-react';
import brandLogo from '../assets/images/brighthub_logo_1783241289946.jpg';

interface NavbarProps {
  onOpenInquiries: () => void;
  inquiryCount: number;
}

export default function Navbar({ onOpenInquiries, inquiryCount }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-brand-blue-100 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, '#home')}
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-brand-blue-100 shadow-md group-hover:scale-105 transition-all p-0.5">
                <img
                  src={brandLogo}
                  alt="BrightHub Academy Logo"
                  className="w-full h-full object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-gold-400 rounded-full border border-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-brand-blue-950 flex items-center">
                  BRIGHTHUB <span className="text-brand-gold-500 ml-1">ACADEMY</span>
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-brand-blue-500 uppercase leading-none">
                  Bright Minds. Bright Future.
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-brand-blue-950/80 hover:text-brand-blue-600 hover:bg-brand-blue-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions (Desktop) */}
            <div className="hidden lg:flex items-center space-x-4">
              {inquiryCount > 0 && (
                <button
                  onClick={onOpenInquiries}
                  className="relative p-2 text-brand-blue-600 hover:bg-brand-blue-50 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  title="View Submitted Inquiries"
                >
                  <Inbox className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {inquiryCount}
                  </span>
                  Inquiries
                </button>
              )}
              
              <a
                href="tel:8638354153"
                className="flex items-center space-x-2 text-sm font-bold text-brand-blue-900 bg-brand-gold-100 hover:bg-brand-gold-200 border border-brand-gold-300 px-4 py-2 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-brand-gold-600" />
                <span>+91 8638354153</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-brand-blue-500/10 hover:shadow-brand-blue-500/20 hover:scale-[1.02] transition-all"
              >
                Enroll Now
              </a>
            </div>

            {/* Mobile Toggle & Actions */}
            <div className="flex md:hidden items-center space-x-3">
              {inquiryCount > 0 && (
                <button
                  onClick={onOpenInquiries}
                  className="relative p-2 text-brand-blue-600 hover:bg-brand-blue-50 rounded-lg transition-colors"
                >
                  <Inbox className="w-5 h-5" />
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                    {inquiryCount}
                  </span>
                </button>
              )}
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-brand-blue-950 hover:bg-brand-blue-50 rounded-xl focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] z-40 md:hidden bg-white/95 backdrop-blur-lg border-b border-brand-blue-100 shadow-xl py-6 px-4 flex flex-col space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="px-4 py-3 rounded-xl text-base font-bold text-brand-blue-950 hover:bg-brand-blue-50 hover:text-brand-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-brand-blue-50 flex flex-col space-y-3">
              <a
                href="tel:8638354153"
                className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl font-bold text-brand-blue-900 bg-brand-gold-100 border border-brand-gold-300"
              >
                <Phone className="w-5 h-5 text-brand-gold-600" />
                <span>Call Us: +91 8638354153</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="text-center w-full bg-brand-blue-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-brand-blue-500/10"
              >
                Enroll Online Now
              </a>

              {inquiryCount > 0 && (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenInquiries();
                  }}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-brand-blue-600 border border-brand-blue-200 bg-brand-blue-50"
                >
                  <Inbox className="w-5 h-5" />
                  <span>View Submitted Inquiries ({inquiryCount})</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
