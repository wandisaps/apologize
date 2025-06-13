import React from 'react';
import { Hero } from './components/Hero';
import { ApologySection } from './components/ApologySection';
import { CommitmentSection } from './components/CommitmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ApologySection />
      <CommitmentSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;