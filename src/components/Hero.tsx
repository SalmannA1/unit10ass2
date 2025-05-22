import React from 'react';
import { ArrowRight, Code, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-sky-100 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Start Your Web Development Journey With Us
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Hot Beans Web is looking for talented individuals ready to launch their careers in web development. Join our team and grow with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#jobs" 
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#team" 
                className="bg-white text-blue-500 px-6 py-3 rounded-md border border-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                Meet Our Team
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team collaboration" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovative Projects</h3>
            <p className="text-gray-600">
              Work on cutting-edge web applications for clients across various industries.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Supportive Team</h3>
            <p className="text-gray-600">
              Join a collaborative environment where mentorship and growth are prioritized.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Career Development</h3>
            <p className="text-gray-600">
              Access continuous learning opportunities and a clear path for advancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;