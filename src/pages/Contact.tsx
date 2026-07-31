import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="font-headline-lg text-headline-lg text-on-surface">Contact</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
