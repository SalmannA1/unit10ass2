export interface Developer {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  skills: string[];
  quote: string;
}

export interface JobListing {
  id: number;
  title: string;
  level: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
}

export interface Course {
  id: number;
  title: string;
  provider: string;
  url: string;
  level: string;
  duration: string;
  description: string;
  topics: string[];
}