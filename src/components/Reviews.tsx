
import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

const Reviews = () => {
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
  
  const reviews: Review[] = [
    {
      id: 1,
      name: "Olivia S.",
      comment: "This tote is my new farmer's market essential. The flower pocket is genius!",
      rating: 5,
    },
    {
      id: 2,
      name: "James M.",
      comment: "Finally, a bag that keeps my wine bottle upright while I shop.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ella R.",
      comment: "Looks beautiful, holds everything, and cleans up easily—what more could you ask for?",
      rating: 5,
    }
  ];
  
  return (
    <section 
      id="reviews" 
      ref={sectionRef}
      className="section-padding bg-sage/10 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm text-terracotta font-medium mb-2 inline-block">TESTIMONIALS</span>
          <h2 className="section-title">What Market Lovers Are Saying</h2>
          <p className="section-subtitle">
            Our totes have quickly become favorites among market enthusiasts. Here's what they have to say:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`glass-card rounded-xl p-6 relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < review.rating ? "fill-terracotta text-terracotta" : "text-gray-300"}
                  />
                ))}
              </div>
              
              <p className="text-lg mb-6 font-serif italic text-espresso">"{review.comment}"</p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-clay/20 flex items-center justify-center text-clay font-serif">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-espresso">{review.name}</h4>
                  <span className="text-sm text-muted-foreground">Verified Buyer</span>
                </div>
              </div>
              
              {/* Decorative quotation mark */}
              <div className="absolute -top-2 -right-2 text-6xl text-terracotta/10 font-serif">"</div>
            </div>
          ))}
        </div>
        
        {/* Customer Image */}
        <div className={`mt-16 relative rounded-2xl overflow-hidden aspect-[21/9] bg-sand ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-clay/10 to-transparent"></div>
          <div className="aspect-[21/9] w-full h-full flex items-center justify-center text-espresso/30 font-serif text-2xl">
            Customers at a market using the totes
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute -z-10 top-1/4 right-0 w-64 h-64 rounded-full bg-clay/10 blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 left-1/4 w-72 h-72 rounded-full bg-sage/20 blur-3xl"></div>
    </section>
  );
};

export default Reviews;
