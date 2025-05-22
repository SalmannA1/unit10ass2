import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Joining Hot Beans Web as a junior developer was the best career decision I've ever made. The supportive environment and mentorship opportunities have accelerated my growth tremendously.",
    name: "Emma Johnson",
    role: "Former Junior Developer",
    company: "Now Senior Developer at TechCorp"
  },
  {
    id: 2,
    content: "The training program at Hot Beans Web provided me with real-world project experience that was invaluable. I was able to build a strong portfolio that helped me advance in my career.",
    name: "David Chen",
    role: "Former Trainee",
    company: "Now Frontend Lead at WebSolutions"
  },
  {
    id: 3,
    content: "Hot Beans Web doesn't just teach you how to code - they teach you how to be a professional developer. From code reviews to client communication, I learned skills that set me apart.",
    name: "Sophia Patel",
    role: "Former Intern",
    company: "Now Full Stack Developer at AppWorks"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-700">
            Hear from former trainees who started their careers at Hot Beans Web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md relative"
            >
              <Quote className="h-8 w-8 text-blue-200 absolute top-6 left-6" />
              <div className="pt-8">
                <p className="text-gray-700 mb-6 relative z-10">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-blue-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;