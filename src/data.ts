import { Course, Feature, Testimonial, GalleryItem } from './types';

export const COURSES: Course[] = [
  {
    id: 'classes-1-6',
    title: 'Classes 1–6',
    subtitle: 'Foundation Builders Program',
    subjects: ['All Subjects (English, Maths, Science, Social Studies, Assamese/Hindi)'],
    badge: 'All Subjects Included',
    schedule: 'Monday to Friday',
    colorTheme: 'blue'
  },
  {
    id: 'classes-7-10',
    title: 'Classes 7–10',
    subtitle: 'Board Prep & Excellence Program',
    subjects: ['Mathematics', 'Science (Physics, Chemistry, Biology)'],
    badge: 'Specialized Coaching',
    schedule: 'Monday to Saturday',
    colorTheme: 'royal'
  },
  {
    id: 'spoken-english',
    title: 'Spoken English',
    subtitle: 'Sunday Fluency Masterclass',
    subjects: ['Grammar & Vocabulary', 'Public Speaking & Presentation', 'Confidence Building', 'Group Discussions'],
    badge: 'Weekend Special',
    schedule: 'Every Sunday (Dedicated Batches)',
    colorTheme: 'gold'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'discipline',
    title: 'Discipline Maintained',
    description: 'We believe that structured discipline is the bridge between goals and accomplishments. Timely attendance and positive conduct are non-negotiable.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'notes',
    title: 'Proper Notes',
    description: 'Highly organized, comprehensive class notes and customized study materials provided for easy revision and deep conceptual clarity.',
    iconName: 'NotebookPen'
  },
  {
    id: 'weekly-tests',
    title: 'Weekly Tests',
    description: 'Regular unit assessments conducted every weekend to track ongoing comprehension, reinforce learning, and build exam confidence.',
    iconName: 'FileCheck'
  },
  {
    id: 'progress-reports',
    title: 'Monthly Progress Reports',
    description: 'Detailed metrics-based feedback shared with parents monthly, highlighting individual improvement, strengths, and targeted focus areas.',
    iconName: 'TrendingUp'
  },
  {
    id: 'individual-attention',
    title: 'Individual Attention',
    description: 'Small, focused batches allow our mentors to adapt explanations, resolve unique struggles, and motivate each student personally.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'experienced-teachers',
    title: 'Experienced Teachers',
    description: 'Our coaching is led by dedicated subject matter educators with a proven track record of outstanding academic result outcomes.',
    iconName: 'GraduationCap'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Anirban Sarma',
    role: 'Parent of Class 8 Student',
    text: 'BrightHub Academy has completely transformed my son’s approach to Mathematics. The proper study notes and weekly tests helped him jump from 65% to 92% in his finals. Extremely grateful to the dedicated teachers!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't2',
    name: 'Nisha Kalita',
    role: 'Class 10 Student',
    text: 'Science was my biggest fear until I joined BrightHub. The detailed notes and personalized attention made complex topics so simple. I scored 95 in Science and 94 in Maths in my CBSE Boards!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't3',
    name: 'Debojit Bora',
    role: 'Spoken English Student',
    text: 'The Spoken English Sunday batch is amazing. I used to hesitate to speak even a single line of English. Now, after 3 months of interactive debates and group discussions, I speak confidently in public!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Active Study Sessions',
    category: 'classroom',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
    caption: 'Our modern, comfortable, and disturbance-free classroom environment conducive to deep learning.'
  },
  {
    id: 'g2',
    title: 'Interactive Group Learning',
    category: 'activity',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    caption: 'Peer-to-peer discussion and interactive conceptual learning during our mid-week classes.'
  },
  {
    id: 'g3',
    title: 'Weekly Test Evaluations',
    category: 'notes',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
    caption: 'Structured assessment environment maintaining strict academic discipline.'
  },
  {
    id: 'g4',
    title: 'Sunday Spoken English Club',
    category: 'classroom',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    caption: 'Confidence building activities, public speaking speeches, and active interactive debates.'
  }
];
