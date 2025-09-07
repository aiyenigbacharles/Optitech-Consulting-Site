
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-consulting-blue to-consulting-light-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <img 
                  src="./OptiTech Logo - 1.ico" 
                  alt="OptiTech Logo" 
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg" 
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-consulting-blue">OptiTech</span>
                <span className="text-sm sm:text-base text-consulting-light-blue">Consulting Ltd</span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-md leading-relaxed">
              Your trusted partner for cutting-edge IT solutions, expert advisory services, 
              and advanced technology training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-consulting-light-blue transition-colors p-2 -ml-2 rounded-lg hover:bg-gray-800">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-consulting-light-blue transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm sm:text-base text-gray-300 hover:text-consulting-light-blue transition-colors block py-1">About Us</Link></li>
              <li><Link to="/services" className="text-sm sm:text-base text-gray-300 hover:text-consulting-light-blue transition-colors block py-1">Services</Link></li>
              <li><Link to="/industries" className="text-sm sm:text-base text-gray-300 hover:text-consulting-light-blue transition-colors block py-1">Industries</Link></li>
              <li><Link to="/testimonials" className="text-sm sm:text-base text-gray-300 hover:text-consulting-light-blue transition-colors block py-1">Testimonials</Link></li>
              <li><Link to="/contact" className="text-sm sm:text-base text-gray-300 hover:text-consulting-light-blue transition-colors block py-1">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-consulting-light-blue mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base break-all">optitechconsultingltd@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-consulting-light-blue mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm sm:text-base">
                  <div>+234 806 633 1176</div>
                  <div>+234 802 535 2020</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-consulting-light-blue mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base leading-relaxed">19B, Kampala Street, Off Cairo Street, Ademola Adetokunbo Road, Wuse II, Abuja</span>
              </li>
            </ul>
          </div>
        </div>

        

        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm">
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
