export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // index of options
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  summary: string;
  content: string; // Detail markdown-like text
  quiz: QuizQuestion;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  duration: string;
  difficulty: "Cơ bản" | "Trung cấp" | "Chuyên sâu";
  lecturer: string;
  lessons: Lesson[];
  image: string;
  tags: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  origin: string; // HTX name & region
  price: number;
  imageUrl: string;
  story: string; // Deep storytelling description
  process: string[]; // Steps of traditional production
  culturalValue: string; // Local community value
  specs: { [key: string]: string };
}

export interface BookArticle {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  content: string; 
  category: "Lối sống giản dị" | "Triết lý kinh doanh" | "Học tập Bác Hồ";
  author: string;
  date: string;
  readingTime: string;
  quote?: string;
}

export interface IndustryFellow {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  specialties: string[];
  connectionType: "Tư vấn thiết kế" | "Phát triển thị trường" | "Công nghệ thực phẩm" | "Chuyển đổi số";
}

export interface Cooperative {
  id: string;
  name: string;
  latitude: number; // Approx GPS or schematic coordinates
  longitude: number;
  province: string;
  representative: string;
  mainProduct: string;
  story: string;
  established: string;
  memberCount: number;
  phone: string;
}
