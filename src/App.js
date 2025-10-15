import React from 'react';
import Hero from './components/Hero';
import CreativeSolution from './components/CreativeSolution';
import ServiceFeatures from './components/ServiceFeatures';
import SocialProof from './components/SocialProof';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <CreativeSolution />
      <ServiceFeatures />
      <SocialProof />
      <CallToAction />
    </div>
  );
}

export default App;
