import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logo} alt="NewsDelivered.com" className="h-10" />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            Got You!
          </a>
          <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
            Our Way
          </Link>
          <Link to="/channels" className="text-foreground hover:text-primary transition-colors">
            Channels
          </Link>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
            Pricing
          </a>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button variant="hero" onClick={() => window.location.href = '/contact'}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;