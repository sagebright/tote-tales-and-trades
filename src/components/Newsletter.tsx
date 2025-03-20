
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would call an API to subscribe
      setIsSubscribed(true);
      setEmail('');
      
      // Reset the subscription message after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
  };
  
  return (
    <div className="w-full max-w-md">
      <h3 className="text-xl font-serif mb-3">Stay in the loop</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Sign up for our newsletter to receive updates on new designs, market tips, and special offers.
      </p>
      
      {isSubscribed ? (
        <div className="bg-sage/30 p-4 rounded-lg text-sage-foreground">
          <p className="text-sm font-medium">
            Thank you for subscribing! Check your inbox soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-4 py-2 rounded-lg border border-clay/30 bg-cream text-espresso focus:outline-none focus:ring-2 focus:ring-terracotta/30 transition-all"
          />
          <button 
            type="submit" 
            className="btn-primary py-2 px-4"
            aria-label="Subscribe to newsletter"
          >
            <ArrowRight size={18} />
          </button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
