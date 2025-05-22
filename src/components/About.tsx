import React from 'react';
import { CheckCircle, Users, Clock, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Hot Beans Web</h2>
          <p className="text-lg text-gray-700">
            We're a dynamic web development agency that combines technical expertise with creative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Hot Beans Web, we're committed to building exceptional digital experiences while nurturing the next generation of web development talent. We believe in providing opportunities for new developers to grow their skills in a supportive environment.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong className="text-gray-900">Innovation:</strong> We embrace new technologies and approaches to deliver cutting-edge solutions.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong className="text-gray-900">Growth:</strong> We invest in our team's development, providing mentorship and learning opportunities.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong className="text-gray-900">Quality:</strong> We maintain high standards in our code and project delivery.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong className="text-gray-900">Collaboration:</strong> We work together, sharing knowledge and supporting each other.</span>
              </li>
            </ul>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team collaboration" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <Users className="h-10 w-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Team</h3>
            <p className="text-gray-700">
              We're a diverse team of passionate web developers, designers, and digital strategists working together to create exceptional online experiences.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <Briefcase className="h-10 w-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Work</h3>
            <p className="text-gray-700">
              From e-commerce platforms to custom web applications, we build solutions that help our clients achieve their business goals.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <Clock className="h-10 w-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Process</h3>
            <p className="text-gray-700">
              We follow a collaborative approach to development, keeping our clients involved throughout the project lifecycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;