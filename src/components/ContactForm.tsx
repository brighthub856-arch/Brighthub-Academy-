import React, { useState, useEffect } from 'react';
import { Inquiry } from '../types';
import { Phone, Mail, Instagram, MapPin, Send, CheckCircle2, MessageCircle, Info, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactFormProps {
  selectedCourseId: string;
  onInquirySubmitted: () => void;
}

export default function ContactForm({ selectedCourseId, onInquirySubmitted }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    classLevel: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Handle auto-selection when user clicks "Enroll" on a course card
  useEffect(() => {
    if (selectedCourseId) {
      let selectionValue = '';
      if (selectedCourseId === 'classes-1-6') {
        selectionValue = 'Class 1 to 6 (All Subjects)';
      } else if (selectedCourseId === 'classes-7-10') {
        selectionValue = 'Class 7 to 10 (Maths & Science)';
      } else if (selectedCourseId === 'spoken-english') {
        selectionValue = 'Spoken English (Sunday Batch)';
      }
      
      setFormData((prev) => ({
        ...prev,
        classLevel: selectionValue
      }));

      // Scroll smoothly to form
      const element = document.querySelector('#contact');
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
      }
    }
  }, [selectedCourseId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.classLevel) {
      setError('Please fill in your Name, Phone Number, and select a Course Program.');
      return;
    }

    if (formData.phone.trim().length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: 'inq-' + Date.now(),
        name: formData.name,
        phone: formData.phone,
        email: formData.email || 'not-provided@example.com',
        classLevel: formData.classLevel,
        message: formData.message || 'No additional message.',
        date: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: 'New'
      };

      // Read existing
      const existingInquiriesStr = localStorage.getItem('brighthub_inquiries');
      const existingInquiries: Inquiry[] = existingInquiriesStr ? JSON.parse(existingInquiriesStr) : [];
      
      // Save
      localStorage.setItem('brighthub_inquiries', JSON.stringify([newInquiry, ...existingInquiries]));
      
      setIsSubmitting(false);
      setIsSuccess(true);
      onInquirySubmitted();

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        classLevel: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Side (Left 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand-blue-50 border border-brand-blue-100 px-3 py-1 rounded-full">
                <Info className="w-4 h-4 text-brand-blue-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-850">Contact Office</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-blue-950 tracking-tight leading-tight">
                Let’s Discuss Your Child’s Education
              </h2>
              <p className="text-sm sm:text-base text-brand-blue-950/60 font-semibold leading-relaxed">
                Have questions about batch timings, fees, or course details? Get in touch with us directly or submit the registration form.
              </p>

              {/* Contact Details List */}
              <div className="space-y-4 pt-4">
                
                {/* Phone Call & WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-blue-50 border border-brand-blue-100 rounded-xl text-brand-blue-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-blue-950/50 uppercase tracking-widest leading-none">Call & WhatsApp</p>
                    <a href="tel:8638354153" className="text-base font-black text-brand-blue-950 hover:text-brand-blue-600 block mt-1 transition-colors">
                      +91 8638354153
                    </a>
                    <a 
                      href="https://wa.me/918638354153?text=Hi!%20I%20am%20interested%20in%20enrolling%20at%20BrightHub%20Academy." 
                      target="_blank" 
                      referrerPolicy="no-referrer"
                      className="inline-flex items-center text-xs font-extrabold text-[#25D366] mt-1 hover:underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] mr-1" /> Chat with us instantly
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-blue-50 border border-brand-blue-100 rounded-xl text-brand-blue-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-blue-950/50 uppercase tracking-widest leading-none">Email Office</p>
                    <a href="mailto:brighthub856@gmail.com" className="text-base font-black text-brand-blue-950 hover:text-brand-blue-600 block mt-1 transition-colors">
                      brighthub856@gmail.com
                    </a>
                  </div>
                </div>

                {/* Official Website */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-blue-50 border border-brand-blue-100 rounded-xl text-brand-blue-600">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-blue-950/50 uppercase tracking-widest leading-none">Official Website</p>
                    <a href="https://brighthubacademy.in" target="_blank" rel="noopener noreferrer" className="text-base font-black text-brand-blue-950 hover:text-brand-blue-600 block mt-1 transition-colors">
                      brighthubacademy.in
                    </a>
                  </div>
                </div>

                {/* Instagram Profile */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-blue-50 border border-brand-blue-100 rounded-xl text-brand-blue-600">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-blue-950/50 uppercase tracking-widest leading-none">Instagram handle</p>
                    <a 
                      href="https://www.instagram.com/bright.hub856/" 
                      target="_blank" 
                      referrerPolicy="no-referrer"
                      className="text-base font-black text-brand-blue-950 hover:text-brand-blue-600 block mt-1 transition-colors"
                    >
                      @bright.hub856
                    </a>
                  </div>
                </div>

                {/* Physical Location Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-blue-50 border border-brand-blue-100 rounded-xl text-brand-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-blue-950/50 uppercase tracking-widest leading-none">Our Location</p>
                    <p className="text-sm font-bold text-brand-blue-950 leading-snug mt-1">
                      BrightHub Academy, Meherpur Shivalik park Lane no. 1 Opposite, Silchar Cachar ASSAM 788015
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map Iframe block */}
            <div className="rounded-2xl overflow-hidden border border-brand-blue-100 shadow-md h-64 relative bg-slate-100">
              <iframe
                title="BrightHub Academy Silchar Map Location"
                src="https://maps.google.com/maps?q=Meherpur%20Shivalik%20park%20Lane%20no.%201%20Opposite,%20Silchar%20Cachar%20ASSAM%20788015&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form Side (Right 7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-brand-blue-50/50 border border-brand-blue-100/80 p-6 sm:p-10 rounded-3xl shadow-xl shadow-brand-blue-950/5 h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="font-display font-black text-xl sm:text-2xl text-brand-blue-950 tracking-tight">
                        Student Admission Inquiry
                      </h3>
                      <p className="text-xs font-semibold text-brand-blue-950/50 mt-1">
                        Please provide valid details so our academic counselor can reach out to you.
                      </p>
                    </div>

                    {error && (
                      <div className="bg-red-50 border-l-4 border-red-500 p-3.5 rounded-xl text-xs font-bold text-red-800">
                        {error}
                      </div>
                    )}

                    {/* Full Name */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-brand-blue-950/70 uppercase tracking-wider">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sarma"
                        className="w-full bg-white border border-brand-blue-200/80 rounded-xl px-4 py-3 text-sm font-semibold text-brand-blue-950 placeholder-brand-blue-950/30 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 transition-all"
                        required
                      />
                    </div>

                    {/* Phone and Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Number */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-bold text-brand-blue-950/70 uppercase tracking-wider">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 8638354153"
                          className="w-full bg-white border border-brand-blue-200/80 rounded-xl px-4 py-3 text-sm font-semibold text-brand-blue-950 placeholder-brand-blue-950/30 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 transition-all"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="email" className="text-xs font-bold text-brand-blue-950/70 uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. child@gmail.com"
                          className="w-full bg-white border border-brand-blue-200/80 rounded-xl px-4 py-3 text-sm font-semibold text-brand-blue-950 placeholder-brand-blue-950/30 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    {/* Class Select Dropdown */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="classLevel" className="text-xs font-bold text-brand-blue-950/70 uppercase tracking-wider">
                        Select Course Program <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="classLevel"
                        name="classLevel"
                        value={formData.classLevel}
                        onChange={handleChange}
                        className="w-full bg-white border border-brand-blue-200/80 rounded-xl px-4 py-3 text-sm font-semibold text-brand-blue-950 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 transition-all"
                        required
                      >
                        <option value="">-- Choose academic batch --</option>
                        <option value="Class 1 to 6 (All Subjects)">Class 1 to 6 (All Subjects Program)</option>
                        <option value="Class 7 to 10 (Maths & Science)">Class 7 to 10 (Mathematics & Science Program)</option>
                        <option value="Spoken English (Sunday Batch)">Spoken English (Dedicated Sunday Batch)</option>
                      </select>
                    </div>

                    {/* Custom Message / Questions */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-brand-blue-950/70 uppercase tracking-wider">
                        Your Message / Query
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write any special learning requirements or questions here..."
                        rows={4}
                        className="w-full bg-white border border-brand-blue-200/80 rounded-xl px-4 py-3 text-sm font-semibold text-brand-blue-950 placeholder-brand-blue-950/30 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 transition-all"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-blue-700 hover:bg-brand-blue-800 disabled:bg-brand-blue-400 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-brand-blue-700/15 transition-all text-sm tracking-tight flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Registration Inquiry</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="mx-auto w-16 h-16 rounded-full bg-green-50 border-2 border-green-300 text-green-500 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-black text-2xl text-brand-blue-950 tracking-tight">
                        Inquiry Received!
                      </h3>
                      <p className="text-sm font-semibold text-brand-blue-950/60 max-w-sm mx-auto">
                        Thank you for registering. Our academic counselor will call you within 24 hours to discuss fee structures and batch timings.
                      </p>
                    </div>

                    <div className="bg-white border border-brand-blue-100 p-4 rounded-2xl max-w-xs mx-auto text-xs text-left text-brand-blue-950/70 space-y-2 font-bold shadow-sm">
                      <p className="text-[10px] text-brand-blue-500 uppercase tracking-widest font-black">Next Steps:</p>
                      <p>✓ Expect a phone call from <strong>+91 8638354153</strong>.</p>
                      <p>✓ Keep your child's recent report card ready for custom planning.</p>
                    </div>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 bg-brand-blue-100 hover:bg-brand-blue-200 text-brand-blue-900 rounded-xl text-xs font-black tracking-tight transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
