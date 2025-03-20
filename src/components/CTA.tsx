
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div 
          className={`relative z-10 bg-espresso text-cream rounded-3xl p-10 md:p-16 overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready for Your Next Market Run?</h2>
            <p className="text-lg text-cream/90 mb-10">
              Choose the tote that fits your lifestyle and make your next market trip effortless.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#collection" 
                className="px-6 py-3 bg-cream text-espresso rounded-full inline-block font-medium transition-all duration-300 hover:bg-cream/90 hover:shadow-lg hover:shadow-black/10 flex items-center justify-center gap-2"
              >
                Shop the Collection
                <ArrowRight size={18} />
              </a>
              <a 
                href="#" 
                className="px-6 py-3 bg-transparent border-2 border-cream/50 text-cream rounded-full inline-block font-medium transition-all duration-300 hover:bg-cream/10"
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-terracotta/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-sage/10 blur-3xl"></div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute -z-10 top-1/3 left-0 w-72 h-72 rounded-full bg-sage/10 blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 right-1/4 w-80 h-80 rounded-full bg-clay/10 blur-3xl"></div>
    </section>
  );
};

export default CTA;
