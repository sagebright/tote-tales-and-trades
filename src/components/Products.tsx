
import { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  price: string;
}

const Products = () => {
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
  
  const products: Product[] = [
    {
      id: 1,
      name: "The Wide Canvas Tote",
      subtitle: "Spacious & Sturdy",
      description: "Spacious and stylish, this wide canvas tote is made for bigger hauls. With reinforced handles and a structured base, it's ready for fresh finds and local treasures.",
      image: "wide-tote",
      price: "$58"
    },
    {
      id: 2,
      name: "The Square Canvas Tote",
      subtitle: "Perfect Balance",
      description: "Compact yet roomy, this square canvas tote is ideal for everyday shopping. A perfect balance of structure and softness.",
      image: "square-tote",
      price: "$48"
    },
    {
      id: 3,
      name: "The Recycled Square Tote",
      subtitle: "Eco-Friendly",
      description: "Lightweight, water-resistant, and tough enough for all your grocery runs. Made from recycled materials for a lower impact on the planet.",
      image: "recycled-tote",
      price: "$42"
    }
  ];
  
  return (
    <section 
      id="collection" 
      ref={sectionRef}
      className="section-padding bg-sand/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm text-terracotta font-medium mb-2 inline-block">THE COLLECTION</span>
          <h2 className="section-title">Choose Your Market Tote</h2>
          <p className="section-subtitle">
            Pick the style that fits your vibe—each tote is designed for durability, functionality, and effortless style.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`product-card bg-white rounded-2xl overflow-hidden shadow-md ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="aspect-square bg-cream relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-espresso/30 font-serif text-xl">
                  {product.name}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-serif text-espresso">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.subtitle}</p>
                  </div>
                  <span className="text-lg font-medium text-espresso">{product.price}</span>
                </div>
                
                <p className="text-muted-foreground mb-6 text-sm">
                  {product.description}
                </p>
                
                <a href="#" className="btn-tertiary flex items-center gap-1 text-sm">
                  Shop Now
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
