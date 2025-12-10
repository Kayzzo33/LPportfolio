import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import ContentShowcase from './components/ContentShowcase';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import AiAssistant from './components/AiAssistant';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-100 bg-nexus-dark min-h-screen selection:bg-nexus-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <ContentShowcase />
        <Stats />
        <Gallery />
        <AiAssistant />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;