const Footer = () => {
  return <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-glow">NewsDelivered.com</h3>
            <p className="text-background/70 leading-relaxed">Contact us to increase your revenue through highly engaging email newsletters.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-primary-glow transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">API</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-primary-glow transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-primary-glow transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Privacy</a></li>
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