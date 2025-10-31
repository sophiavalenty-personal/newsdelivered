const Footer = () => {
  return <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold mb-4 text-primary-glow">NewsDelivered.com</h3>
          <p className="text-background/70 leading-relaxed max-w-2xl mx-auto">
            Contact us to increase your revenue through highly engaging email newsletters.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="/services" className="text-background/70 hover:text-primary-glow transition-colors">
            Our Services
          </a>
          <a href="/channels" className="text-background/70 hover:text-primary-glow transition-colors">
            View Channels
          </a>
          <a href="/tools" className="text-background/70 hover:text-primary-glow transition-colors">
            Our Tools
          </a>
          <a href="/contact" className="text-background/70 hover:text-primary-glow transition-colors">
            Get in Touch
          </a>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70">
            © 2024 NewsDelivered.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;