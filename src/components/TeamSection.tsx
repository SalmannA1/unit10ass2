import React from 'react';
import { developers } from '../data/developers';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-700">
            Get to know our talented trainee developers who started their careers with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {developers.map((developer) => (
            <div 
              key={developer.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={developer.imageUrl} 
                  alt={developer.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{developer.name}</h3>
                <p className="text-blue-500 mb-3">{developer.role}</p>
                <p className="text-gray-700 mb-4">{developer.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {developer.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-gray-700 italic">"{developer.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;