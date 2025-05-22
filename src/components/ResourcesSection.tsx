import React from 'react';
import { courses } from '../data/courses';
import { ExternalLink, Clock, BookOpen, Award } from 'lucide-react';

const ResourcesSection: React.FC = () => {
  return (
    <section id="resources" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Web Development Resources</h2>
          <p className="text-lg text-gray-700">
            Looking to enhance your web development skills? Check out these courses and resources to help you prepare for a career at Hot Beans Web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-blue-500 mb-4">by {course.provider}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{course.level}</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{course.duration}</span>
                  </div>
                  <div className="flex items-start">
                    <BookOpen className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{course.description}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4">
                  <a 
                    href={course.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors inline-flex items-center"
                  >
                    View Course
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Resources</h3>
          <p className="text-gray-700 mb-4">
            Beyond these courses, we recommend exploring these platforms for continuous learning:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a 
                href="https://developer.mozilla.org/en-US/" 
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN Web Docs
              </a> - Comprehensive documentation for web technologies
            </li>
            <li>
              <a 
                href="https://css-tricks.com/" 
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS-Tricks
              </a> - Tips, tricks, and techniques for CSS
            </li>
            <li>
              <a 
                href="https://www.freecodecamp.org/" 
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                freeCodeCamp
              </a> - Free coding challenges and projects
            </li>
            <li>
              <a 
                href="https://github.com/" 
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a> - Contribute to open-source projects to gain experience
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;