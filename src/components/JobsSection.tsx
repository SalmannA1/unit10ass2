import React, { useState } from 'react';
import { jobs } from '../data/jobs';
import { MapPin, Clock, Building, ChevronDown, ChevronUp } from 'lucide-react';

const JobsSection: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleJob = (id: number) => {
    if (expandedJob === id) {
      setExpandedJob(null);
    } else {
      setExpandedJob(id);
    }
  };

  return (
    <section id="jobs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
          <p className="text-lg text-gray-700">
            Join our team and kick-start your web development career. We're looking for talented individuals who are passionate about creating exceptional web experiences.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div 
                className="p-6 cursor-pointer flex justify-between items-start"
                onClick={() => toggleJob(job.id)}
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-600 mb-2">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-1" />
                      <span>{job.department}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                      {job.level}
                    </span>
                  </div>
                </div>
                <div>
                  {expandedJob === job.id ? (
                    <ChevronUp className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-500" />
                  )}
                </div>
              </div>
              
              {expandedJob === job.id && (
                <div className="p-6 pt-0 border-t border-gray-200">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-700">{job.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Responsibilities</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Qualifications</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {job.qualifications.map((qualification, index) => (
                        <li key={index}>{qualification}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Benefits</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {job.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <a 
                      href="#apply" 
                      className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors inline-block"
                    >
                      Apply for this position
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsSection;