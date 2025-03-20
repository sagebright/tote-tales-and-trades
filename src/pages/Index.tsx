
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Products from '@/components/Products';
import Care from '@/components/Care';
import Reviews from '@/components/Reviews';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream antialiased">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Products />
        <Care />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
