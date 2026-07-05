export interface Course {
  id: string;
  title: string;
  subtitle: string;
  subjects: string[];
  badge?: string;
  schedule?: string;
  colorTheme: 'blue' | 'gold' | 'royal';
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., "Student, Class 9" or "Parent of Class 3 Student"
  text: string;
  rating: number;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'classroom' | 'celebration' | 'activity' | 'notes';
  imageUrl: string;
  caption: string;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  classLevel: string;
  message: string;
  date: string;
  status: 'New' | 'Contacted';
}
