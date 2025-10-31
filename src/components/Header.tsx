import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logo} alt="NewsDelivered.com" className="w-[200px]" />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              `pb-1 transition-colors ${
                isActive 
                  ? "text-primary font-semibold border-b-2 border-primary" 
                  : "text-foreground hover:text-primary"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/channels" 
            className={({ isActive }) => 
              `pb-1 transition-colors ${
                isActive 
                  ? "text-primary font-semibold border-b-2 border-primary" 
                  : "text-foreground hover:text-primary"
              }`
            }
          >
            Channels
          </NavLink>
          <NavLink 
            to="/tools" 
            className={({ isActive }) => 
              `pb-1 transition-colors ${
                isActive 
                  ? "text-primary font-semibold border-b-2 border-primary" 
                  : "text-foreground hover:text-primary"
              }`
            }
          >
            Tools
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `pb-1 transition-colors ${
                isActive 
                  ? "text-primary font-semibold border-b-2 border-primary" 
                  : "text-foreground hover:text-primary"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="hero" onClick={() => window.location.href = '/contact'}>
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;