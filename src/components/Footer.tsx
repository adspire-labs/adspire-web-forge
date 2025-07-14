
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
    <div className="w-10 h-10 flex items-center justify-center">
      <img 
        src="logo/logo.png" 
        alt="Adspire Labs Logo"
        className="h-full w-full object-contain rounded-lg"
      />
    </div>
    <span className="font-bold text-lg text-foreground">Adspire Labs</span>
  </div>
            <p className="text-muted-foreground">
              Creative agency in Butwal building brands that inspire through creativity and execution.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">📍 Butwal-11, Kalikanagar</p>
              <p className="text-sm text-muted-foreground">📞 9845323733</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
              <li><Link to="/courses" className="text-muted-foreground hover:text-foreground transition-colors">Courses</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Website Development</li>
              <li>Digital Marketing</li>
              <li>Graphic Design</li>
              <li>Video Production</li>
              <li>Social Media Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Contact</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <strong className="text-foreground">General:</strong><br />
                <a href="mailto:info@adspirelabs.com.np" className="hover:text-foreground transition-colors">
                  info@adspirelabs.com.np
                </a>
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Training:</strong><br />
                <a href="mailto:training@adspirelabs.com.np" className="hover:text-foreground transition-colors">
                  training@adspirelabs.com.np
                </a>
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">WhatsApp:</strong><br />
                <a href="https://wa.me/9779845323733" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  +977 9845323733
                </a>
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/adspirelab" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/adspire.labs" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/adspire-labs/" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/9779845323733" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Adspire Labs. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              Creativity that Converts. Execution that Inspires.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
