
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center staggered-fade-in">
          <span className="inline-block px-4 py-1 mb-4 bg-sage/20 text-sage font-medium rounded-full text-sm">
            Thoughtfully Designed Market Companions
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-espresso leading-tight mb-6">
            Carry More, Care More –<br /> The Perfect Tote for Your Market Strolls
          </h1>
          <p className="text-lg md:text-xl font-light text-muted-foreground mb-10 max-w-2xl mx-auto">
            Designed for the way you shop: roomy, stylish, and practical. With a dedicated wine pocket and a space for fresh flowers, The Market Tote makes every market run feel intentional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#collection" className="btn-primary">
              Shop the Collection
            </a>
            <a href="#story" className="btn-secondary">
              Discover Our Story
            </a>
          </div>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="relative mx-auto mt-16 md:mt-12 max-w-5xl px-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
        <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/9] bg-sand">
          <div className="absolute inset-0 bg-gradient-to-b from-sage/20 to-cream/20"></div>
          <div className="aspect-[16/9] w-full h-full flex items-center justify-center text-espresso/30 font-serif text-2xl">
            Lifestyle image of person carrying The Market Tote
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-12 right-24 w-32 h-32 rounded-full bg-terracotta/10 blur-3xl"></div>
        <div className="absolute -bottom-8 left-12 w-24 h-24 rounded-full bg-sage/20 blur-2xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-clay/20 blur-2xl"></div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-espresso/50 flex flex-col items-center">
        <span className="text-sm font-medium mb-2">Scroll to explore</span>
        <ChevronDown size={20} className="scroll-indicator" />
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-sage/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-terracotta/5 blur-3xl"></div>
    </section>
  );
};

export default Hero;
