import React from 'react';
import { Course } from '../types';
import { COURSES } from '../data';
import { BookOpen, Calculator, MessageSquare, Clock, Check, ArrowRight, Sparkles } from 'lucide-react';

interface CoursesProps {
  onSelectCourse: (courseId: string) => void;
}

export default function Courses({ onSelectCourse }: CoursesProps) {
  
  // Icon selector helper
  const getCourseIcon = (id: string, color: string) => {
    switch (id) {
      case 'classes-1-6':
        return <BookOpen className={`w-6 h-6 ${color}`} />;
      case 'classes-7-10':
        return <Calculator className={`w-6 h-6 ${color}`} />;
      case 'spoken-english':
        return <MessageSquare className={`w-6 h-6 ${color}`} />;
      default:
        return <BookOpen className={`w-6 h-6 ${color}`} />;
    }
  };

  // Border & Accent Color picker helper
  const getThemeClasses = (theme: Course['colorTheme']) => {
    switch (theme) {
      case 'blue':
        return {
          cardBg: 'bg-white',
          accentBorder: 'border-brand-blue-500',
          badgeBg: 'bg-brand-blue-50 text-brand-blue-700 border-brand-blue-200/50',
          iconBg: 'bg-brand-blue-50 text-brand-blue-600',
          buttonBg: 'bg-brand-blue-600 hover:bg-brand-blue-700 text-white shadow-brand-blue-500/10',
          tagIcon: 'text-brand-blue-600',
          highlight: 'from-brand-blue-600 to-brand-blue-500'
        };
      case 'royal':
        return {
          cardBg: 'bg-white',
          accentBorder: 'border-brand-blue-700',
          badgeBg: 'bg-blue-50 text-blue-800 border-blue-200',
          iconBg: 'bg-blue-50 text-blue-700',
          buttonBg: 'bg-brand-blue-800 hover:bg-brand-blue-950 text-white shadow-brand-blue-900/15',
          tagIcon: 'text-brand-blue-800',
          highlight: 'from-brand-blue-800 to-brand-blue-600'
        };
      case 'gold':
        return {
          cardBg: 'bg-brand-gold-50/40 border-brand-gold-200/60',
          accentBorder: 'border-brand-gold-500',
          badgeBg: 'bg-brand-gold-100 text-brand-gold-800 border-brand-gold-300',
          iconBg: 'bg-brand-gold-100 text-brand-gold-700',
          buttonBg: 'bg-gradient-to-r from-brand-gold-500 to-brand-gold-600 hover:from-brand-gold-600 hover:to-brand-gold-700 text-white shadow-brand-gold-500/10',
          tagIcon: 'text-brand-gold-600',
          highlight: 'from-brand-gold-500 to-brand-gold-400'
        };
    }
  };

  return (
    <section id="courses" className="py-20 bg-white relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-0 w-72 h-72 rounded-full bg-brand-blue-50/40 blur-3xl" />
        <div className="absolute bottom-[20%] left-0 w-72 h-72 rounded-full bg-brand-gold-50/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-blue-50 border border-brand-blue-100 px-3 py-1 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-brand-gold-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-850">Our Academic Programs</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-blue-950 tracking-tight leading-tight">
            Comprehensive Courses for Better Academic Outcomes
          </h2>
          <div className="h-1 w-20 bg-brand-gold-400 mx-auto mt-5 rounded-full" />
          <p className="text-sm sm:text-base text-brand-blue-950/60 font-semibold mt-4">
            Structured batches, conceptual clarity, and rigorous assessments designed to unleash every student’s potential.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => {
            const styles = getThemeClasses(course.colorTheme);
            return (
              <div
                key={course.id}
                className={`flex flex-col h-full rounded-3xl border border-brand-blue-100 shadow-xl shadow-brand-blue-950/5 hover:shadow-2xl hover:shadow-brand-blue-950/10 hover:scale-[1.01] transition-all duration-300 overflow-hidden relative ${styles.cardBg}`}
              >
                {/* Accent Top Border Accent */}
                <div className={`h-2 w-full bg-gradient-to-r ${styles.highlight}`} />

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Badge & Schedule Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                      {course.badge && (
                        <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border tracking-wider uppercase ${styles.badgeBg}`}>
                          {course.badge}
                        </span>
                      )}
                      
                      <div className="flex items-center text-xs font-bold text-brand-blue-950/60 space-x-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{course.schedule}</span>
                      </div>
                    </div>

                    {/* Course Title */}
                    <div className="flex items-start space-x-3.5 mb-4">
                      <div className={`p-3 rounded-2xl ${styles.iconBg} flex-shrink-0`}>
                        {getCourseIcon(course.id, styles.tagIcon)}
                      </div>
                      <div>
                        <h3 className="font-display font-black text-xl sm:text-2xl text-brand-blue-950 tracking-tight">
                          {course.title}
                        </h3>
                        <p className="text-xs font-bold text-brand-blue-500 uppercase tracking-wider mt-0.5">
                          {course.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Curriculum / Focus Areas */}
                    <div className="pt-4 border-t border-brand-blue-50 space-y-3.5">
                      <p className="text-xs font-bold text-brand-blue-950/50 uppercase tracking-widest mb-1.5">Curriculum Focus</p>
                      {course.subjects.map((subject, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5">
                          <div className={`p-0.5 rounded-full mt-0.5 bg-brand-gold-100 text-brand-gold-700 flex-shrink-0`}>
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span className="text-sm font-semibold text-brand-blue-950/80 leading-snug">
                            {subject}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enroll Link CTA */}
                  <div className="pt-8 mt-6 border-t border-brand-blue-50">
                    <button
                      onClick={() => onSelectCourse(course.id)}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-sm tracking-tight inline-flex items-center justify-center space-x-1.5 transition-all ${styles.buttonBg}`}
                    >
                      <span>Inquire & Enroll</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <p className="text-center text-[11px] font-bold text-brand-blue-950/40 mt-3">
                      Limited seats per batch for personal monitoring
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
