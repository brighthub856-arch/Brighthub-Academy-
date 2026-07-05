import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import InquiryDashboard from './components/InquiryDashboard';
import { Inquiry } from './types';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedCourseId, setSelectedCourseId] = useState<string>('');
  const [showInquiries, setShowInquiries] = useState<boolean>(false);
  const [unreadInquiryCount, setUnreadInquiryCount] = useState<number>(0);

  // Initialize mock inquiries for showcase purposes on first render
  useEffect(() => {
    const existing = localStorage.getItem('brighthub_inquiries');
    if (!existing) {
      const mockInquiries: Inquiry[] = [
        {
          id: 'mock-1',
          name: 'Rajib Kalita',
          phone: '9864012345',
          email: 'rajib.kalita@gmail.com',
          classLevel: 'Class 7 to 10 (Maths & Science)',
          message: 'I would like to enroll my daughter in the Class 9 Mathematics & Science evening batch. Please share the details regarding monthly fees and physical books provided.',
          date: new Date(Date.now() - 3600000 * 2).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          status: 'New'
        },
        {
          id: 'mock-2',
          name: 'Smita Sen',
          phone: '8638300111',
          email: 'smita88@yahoo.com',
          classLevel: 'Spoken English (Sunday Batch)',
          message: 'Interested in the Sunday Spoken English batch. Is there a morning batch available? I am working on weekdays and want to build confidence for presentations.',
          date: new Date(Date.now() - 3600000 * 24).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          status: 'New'
        }
      ];
      localStorage.setItem('brighthub_inquiries', JSON.stringify(mockInquiries));
    }
    updateUnreadCount();
  }, []);

  const updateUnreadCount = () => {
    const dataStr = localStorage.getItem('brighthub_inquiries');
    if (dataStr) {
      const list: Inquiry[] = JSON.parse(dataStr);
      const count = list.filter((inq) => inq.status === 'New').length;
      setUnreadInquiryCount(count);
    } else {
      setUnreadInquiryCount(0);
    }
  };

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    
    // Clear the selection shortly after scroll triggers so click can re-trigger next time
    setTimeout(() => {
      setSelectedCourseId('');
    }, 1000);
  };

  const handleInquirySubmitted = () => {
    updateUnreadCount();
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-brand-blue-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar 
        onOpenInquiries={() => setShowInquiries(true)} 
        inquiryCount={unreadInquiryCount} 
      />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero />

        {/* Courses Offered Section */}
        <Courses onSelectCourse={handleSelectCourse} />

        {/* Features / Why Choose Us Grid */}
        <WhyChooseUs />

        {/* Gallery Section */}
        <Gallery />

        {/* Student & Parent Reviews Section */}
        <Testimonials />

        {/* Contact Form & Office Coordinates */}
        <ContactForm 
          selectedCourseId={selectedCourseId} 
          onInquirySubmitted={handleInquirySubmitted} 
        />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Inquiry Administrative Drawer overlay */}
      <AnimatePresence>
        {showInquiries && (
          <InquiryDashboard 
            onClose={() => setShowInquiries(false)} 
            onRefreshCount={updateUnreadCount} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
