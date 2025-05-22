import React from 'react';
import { Code } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Code className="h-6 w-6 text-blue-500 mr-2" />
          <h1 className="text-xl font-bold">Hot Beans Web</h1>
        </div>
        <nav>
          <a href="#about" className="mr-4 text-gray-600 hover:text-blue-500">About</a>
          <a href="#team" className="mr-4 text-gray-600 hover:text-blue-500">Team</a>
          <a href="#jobs" className="mr-4 text-gray-600 hover:text-blue-500">Jobs</a>
          <a href="#apply" className="bg-blue-500 text-white px-4 py-2 rounded">Apply Now</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;