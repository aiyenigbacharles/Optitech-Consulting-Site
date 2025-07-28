
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-15 h-15 bg-gradient-to-r from-consulting-blue to-consulting-light-blue rounded-lg flex items-center justify-center">
                                <img 
                  src="./OptiTech Logo - 1.ico" 
                  alt="OptiTech Logo" 
                  className="w-20 h-20 rounded-lg" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-consulting-blue">OptiTech</span>
                <span className="text-base text-consulting-light-blue">Consulting Ltd</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for cutting-edge IT solutions, expert advisory services, 
              and advanced technology training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-consulting-light-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-consulting-light-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-consulting-light-blue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-consulting-light-blue transition-colors">Services</Link></li>
              <li><Link to="/industries" className="text-gray-300 hover:text-consulting-light-blue transition-colors">Industries</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-consulting-light-blue transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-consulting-light-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-consulting-light-blue" />
                <span className="text-gray-300 text-sm">optitechconsultingltd@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-consulting-light-blue" />
                <span className="text-gray-300 text-sm">+234 806 633 1176, +234 802 535 2020</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-consulting-light-blue" />
                <span className="text-gray-300 text-sm">19B, Kampala Street, Off Cairo Street, Ademola Adetokunbo Road, Wuse II, Abuja</span>
              </li>
            </ul>
          </div>
        </div>

        

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 OptiTech Consulting Ltd. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-consulting-light-blue text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-consulting-light-blue text-sm transition-colors">Terms of Service</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
