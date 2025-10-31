const Footer = () => {
  return <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-primary-glow">NewsDelivered.com</h3>
            <p className="text-background/70 leading-relaxed">Contact us to increase your revenue through highly engaging email newsletters.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="/services" className="hover:text-primary-glow transition-colors">Our Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Channels</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="/channels" className="hover:text-primary-glow transition-colors">View Channels</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="/tools" className="hover:text-primary-glow transition-colors">Our Tools</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="/contact" className="hover:text-primary-glow transition-colors">Get in Touch</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/70">
            © 2024 NewsDelivered.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;