import React from 'react';
import { Code } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Code className="h-6 w-6 text-primary-500 mr-2" />
          <h1 className="text-xl font-bold text-primary-700">Hot Beans Web</h1>
        </div>
        <nav>
          <a href="#about" className="mr-4 text-gray-600 hover:text-primary-500">About</a>
          <a href="#team" className="mr-4 text-gray-600 hover:text-primary-500">Team</a>
          <a href="#jobs" className="mr-4 text-gray-600 hover:text-primary-500">Jobs</a>
          <a href="#apply" className="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600">Apply Now</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;