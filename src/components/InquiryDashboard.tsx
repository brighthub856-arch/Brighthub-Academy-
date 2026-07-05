import React, { useState, useEffect } from 'react';
import { Inquiry } from '../types';
import { X, CheckCircle, Trash2, Shield, Calendar, Phone, Mail, GraduationCap, CheckSquare, RefreshCw, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface InquiryDashboardProps {
  onClose: () => void;
  onRefreshCount: () => void;
}

export default function InquiryDashboard({ onClose, onRefreshCount }: InquiryDashboardProps) {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [filter, setFilter] = useState<'all' | 'New' | 'Contacted'>('all');

  const loadInquiries = () => {
    const dataStr = localStorage.getItem('brighthub_inquiries');
    if (dataStr) {
      setInquiries(JSON.parse(dataStr));
    } else {
      setInquiries([]);
    }
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  const handleToggleStatus = (id: string) => {
    const updated = inquiries.map((inq) => {
      if (inq.id === id) {
        return {
          ...inq,
          status: inq.status === 'New' ? ('Contacted' as const) : ('New' as const)
        };
      }
      return inq;
    });
    setInquiries(updated);
    localStorage.setItem('brighthub_inquiries', JSON.stringify(updated));
    onRefreshCount();
  };

  const handleDelete = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    setInquiries(updated);
    localStorage.setItem('brighthub_inquiries', JSON.stringify(updated));
    onRefreshCount();
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all inquiries?')) {
      localStorage.removeItem('brighthub_inquiries');
      setInquiries([]);
      onRefreshCount();
    }
  };

  const filteredInquiries = filter === 'all' 
    ? inquiries 
    : inquiries.filter(inq => inq.status === filter);

  // Statistics
  const totalCount = inquiries.length;
  const newCount = inquiries.filter(inq => inq.status === 'New').length;
  const contactedCount = inquiries.filter(inq => inq.status === 'Contacted').length;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-blue-950/45 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Main Drawer Body */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col z-10"
      >
        {/* Header */}
        <div className="p-6 border-b border-brand-blue-100 flex items-center justify-between bg-brand-blue-50">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-brand-blue-600 text-white rounded-xl">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-black text-lg text-brand-blue-950 leading-none">
                Admission CRM Portal
              </h3>
              <p className="text-[10px] font-bold text-brand-blue-600 tracking-wide uppercase mt-1">
                BrightHub Staff view • Local Storage Data
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-white/80 hover:bg-white rounded-xl border border-brand-blue-100 text-brand-blue-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="p-4 sm:p-6 bg-white border-b border-brand-blue-100 grid grid-cols-3 gap-3">
          <div className="p-3 bg-brand-blue-50/70 border border-brand-blue-100 rounded-2xl text-center">
            <p className="text-[10px] font-bold text-brand-blue-950/50 uppercase">Total Inquiries</p>
            <p className="text-xl sm:text-2xl font-black text-brand-blue-950 mt-1">{totalCount}</p>
          </div>
          <div className="p-3 bg-red-50/70 border border-red-100 rounded-2xl text-center">
            <p className="text-[10px] font-bold text-red-900/50 uppercase">Unread / New</p>
            <p className="text-xl sm:text-2xl font-black text-red-600 mt-1">{newCount}</p>
          </div>
          <div className="p-3 bg-green-50/70 border border-green-100 rounded-2xl text-center">
            <p className="text-[10px] font-bold text-green-900/50 uppercase">Contacted</p>
            <p className="text-xl sm:text-2xl font-black text-green-600 mt-1">{contactedCount}</p>
          </div>
        </div>

        {/* Filters and Actions Bar */}
        <div className="p-4 bg-white border-b border-brand-blue-50 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex bg-brand-blue-50 p-1 rounded-xl border border-brand-blue-100">
            {(['all', 'New', 'Contacted'] as const).map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-3 py-1.5 rounded-lg text-xs font-black capitalize transition-all ${
                  filter === opt
                    ? 'bg-white text-brand-blue-900 shadow-xs'
                    : 'text-brand-blue-950/60 hover:text-brand-blue-950'
                }`}
              >
                {opt === 'all' ? 'All Inquiries' : opt}
              </button>
            ))}
          </div>

          {inquiries.length > 0 && (
            <button
              onClick={handleClearAll}
              className="text-xs font-extrabold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-100 px-3 py-1.5 rounded-xl transition-all"
            >
              Clear All Logs
            </button>
          )}
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50">
          {filteredInquiries.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white border border-brand-blue-100/50 rounded-3xl">
              <CheckSquare className="w-12 h-12 text-brand-blue-300 mx-auto stroke-[1.5]" />
              <h4 className="font-display font-black text-brand-blue-950 text-base mt-4">
                No Inquiries Found
              </h4>
              <p className="text-xs font-semibold text-brand-blue-950/50 max-w-xs mx-auto mt-1 leading-normal">
                {filter === 'all' 
                  ? 'Submit inquiries in the public contact form at the bottom of the page to watch them record here in real-time!' 
                  : `There are currently no inquiries marked as "${filter}".`}
              </p>
            </div>
          ) : (
            filteredInquiries.map((inq) => (
              <div
                key={inq.id}
                className={`bg-white border p-5 rounded-2xl shadow-sm transition-all ${
                  inq.status === 'New' 
                    ? 'border-l-4 border-l-brand-blue-600 border-brand-blue-100' 
                    : 'border-l-4 border-l-slate-300 border-slate-200 opacity-85'
                }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-display font-black text-brand-blue-950 text-base">
                        {inq.name}
                      </h4>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase ${
                        inq.status === 'New' 
                          ? 'bg-red-100 text-red-700 border border-red-200' 
                          : 'bg-green-100 text-green-700 border border-green-200'
                      }`}>
                        {inq.status}
                      </span>
                    </div>

                    {/* Date label */}
                    <div className="flex items-center text-slate-400 text-[10px] font-bold mt-1.5 space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Received: {inq.date}</span>
                    </div>
                  </div>

                  {/* Actions Dropdown */}
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleToggleStatus(inq.id)}
                      className={`p-2 rounded-xl border transition-colors ${
                        inq.status === 'New' 
                          ? 'bg-green-50 border-green-200 text-green-600 hover:bg-green-100' 
                          : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
                      }`}
                      title={inq.status === 'New' ? 'Mark as Contacted' : 'Mark as Unread'}
                    >
                      <CheckCircle className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleDelete(inq.id)}
                      className="p-2 bg-red-50 border border-red-100 hover:bg-red-100 text-red-600 rounded-xl transition-colors"
                      title="Delete Inquiry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Lead Specifications */}
                <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-xl text-xs font-bold text-brand-blue-950/80">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-brand-blue-500 flex-shrink-0" />
                    <span className="truncate">Course: {inq.classLevel}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-brand-blue-500 flex-shrink-0" />
                    <a href={`tel:${inq.phone}`} className="hover:underline text-brand-blue-600 truncate">
                      {inq.phone}
                    </a>
                  </div>
                  {inq.email && inq.email !== 'not-provided@example.com' && (
                    <div className="flex items-center space-x-2 sm:col-span-2">
                      <Mail className="w-4 h-4 text-brand-blue-500 flex-shrink-0" />
                      <a href={`mailto:${inq.email}`} className="hover:underline text-brand-blue-600 truncate">
                        {inq.email}
                      </a>
                    </div>
                  )}
                </div>

                {/* Message Box */}
                <div className="mt-3.5 p-3 bg-slate-100/50 rounded-xl text-xs text-brand-blue-950/70 font-semibold leading-relaxed">
                  <div className="flex items-start space-x-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span>"{inq.message}"</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Info */}
        <div className="p-4 border-t border-brand-blue-50 bg-white text-center text-[10px] text-brand-blue-950/40 font-bold leading-normal">
          <p>This panel mimics a staff backend to review student admissions registrations.</p>
          <p className="mt-1">Inquiries are preserved locally inside your modern web browser cache.</p>
        </div>
      </motion.div>
    </div>
  );
}
