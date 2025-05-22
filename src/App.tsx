import React from 'react';
import Header from './components/Header';
import About from './components/About';
import TeamSection from './components/TeamSection';
import JobsSection from './components/JobsSection';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main>
        <About />
        <TeamSection />
        <JobsSection />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;