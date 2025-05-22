import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TeamSection from './components/TeamSection';
import JobsSection from './components/JobsSection';
import ResourcesSection from './components/ResourcesSection';
import ApplicationForm from './components/ApplicationForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <TeamSection />
      <Testimonials />
      <JobsSection />
      <ResourcesSection />
      <ApplicationForm />
      <Footer />
    </div>
  );
}

export default App;