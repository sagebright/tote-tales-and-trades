
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="text-center max-w-md">
        <span className="inline-block px-4 py-1 mb-4 bg-sage/20 text-sage font-medium rounded-full text-sm">
          404 Error
        </span>
        <h1 className="text-4xl font-serif font-semibold text-espresso mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          We couldn't find the page you're looking for. Let's get you back to shopping!
        </p>
        <a 
          href="/" 
          className="btn-primary inline-flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </a>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-sage/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-terracotta/5 blur-3xl"></div>
    </div>
  );
};

export default NotFound;
