import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    provider: 'Codecademy',
    url: 'https://www.codecademy.com/learn/paths/web-development',
    level: 'Beginner to Intermediate',
    duration: '6-12 weeks',
    description: 'A comprehensive bootcamp covering HTML, CSS, JavaScript, and modern frontend frameworks.',
    topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express']
  },
  {
    id: 2,
    title: 'The Complete JavaScript Course',
    provider: 'Udemy',
    url: 'https://www.udemy.com/course/the-complete-javascript-course/',
    level: 'Beginner to Advanced',
    duration: '4-8 weeks',
    description: 'Master JavaScript with modern ES6+ features and build real-world projects.',
    topics: ['JavaScript Fundamentals', 'ES6+', 'OOP', 'Asynchronous JS', 'Modern Tooling']
  },
  {
    id: 3,
    title: 'Full Stack Open',
    provider: 'University of Helsinki',
    url: 'https://fullstackopen.com/',
    level: 'Intermediate',
    duration: '12+ weeks',
    description: 'Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go.',
    topics: ['React', 'Redux', 'Node.js', 'MongoDB', 'GraphQL', 'TypeScript']
  },
  {
    id: 4,
    title: 'Frontend Masters Web Development Bootcamp',
    provider: 'Frontend Masters',
    url: 'https://frontendmasters.com/bootcamp/',
    level: 'Beginner',
    duration: '4-6 weeks',
    description: 'A free bootcamp that introduces you to HTML, CSS, and JavaScript fundamentals.',
    topics: ['HTML', 'CSS', 'JavaScript', 'Web APIs', 'Command Line', 'Git']
  },
  {
    id: 5,
    title: 'The Odin Project',
    provider: 'The Odin Project',
    url: 'https://www.theodinproject.com/',
    level: 'Beginner to Intermediate',
    duration: '24+ weeks',
    description: 'A free, open-source curriculum for learning full-stack web development.',
    topics: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Ruby on Rails', 'Node.js']
  }
];