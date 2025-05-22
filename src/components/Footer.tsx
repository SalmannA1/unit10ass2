import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +44 (0) 1234 567890
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                careers@hotbeansweb.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <p><a href="#about" className="hover:text-secondary-100">About Us</a></p>
              <p><a href="#team" className="hover:text-secondary-100">Our Team</a></p>
              <p><a href="#jobs" className="hover:text-secondary-100">Jobs</a></p>
              <p><a href="#apply" className="hover:text-secondary-100">Apply Now</a></p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-primary-600 text-center">
          <p>&copy; {new Date().getFullYear()} Hot Beans Web. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;