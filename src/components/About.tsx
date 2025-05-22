import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">About Hot Beans Web</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 mb-6">
            We're a friendly web development company looking for new developers to join our team. 
            We believe in helping new developers grow and learn in a supportive environment.
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
              <p className="text-gray-600">We provide training and mentorship</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
              <p className="text-gray-600">Work on real projects with our team</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
              <p className="text-gray-600">Learn modern web development tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;