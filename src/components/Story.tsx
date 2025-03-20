
import { useState, useEffect, useRef } from 'react';

const Story = () => {
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
      id="story" 
      ref={sectionRef} 
      className="section-padding relative overflow-hidden bg-cream"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side: Image */}
          <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-sand">
                <div className="absolute inset-0 bg-gradient-to-b from-terracotta/10 to-transparent"></div>
                <div className="aspect-[4/5] w-full h-full flex items-center justify-center text-espresso/30 font-serif text-2xl">
                  Close-up of tote's interior with a wine bottle
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-48 h-48 rounded-full bg-sage/10 blur-3xl"></div>
            <div className="absolute -z-10 top-1/3 -right-16 w-32 h-32 rounded-full bg-clay/20 blur-2xl"></div>
          </div>
          
          {/* Right side: Text */}
          <div className={`flex flex-col ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <span className="text-sm text-terracotta font-medium mb-2">OUR PHILOSOPHY</span>
            <h2 className="section-title">Not Just a Tote—<br />A Market Companion</h2>
            <p className="text-lg text-muted-foreground mb-6">
              The scent of fresh basil, the feel of sun-warmed peaches, the crisp bite of a morning breeze—market mornings are an experience. But juggling produce, flowers, and that perfect bottle of wine? That's where The Market Tote comes in.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="h-1 w-8 bg-terracotta mt-4 mr-4"></div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Thoughtful Design</h3>
                  <p className="text-muted-foreground">
                    Interior and exterior pockets for easy access to your essentials and market finds.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-1 w-8 bg-sage mt-4 mr-4"></div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Sustainable Materials</h3>
                  <p className="text-muted-foreground">
                    Durable, eco-conscious materials in three styles to match your aesthetic.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-1 w-8 bg-clay mt-4 mr-4"></div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Form & Function</h3>
                  <p className="text-muted-foreground">
                    Designed to balance beauty and function for everyday use, not just market runs.
                  </p>
                </div>
              </div>
            </div>
            
            <a href="#collection" className="btn-primary self-start">
              Find Your Perfect Tote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
