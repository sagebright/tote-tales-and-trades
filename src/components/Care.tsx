
import { useState, useEffect, useRef } from 'react';
import { CheckCircle, Droplet, Recycle } from 'lucide-react';

const Care = () => {
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
      id="care" 
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side: Image */}
          <div className={`lg:w-1/2 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-square bg-sand">
                <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-transparent"></div>
                <div className="aspect-square w-full h-full flex items-center justify-center text-espresso/30 font-serif text-2xl">
                  A tote being folded neatly or hung on a hook
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -z-10 bottom-1/4 -left-16 w-48 h-48 rounded-full bg-sage/10 blur-3xl"></div>
              <div className="absolute -z-10 top-1/3 -right-12 w-32 h-32 rounded-full bg-clay/20 blur-3xl"></div>
            </div>
          </div>
          
          {/* Right side: Text */}
          <div className={`lg:w-1/2 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <span className="text-sm text-terracotta font-medium mb-2 inline-block">USAGE & CARE</span>
            <h2 className="section-title">Take It Everywhere, Use It Forever</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Your tote should last as long as your love for the market. Here's how to keep it looking its best:
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center text-sage">
                  <Droplet size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Canvas Totes</h3>
                  <p className="text-muted-foreground">
                    Spot clean or gentle machine wash, lay flat to dry. Remove any stains promptly with mild soap and water.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta">
                  <Recycle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Recycled Tote</h3>
                  <p className="text-muted-foreground">
                    Wipe clean with a damp cloth. Avoid machine washing to preserve the water-resistant finish and structure.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-clay/20 flex items-center justify-center text-clay">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Storage</h3>
                  <p className="text-muted-foreground">
                    Folds flat when not in use. Store in a cool, dry place. Avoid prolonged direct sunlight to prevent fading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute -z-10 top-0 left-1/4 w-64 h-64 rounded-full bg-sage/5 blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 right-1/3 w-80 h-80 rounded-full bg-terracotta/5 blur-3xl"></div>
    </section>
  );
};

export default Care;
