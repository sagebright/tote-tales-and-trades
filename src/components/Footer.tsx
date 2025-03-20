
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Newsletter from './Newsletter';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "All Totes", href: "#" },
        { name: "The Wide Canvas", href: "#" },
        { name: "The Square Canvas", href: "#" },
        { name: "The Recycled Tote", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "Our Story", href: "#" },
        { name: "Contact", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Shipping & Returns", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Care Guide", href: "#" },
        { name: "Privacy Policy", href: "#" }
      ]
    }
  ];
  
  return (
    <footer className="bg-sand/30 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-clay/20">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-medium text-espresso mb-2">
                The Market Tote
              </h2>
              <p className="text-muted-foreground">
                Thoughtfully designed companions for your market journeys.
              </p>
            </div>
            
            <Newsletter />
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-medium text-espresso mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-espresso transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © {currentYear} The Market Tote. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-cream flex items-center justify-center text-espresso transition-all duration-300 hover:bg-clay/20"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-cream flex items-center justify-center text-espresso transition-all duration-300 hover:bg-clay/20"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-cream flex items-center justify-center text-espresso transition-all duration-300 hover:bg-clay/20"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
