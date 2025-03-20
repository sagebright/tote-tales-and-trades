
import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Story', href: '#story' },
    { name: 'Collection', href: '#collection' },
    { name: 'Care', href: '#care' },
    { name: 'Reviews', href: '#reviews' },
  ];
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-cream/80 backdrop-blur-md py-3 shadow-sm' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="relative z-10">
          <h1 className="text-2xl font-serif font-medium text-espresso">
            The Market Tote
          </h1>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              className="text-espresso transition-colors duration-300 hover:text-terracotta link-underline"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#collection" 
            className="btn-primary flex items-center gap-2 py-2"
          >
            <ShoppingBag size={18} />
            <span>Shop</span>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-10 text-espresso" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Navigation */}
        <div 
          className={cn(
            'fixed inset-0 bg-cream/98 flex flex-col items-center justify-center transition-all duration-500 ease-in-out',
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          )}
        >
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href}
                className="text-espresso text-xl transition-colors duration-300 hover:text-terracotta"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#collection" 
              className="btn-primary flex items-center gap-2 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ShoppingBag size={18} />
              <span>Shop</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
