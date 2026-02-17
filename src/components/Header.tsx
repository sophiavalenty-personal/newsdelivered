import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/services", label: "Services" },
    { to: "/pricing", label: "Pricing" },
    { to: "/channels", label: "Channels" },
    { to: "/tools", label: "Tools" },
    { to: "/demo", label: "Demo" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logo} alt="NewsDelivered.com" className="w-[160px] md:w-[200px]" />
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ to, label }) => (
            <NavLink 
              key={to}
              to={to} 
              className={({ isActive }) => 
                `pb-1 transition-colors ${
                  isActive 
                    ? "text-primary font-semibold border-b-2 border-primary" 
                    : "text-foreground hover:text-primary"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        
        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="hero" onClick={() => window.location.href = '/contact'}>
            Schedule Free Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map(({ to, label }) => (
              <NavLink 
                key={to}
                to={to} 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `py-2 text-lg transition-colors ${
                    isActive 
                      ? "text-primary font-semibold" 
                      : "text-foreground hover:text-primary"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Button 
              variant="hero" 
              className="w-full mt-2"
              onClick={() => { window.location.href = '/contact'; setMobileMenuOpen(false); }}
            >
              Schedule Free Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;